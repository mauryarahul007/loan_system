# How-To: Add a New Calculator Engine to Solution Studio

This guide walks you through the step-by-step process of adding a new custom calculator engine to the Solution Studio, binding it to UI elements, and integrating it with the automated QA test suite.

For this example, we will walk through adding a **GST Late Fee Calculator** engine.

---

## Step 1: Register the Search Intent Gap

Open [app.js](file:///c:/ProjectsV1/Loans%20project/app.js) and locate the global `searchIntentGaps` array. Append a new gap object mapping to your target format string:

```javascript
const searchIntentGaps = [
    // ... existing items ...
    { query: "gst payment late fee rules 2026", volume: 1500, type: "Calculator", quality: 3, format: "GST late fee interest simulator" }
];
```

---

## Step 2: Set Up Engine Routing in Solution Studio

Locate `launchSolutionStudio(gap)` in [app.js](file:///c:/ProjectsV1/Loans%20project/app.js). Add a routing string match mapping to your new engine ID (`GST_LATE_FEE_ENGINE`):

```javascript
const formatLower = gap.format.toLowerCase();

if (formatLower.includes("foir") || formatLower.includes("affordability")) {
    // ...
} else if (formatLower.includes("late fee") || formatLower.includes("gst interest")) {
    renderStudioSEOArticle(gap, "GST_LATE_FEE_ENGINE");
    // Engine definition starts here
}
```

---

## Step 3: Inject UI Elements HTML

Within the routing condition block, populate the `widgetBox.innerHTML` string with input fields, labels, and output nodes. Assign **unique IDs** to all interactive elements:

```javascript
widgetBox.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
        <div class="grid-two-col" style="gap: 16px;">
            <div class="studio-input-group">
                <label for="gst-tax-due" style="display: block; font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Tax Due (₹)</label>
                <input type="number" id="gst-tax-due" value="50000" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: var(--text-primary);">
            </div>
            <div class="studio-input-group">
                <label for="gst-days-delayed" style="display: block; font-size: 11px; color: var(--text-muted); margin-bottom: 4px;">Days Delayed</label>
                <input type="number" id="gst-days-delayed" value="10" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: var(--text-primary);">
            </div>
        </div>

        <div style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 12px; margin-top: 8px;">
            <div style="font-size: 11px; color: var(--text-muted);">Total Penalty Payable</div>
            <div id="res-gst-penalty" style="font-size: 24px; font-weight: 700; color: var(--accent-orange); margin-top: 4px;">₹0</div>
        </div>
    </div>
`;
```

---

## Step 4: Write recalculate Handler and Bind Listeners

Implement the nested calculation logic inside your conditional routing block, retrieve the field values, run the math, and update the outputs:

```javascript
function recalculateGSTPenalty() {
    const taxDue = parseFloat(document.getElementById("gst-tax-due").value) || 0;
    const days = parseFloat(document.getElementById("gst-days-delayed").value) || 0;

    // GST late interest is 18% per annum
    const interest = taxDue * (0.18 / 365) * days;
    // Flat late fee of ₹50/day (₹25 CGST + ₹25 SGST)
    const lateFee = days * 50;
    const totalPenalty = interest + lateFee;

    document.getElementById("res-gst-penalty").textContent = `₹${Math.round(totalPenalty).toLocaleString("en-IN")}`;
}

// Bind recalculation triggers to inputs
["gst-tax-due", "gst-days-delayed"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", recalculateGSTPenalty);
});

// Run initial evaluation to hydrate zero-state values
recalculateGSTPenalty();
```

---

## Step 5: Add Validation Tests

To ensure that the automated validation suite recognizes your new engine and verifies its DOM elements, open [test_solutions_qa.py](file:///c:/ProjectsV1/Loans%20project/test_solutions_qa.py) and update:

1.  **Add Test Case**:
    Append your test config to the `test_cases` array:
    ```python
    test_cases = [
        # ... existing cases ...
        { "id": "TC-26", "format": "GST late fee interest simulator", "expected_ids": ["gst-tax-due", "gst-days-delayed", "res-gst-penalty"] }
    ]
    ```
2.  **Add Engine Emulator Route**:
    Update the Python helper function `simulate_format_matching(format_str)` so it associates the search query with your engine:
    ```python
    def simulate_format_matching(format_str):
        format_lower = format_str.lower()
        # ...
        elif "late fee" in format_lower or "gst interest" in format_lower:
            return "GST_LATE_FEE_ENGINE"
        # ...
    ```

---

## Step 6: Verify

Run the QA verification script locally to ensure there are no compilation errors or missing DOM bindings:

```bash
python test_solutions_qa.py
```

Expected output:
```text
[PASS] TC-26: 'GST late fee interest simulator' → Engine: GST_LATE_FEE_ENGINE | Verified Elements: ['gst-tax-due', 'gst-days-delayed', 'res-gst-penalty']
RESULTS: Total Test Cases: 26 | Passed: 26 | Failed: 0
✅ [TEST SUCCESS] 100% QA Coverage Passed for All 26 Solution Formats!
```
