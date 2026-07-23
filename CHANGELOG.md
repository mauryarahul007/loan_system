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
