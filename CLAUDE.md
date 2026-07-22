# CLAUDE.md — Loan System Project Context

This file serves as a context reference for the Home Loan Research & Social Listening Dashboard project.

---

## Build, Run, and Test Commands

### 1. Run the Application
Start the local dashboard and web-scraper server:
```sh
python server.py
```
Access the UI locally at: **`http://localhost:8000`**

### 2. Run Tests
Verify Scrapling imports, API scans, and return schema constraints:
```sh
python test_scanner.py
```

### 3. Dependencies
Install project-wide prerequisites:
```sh
pip install openpyxl scrapling curl-cffi browserforge
```

---

## Codebase Architecture & File Index

*   **[server.py](file:///c:/ProjectsV1/Loans%20project/server.py)**: Python backend server.
    *   Hosts a `NoCache` enabled HTTP server on port `8000`.
    *   Exposes `POST /api/scan` to trigger a DDG search scrape using `Scrapling` for competitor/consumer loan complaints.
    *   Runs tone rules (upgrades default Discussion to Query/Complaint based on matched themes) and maps competitor tags.
    *   Appends new items to the local Excel sheet.
*   **[app.js](file:///c:/ProjectsV1/Loans%20project/app.js)**: Frontend controller.
    *   Binds event handlers for tabs switching, dropdown filters, search inputs, and manual scanning triggers.
    *   Contains the core math for the **Loan Payoff Planner** (Avalanche vs. Snowball simulation with rollover compounding and timeline builders).
    *   Handles dynamic rows rendering and svg segments animation.
*   **[index.html](file:///c:/ProjectsV1/Loans%20project/index.html)**: Main UI markup.
    *   Contains sidebar navigation, metric cards, donut charts, matrix tables, and the payoff workspace grid.
*   **[style.css](file:///c:/ProjectsV1/Loans%20project/style.css)**: Glassmorphism dark-theme styling.
*   **[test_scanner.py](file:///c:/ProjectsV1/Loans%20project/test_scanner.py)**: Schema checks and web scraper validation.
*   **Excel Database**: Located at `C:\Users\Rahul\Downloads\home_loan_research_tracker.xlsx`.
    *   Maintains sheets like `"Social Listening Log"` (columns: Date, Platform, Source, Text, Theme, Pain, Sentiment, Severity, Feature, Notes).

---

## Coding Guidelines & Conventions

### 1. Python Style (Backend)
- **Formatting**: Standard PEP 8 syntax. Keep functions focused and leverage simple native types.
- **Browser Cache-Control**: Ensure the HTTP request handler overrides `do_GET` to strip browser request cache tags (`If-Modified-Since` and `If-None-Match`) to force fresh page loads:
  ```python
  if 'If-Modified-Since' in self.headers:
      del self.headers['If-Modified-Since']
  ```
- **Excel updates**: Always load sheets with `data_only=True` via `openpyxl`. Deduplicate entries by lowercasing/stripping text before saving.

### 2. JavaScript Style (Frontend)
- **State Management**: Keep standard application models in module-level variables (`socialLog`, `plannerLoans`, etc.) and bind UI updates to state modifications.
- **Indian Currency Format**: Format output text inside planners and lists to INR (e.g. `₹45,00,000`) using local formatters:
  ```javascript
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  ```
- **Math Compound Interest**: Amortization timelines must compute interest first before subtracting payments:
  $$\text{Interest} = \text{Balance} \times \frac{\text{Rate}}{12 \times 100}$$

### 3. Sentiment & Theme Rules
- **5-Way Tones**: Classification categories are strictly **Appreciation**, **Query**, **Discussion**, **Displeasure**, and **Complaint**.
- **Lexicon Mappings**: Update outer Sets (`DISPLEASURES_SET`, `COMPLAINTS_SET`, etc.) when adding keyword matching rules to maximize search loop efficiency.

## gstack (REQUIRED — global install)

**Before doing ANY work, verify gstack is installed:**

```bash
test -d ~/.claude/skills/gstack/bin && echo "GSTACK_OK" || echo "GSTACK_MISSING"
```

If GSTACK_MISSING: STOP. Do not proceed. Tell the user:

> gstack is required for all AI-assisted work in this repo.
> Install it:
> ```bash
> git clone --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
> cd ~/.claude/skills/gstack && ./setup --team
> ```
> Then restart your AI coding tool.

Do not skip skills, ignore gstack errors, or work around missing gstack.

Using gstack skills: After install, skills like /qa, /ship, /review, /investigate,
and /browse are available. Use /browse for all web browsing.
Use ~/.claude/skills/gstack/... for gstack file paths (the global path).
