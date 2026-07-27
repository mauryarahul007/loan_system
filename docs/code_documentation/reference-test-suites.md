# Testing & QA Reference Guide

This document describes the automated testing framework built to check the web scraper integrity and frontend calculator element bindings.

---

## 1. Scraper Validation: `test_scanner.py`

*   **Script Location**: [test_scanner.py](file:///c:/ProjectsV1/Loans%20project/test_scanner.py)
*   **Target Scope**: Backend scraping libraries and data schemas.
*   **Execution Command**:
    ```bash
    python test_scanner.py
    ```

### A. Core Validation Flow
The script executes the following checks sequentially:
1.  **Dependency Verification**: Asserts that `scrapling.Fetcher` is available for import. If missing, it exits with code 1.
2.  **Server Module Verification**: Asserts that `run_scrapling_scan` can be imported from [server.py](file:///c:/ProjectsV1/Loans%20project/server.py).
3.  **Active Scraper Execution**: Launches an actual web search scan via `run_scrapling_scan(set())` to search DuckDuckGo.
4.  **Quantity Assertions**: Checks that the returned list length is greater than 0.
5.  **Schema Constraints**: Iterates through each scraped item and asserts that it contains the following keys:
    *   `date`: Date string representation.
    *   `platform`: Posting platform (e.g., Reddit).
    *   `source`: Underlying domain source (e.g., r/IndiaInvestments).
    *   `text`: Text body.
    *   `theme`: Classification topic.
    *   `sentiment`: Text tone.
    *   `severity`: Level from 1 to 5.

### B. Exit Codes
*   `0`: All schema check assertions passed successfully.
*   `1`: An import failed, no items were scraped, or an item violated the expected schema structure.

---

## 2. Frontend Binding Solver Validation: `test_solutions_qa.py`

*   **Script Location**: [test_solutions_qa.py](file:///c:/ProjectsV1/Loans%20project/test_solutions_qa.py)
*   **Target Scope**: Verification of UI bindings and element bindings in [app.js](file:///c:/ProjectsV1/Loans%20project/app.js) for all 25 Solution Studio categories.
*   **Execution Command**:
    ```bash
    python test_solutions_qa.py
    ```

### A. Core Validation Flow
Instead of launching a heavy headless browser, the test script runs a fast text-matching validation using regular expressions:

```
[Read app.js] ---> [Extract launchSolutionStudio() block]
                         |
                         v
                [Loop over TC-01..TC-25]
                         |
                         v
             Does app.js code contain ALL
           expected DOM IDs for this test case?
               /                    \
             YES                    NO
             /                        \
    [Increment Pass]          [Add to Missing List]
                                       |
                                       v
                                [Exit with Code 1]
```

1.  **Code Ingestion**: Reads [app.js](file:///c:/ProjectsV1/Loans%20project/app.js) in UTF-8 encoding.
2.  **Scope Extraction**: Extracts the implementation block of `launchSolutionStudio(gap)` using a regular expression:
    ```python
    re.search(r"function launchSolutionStudio\(gap\)\s*\{(.*)\n\}\n\n//", app_js, re.DOTALL)
    ```
3.  **Engine Emulation**: Runs the Python method `simulate_format_matching(format)` which replicates the JS string-matching routing rules inside [app.js](file:///c:/ProjectsV1/Loans%20project/app.js) (returning strings like `FOIR_ENGINE`, `BT_ENGINE`, `TAX_REGIME_ENGINE`).
4.  **Element Binding Verification**: For each of the 25 test cases, it verifies that every expected DOM element ID (e.g., `"foir-salary"`, `"res-foir-loan"`) exists literally within the text of [app.js](file:///c:/ProjectsV1/Loans%20project/app.js).

### B. Mapped Test Cases & Required IDs

| Test Case | Format Query Match | Expected DOM element IDs / Strings | Mapped Engine |
|---|---|---|---|
| **TC-01** | Affordability / FOIR calculator | `foir-salary`, `res-foir-loan` | `FOIR_ENGINE` |
| **TC-02** | Interactive prepayment calculator + guide | `payoff-principal`, `res-payoff-years` | `PAYOFF_STRATEGY_ENGINE` |
| **TC-03** | Interactive EMI-vs-tenure prepay simulator | `payoff-principal`, `res-payoff-years` | `EMI_VS_TENURE_ENGINE` |
| **TC-04** | Full fee breakdown + GST calculator | `fee-principal`, `res-fee-total` | `FEE_GST_ENGINE` |
| **TC-05** | Side-by-side regime comparison tool | `tax-income`, `res-old-tax`, `res-new-tax` | `TAX_REGIME_ENGINE` |
| **TC-06** | Eligibility checker flagging closed window | `eea-year`, `res-eea-status` | `EEA80_ENGINE` |
| **TC-07** | Multi-prepayment calculator | `multi-principal`, `res-multi-years` | `MULTI_PREPAYMENT_ENGINE` |
| **TC-08** | BT net-savings calculator incl. fees | `bt-principal`, `res-bt-net-savings` | `BT_ENGINE` |
| **TC-09** | Rights explainer (floating-rate waiver) | `0% Foreclosure Penalty` | `RIGHTS_ENGINE` |
| **TC-10** | 5-instalment claim guide | `precon-interest`, `res-precon-slice` | `PRECON_ENGINE` |
| **TC-11** | Rate-scenario explainer | `rate-spike`, `res-rate-new-emi` | `RATE_SCENARIO_ENGINE` |
| **TC-12** | Payoff-strategy guide + calculator | `payoff-extra-emi`, `res-payoff-years` | `PAYOFF_STRATEGY_ENGINE` |
| **TC-13** | Checklist by borrower profile | `chk-profile-select`, `chk-items-container` | `CHECKLIST_ENGINE` |
| **TC-14** | Joint-claim optimisation explainer | `joint-interest`, `res-joint-claim-1` | `JOINT_ENGINE` |
| **TC-15** | End-to-end journey walkthrough | `Phase 1: Pre-Approval & Sanction`, `Phase 6: Final Deed Return` | `JOURNEY_ENGINE` |
| **TC-16** | Sanction vs disbursed amount calculator | `sanc-limit`, `disb-insurance`, `res-disb-net-inhand` | `SANCTION_DISBURSED_ENGINE` |
| **TC-17** | Prepayment EMI-reduction branch request drafts | `draft-principal`, `draft-bank-name`, `draft-letter-preview` | `PREPAYMENT_DRAFT_ENGINE` |
| **TC-18** | Spread adjustment history compare tool | `spread-repo`, `spread-new-rate`, `res-spread-extra-pct` | `SPREAD_ENGINE` |
| **TC-19** | CERSAI charge clearance checking & escalation guidelines | `deed-closure-date`, `deed-days-delayed`, `res-deed-compensation` | `CERSAI_DEED_ENGINE` |
| **TC-20** | SBI Max Gain / Overdraft account simulator | `od-loan-bal`, `od-surplus-parked`, `res-od-monthly-saved` | `MAX_GAIN_ENGINE` |
| **TC-21** | Advanced calculator | `calc-principal`, `res-calc-emi` | `ADVANCED_CALCULATOR_DEFAULT` |
| **TC-22** | Compounding annual prepayment simulator | `multi-principal`, `res-multi-years` | `MULTI_PREPAYMENT_ENGINE` |
| **TC-23** | Single A-to-Z hub | `Phase 1: Pre-Approval & Sanction`, `Phase 6: Final Deed Return` | `JOURNEY_ENGINE` |
| **TC-24** | Prepayment choice manager / Tenure vs EMI simulator | `payoff-principal`, `res-payoff-years` | `PAYOFF_STRATEGY_ENGINE` |
| **TC-25** | Post-closure checklist & CIBIL score impact guide | `step-noc`, `step-deed`, `step-cersai`, `step-cibil` | `POST_CLOSURE_ENGINE` |

### C. Exit Codes
*   `0`: 100% QA Coverage Passed. All elements verified in code.
*   `1`: One or more test cases failed assertion checks (missing element bindings).
