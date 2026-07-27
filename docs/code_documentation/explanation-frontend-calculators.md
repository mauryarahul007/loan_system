# Frontend Architecture & Calculator Engines

All interactive calculators and dashboard views run locally in the client browser. The frontend logic is centralized in the 4000+ line JavaScript controller [app.js](file:///c:/ProjectsV1/Loans%20project/app.js).

---

## 1. Application Initialization & State Management

When the browser triggers `DOMContentLoaded`, the application runs `DOMContentLoaded` event handlers to bind HTML listeners and hydrate data pools:

1.  **State Arrays**:
    *   `competitors`: Static object list holding audited platform metrics (focus, depth, calculators, UX, prepay, transparency, strengths, and weaknesses).
    *   `matrixFeatures`: Matrix grid matching platforms against 17 loan eligibility and calculators features (represented as `"Y"` for Yes, `"P"` for Partial, and `"N"` for No).
    *   `socialLog`: Master list of consumer complaints. Pre-hydrated with seed items, then dynamically loaded with scraped database entries.
    *   `searchIntentGaps`: Metric list containing search queries, volumes, intent classifications, and format hooks.
    *   `opportunityScoring`: RICE prioritized features.
2.  **API Hydration**:
    *   Invokes `loadLogsFromDatabase()`. Emits an asynchronous `fetch("/api/logs")` request, compares records, prepends new complaints into `socialLog`, and calls `initDashboard()` and `initSocialLog()` to repaint charts and tables.

---

## 2. Loan Payoff Planner (Snowball vs. Avalanche)

Housed in the **Payoff Planner** tab pane, this engine simulates acceleration strategies for multiple concurrent loans.

### A. Data Capture
Users input loan terms which are compiled into a global array:
*   Interest Rate ($r$)
*   Remaining Principal Balance ($P$)
*   Minimum Monthly EMI Payment ($E$)
*   Extra Prepayments (Monthly Surplus and/or Annual Lump-Sum)

### B. Math Strategy & Sorting
When the payoff calculation triggers, the engine deep-copies the loans array and sorts the loans depending on the selected strategy:
1.  **Avalanche (Highest Interest First)**: Sorts loans in descending order of their interest rates. This is mathematically optimal for minimizing total interest paid.
2.  **Snowball (Lowest Balance First)**: Sorts loans in ascending order of their remaining principal balance. This helps build psychological momentum by closing smaller accounts first.

### C. Monthly Simulation Loop
The planner executes a month-by-month loop to simulate payments:
1.  **Interest Accrual**: For each active loan, month interest is accrued:
    $$\text{Month Interest} = \text{Balance} \times \frac{\text{Rate}}{12 \times 100}$$
2.  **Lump-Sum Prepayment**: If the current month is a multiple of 12, the annual one-off prepayment amount is injected.
3.  **Surplus Pool Allocation**: The engine aggregates the standard monthly surplus prepayment plus any rollovers (EMIs from already closed loans).
4.  **Payment Allocation**:
    *   First, the minimum EMI is paid to all active loans (if the balance is less than the EMI, the remainder is returned to the surplus pool).
    *   Second, the entire aggregated surplus pool is applied to the **first loan** in the sorted queue (the target loan).
5.  **Termination**: The loop terminates when all balances reach zero. The engine records the new payoff timeline, tenure saved, and total interest saved compared to the baseline schedule.

---

## 3. Solution Studio Calculation Engines

The **Solution Studio** tab hosts interactive engines mapped to consumer pain points. Below is a breakdown of their mathematical logic and inputs:

### 1. FOIR Affordability Engine (`foir`)
*   **Concept**: Banks use FOIR (Fixed Obligation to Income Ratio) to cap monthly commitments.
*   **Formula**:
    $$\text{FOIR Cap} = \begin{cases} 60\% & \text{if Monthly Salary } \ge \text{₹1,00,000} \\ 50\% & \text{if Monthly Salary } < \text{₹1,00,000} \end{cases}$$
    $$\text{Maximum Allowed Home EMI} = (\text{Monthly Salary} \times \text{FOIR Cap}) - \text{Existing EMIs}$$
    $$\text{Max Loan Amount} = \frac{\text{Max Home EMI} \times ((1+r)^n - 1)}{r \times (1+r)^n}$$
    Where $r = \frac{\text{Rate}}{12 \cdot 100}$ and $n = \text{Tenure Years} \cdot 12$.

### 2. Balance Transfer savings Engine (`bt`)
*   **Concept**: Determines if switching to a new lender is financially beneficial after accounting for switching charges.
*   **Formula**:
    *   `Gross Savings` = Current Remaining Interest - New Remaining Interest.
    *   `Switching Cost` = Processing Fee Base (e.g. 0.25% of Principal) + 18% GST + Legal/Stamp Duty.
    *   `Net Savings` = Gross Savings - Switching Cost.
    *   `Breakeven` = $\lceil \text{Switching Cost} / (\text{Current EMI} - \text{New EMI}) \rceil$ months.

### 3. CERSAI & Property Deed Penalty Tracker (`deed`)
*   **Concept**: RBI mandates lenders return original property deeds within 30 days of loan closure.
*   **Formula**:
    $$\text{Delay Compensation} = \max(0, (\text{Days Delayed} - 30) \times \text{₹5,000/day})$$

### 4. Overdraft Account Simulator (`od`)
*   **Concept**: Models SBI Max Gain overdraft accounts where surplus cash parked in the loan account offsets interest.
*   **Formula**:
    $$\text{Effective Balance} = \max(0, \text{Loan Outstanding} - \text{Surplus Parked})$$
    $$\text{Month Interest Accrued} = \text{Effective Balance} \times \frac{\text{Rate}}{12 \times 100}$$
    The regular EMI is paid, but a higher portion goes to principal reduction due to lower interest accrual.

### 5. Floating Rate Reset Spread Engine (`spread`)
*   **Concept**: Banks often secretly increase the profit margin (spread) added to the RBI repo rate for existing customers.
*   **Inputs**: Benchmark Repo Rate, Original Customer Rate, Bank's New Quoted Rate.
*   **Formula**:
    *   `Original Spread` = Original Customer Rate - Repo Rate.
    *   `New Spread` = Bank's New Quoted Rate - Repo Rate.
    *   `Arbitrage Percentage` = New Spread - Original Spread. It outputs the annualized hidden cost paid due to spread adjustments.

### 6. Pre-Construction Interest Claim Scheduler (`precon`)
*   **Concept**: Interest paid before property possession is deductible in 5 equal annual installments.
*   **Formula**:
    $$\text{Annual Deductible Slice} = \frac{\text{Accumulated Pre-Construction Interest}}{5}$$

### 7. Regime-Aware Income Tax Tool (`tax-regime`)
*   **Concept**: Compares tax deductions under Section 24(b) (interest capped at ₹2,00,000) and Section 80C (principal capped at ₹1,50,000).
*   **Rules**:
    *   **Old Regime**: Allows full deductions under 24(b) and 80C.
    *   **New Regime**: No deductions allowed for self-occupied properties (deductions evaluate to ₹0).

### 8. Prepayment Choice Manager (`payoff-principal`)
*   **Concept**: Compares Tenure Reduction vs. EMI Reduction.
*   *Tenure Reduction*: Subtracts prepayment from balance, keeps EMI constant, recomputes remaining months.
*   *EMI Reduction*: Subtracts prepayment, keeps remaining months constant, recomputes lower EMI.
