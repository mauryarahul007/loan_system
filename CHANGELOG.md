# 📝 Changelog — Home Loan Knowledge Hub

All notable changes to the Home Loan Knowledge Hub project are documented in this file.

---

## [2026-07-23] — Major Feature Release & Visual Overhaul

### 🎨 Visual & UI Design Overhaul
- **Executive Obsidian & Champagne Gold Theme**: Applied private banking financial theme across all dashboard components (`style.css`).
  - **Backdrop**: `#0b0e14` (Deep Coal Obsidian) with subtle radial glows.
  - **Panels & Cards**: `#182030` (Navy Onyx Glass) with brushed gold borders (`rgba(245, 158, 11, 0.18)`).
  - **Primary Action Buttons**: Gold gradient (`linear-gradient(135deg, #f59e0b, #d97706)`).
  - **Growth & Metrics**: `#10b981` (Wealth Emerald) for positive indicators.
- **Design Shotgun Board**: Built 6 AI visual design variants (Variants A through F) with image carousels for comparative taste testing. Locked in **Variant A** as approved theme.

### 🚀 Core Application & Scraper Pipeline
- **3-Tier Web Scraper Engine (`server.py`)**:
  - **Tier 1 (Primary)**: `Scrapling` stealth anti-bot fetcher.
  - **Tier 2 (Secondary)**: `Agent-Reach` (`agent-reach-1.5.0`) search integration via CLI execution.
  - **Tier 3 (Tertiary)**: `DuckDuckGo` native HTTP search fallback.
  - Tagged all scraped entries with provider metadata (`[Tier 1: Scrapling]`, `[Tier 2: Agent-Reach]`, `[Tier 3: DuckDuckGo]`).
- **PEP 508 Vercel Build Fix (`requirements.txt`)**: Formatted `agent-reach` direct dependency URL to strictly conform with Vercel's `uv` builder specification (`agent-reach @ https://github.com/Panniantong/agent-reach/archive/main.zip`).
- **Continuous Multi-Click Scanner (`app.js`)**: Fixed `#scan-btn` click handler. Every scan run assigns unique reference tags (`Ref: Live Scan #N-XXXX`) and incremental scan numbers (`Scan #1`, `Scan #2`, etc.) to append new records on repeat clicks without deduplication locks.
- **Dynamic Keyword Mapper Sync (`app.js`)**: Connected `#stat-keywords-count` ("High volume search intent gaps") to live scraped complaint logs, automatically extracting search queries and populating the Search Intent Gaps table.

### 🧹 Table Data Management & DB Cleaning
- **Individual Line Item Delete**: Added `🗑️` delete action buttons to every row in **Social Listening**, **Search Intent Gaps**, and **RICE Prioritization** tables.
- **Select All & Batch Delete**: Added header checkboxes (`Select All`) and dynamic `Delete Selected (N)` action buttons for batch row deletion.
- **Database Cleaning Endpoint (`/api/delete-logs`)**: Added `POST /api/delete-logs` backend endpoint in `server.py` and `api/index.py` for single/batch deletion and full database purge (`Clean DB / Purge All`).
- **Dynamic Stats & Chart Recalculation**: Deleting items automatically updates total comments (`#stat-comments-count`), keywords count (`#stat-keywords-count`), sentiment donut split, theme priority bars, and RICE rankings.

### ⚡ Solution Studio & Click-to-Build Solution Generator
- **Interactive Solution Launchers (`⚡ Proposed Solution Format →`)**: Transformed static proposed solution cells in the Search Intent Gaps table into 1-click solution launcher buttons.
- **Dedicated Solution Studio Tab (`#tab-solution-studio`)**: Added an interactive Solution Studio view with context headers, live 2026 market parameters, and instant solution engine mounting.
- **15 Built-in Specialized Interactive Customer Solution Engines**:
  1. *Salary Affordability & FOIR Eligibility Calculator* (50%/60% FOIR banking rules, net salary, existing EMIs).
  2. *Annual Bonus Multi-Prepayment Savings Calculator* (recurring annual bonus compounding, years saved, total interest saved).
  3. *Monthly EMI Top-Up Tenure Acceleration Engine* (extra monthly contribution savings & accelerated loan closure date).
  4. *Balance Transfer Net-Savings Calculator* (current vs new ROI, MOD stamp duty, 18% GST processing fee, breakeven period).
  5. *Section 80EEA Closed-Window Eligibility Checker* (stamp duty cap check, flagging 80EEA window closure).
  6. *Pre-Construction Interest 5-Instalment Claim Calculator* (1/5th annual claim under Sec 24b post-possession).
  7. *Fixed vs Floating Rate Reset Shock Simulator* (+0.5%, +1.0%, +2.0% RBI rate hike scenarios, EMI jump & tenure ballooning).
  8. *Joint Co-Owner Tax Benefit Optimizer* (co-borrower double tax claim up to ₹4L Sec 24b + ₹3L Sec 80C).
  9. *Step-by-Step Home Loan Disbursal Roadmap* (interactive 6-phase timeline from CIBIL check to Deed return).
  10. *RBI Floating-Rate Foreclosure Rights Explainer* (0% foreclosure fee waiver & ₹5,000/day document delay compensation).
  11. *Borrower Document Checklist Generator* (profile-based checklists for Salaried MNC, Self-Employed, and NRI).
  12. *Regime-Aware Tax Comparator* (FY 2025-26 default New Tax Regime slabs vs Old Regime deductions).
  13. *All-In Fee & 18% GST Cost Calculator* (separating tax-exempt EMI interest from 18% GST processing fees).
  14. *EMI vs Tenure Prepayment Simulator* (Option A Tenure Reduction vs Option B EMI Reduction).
  15. *Multi-Scenario Advanced EMI Calculator* (default multi-scenario EMI & fee optimization engine).
- **2026 Live Market Parameters**: Integrated live 2026 Indian market parameters (Repo Rate 5.25%, 18% GST slab, FY 2025-26 default tax regime rules, RBI floating rate waiver).
- **Customer Embed Code Generator**: Includes copyable HTML embed code snippets with 1-click `📋 Copy Code` button for deploying generated solution tools directly to customer web portals.




### 🛡️ Dashboard Content & Insights
- **Borrower Red Flags & Actionable Insights**: Replaced static impact cards with 3 borrower alerts:
  1. **Floating Rate Reset Trap**: tenure inflation (+5-12 yrs) on bank rate hikes.
  2. **Tax Deduction Regime Conflict**: Sec 24(b) & 80C interest deduction loss under New Tax Regime.
  3. **Forced Insurance Bundling**: Bank-forced life/home insurance for sanction guidance.

### 🧪 Audits, QA & Security Reports Archive
- **QA Audit (`/qa-only`)**: Scored **98 / 100 Health Score** with 51 / 51 test cases passed across UI, table sorting, API endpoints, and payoff planner.
- **CSO Security Audit (`/cso`)**: Completed infrastructure & code audit with **0 Critical / High / Medium vulnerabilities**.
- **Reports Archive (`reports/`)**: Created project `reports/` folder containing:
  - `qa_report.md`
  - `cso_security_audit_20260723.json`
  - `design_shotgun_board.md`
  - `color_theme_mockup.md`
  - `implementation_plan.md`
  - `walkthrough.md`

### 🔒 Safety & Branch Infrastructure
- **Git Restore Point**: Created restore tag `working-restore-point-2026-07-23` and backup branch `restore-point-working-main` for safe rollback capabilities.
- **Production Deployment**: Live on Vercel at `https://loan-system-wine.vercel.app`.
