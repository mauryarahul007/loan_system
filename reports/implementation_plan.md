# Multi-Tier Scraper Upgrade with Agent-Reach Integration

Install `https://github.com/Panniantong/Agent-Reach` and configure a robust **3-Tier Scraper Pipeline** for the **Home Loan Knowledge Hub**.

## User Review Required

> [!IMPORTANT]
> - **3-Tier Scraper Fallback Architecture**:
>   - **Tier 1 (Primary)**: `Scrapling` (`scrapling.Fetcher` + anti-bot stealth).
>   - **Tier 2 (Secondary)**: `Agent-Reach` (`agent-reach` web fetcher / CLI).
>   - **Tier 3 (Tertiary / Fallback)**: `DuckDuckGo HTML Engine` + native `requests` / `urllib`.
> - **Scraper Source Tagging**: Every scraped complaint will record its source tier (e.g. `[Tier 1: Scrapling]`, `[Tier 2: Agent-Reach]`, `[Tier 3: DuckDuckGo]`) in notes metadata.

## Proposed Changes

### Installation & Prerequisites

#### [MODIFY] [requirements.txt](file:///c:/ProjectsV1/Loans%20project/requirements.txt)
- Add `agent-reach` (via `https://github.com/Panniantong/agent-reach/archive/main.zip`).

---

### Backend Scraper Engine

#### [MODIFY] [server.py](file:///c:/ProjectsV1/Loans%20project/server.py)
- Refactor `run_scrapling_scan()` into a resilient multi-tier fetch handler `run_multitier_scan()`:
  - **Try Tier 1**: Call `scrapling.Fetcher`. If results $\ge 1$, attach `[Tier 1: Scrapling]` tag.
  - **Try Tier 2 (if Tier 1 fails/empty)**: Invoke `Agent-Reach` python interface/CLI (`agent-reach`). If results $\ge 1$, attach `[Tier 2: Agent-Reach]` tag.
  - **Try Tier 3 (if Tier 2 fails/empty)**: Execute DuckDuckGo HTML scraping via native `requests` / `urllib`. Attach `[Tier 3: DuckDuckGo]` tag.

#### [MODIFY] [api/index.py](file:///c:/ProjectsV1/Loans%20project/api/index.py)
- Update Vercel serverless entry point to support 3-tier fallback execution.

---

### Testing & Verification

#### [MODIFY] [test_scanner.py](file:///c:/ProjectsV1/Loans%20project/test_scanner.py)
- Update test suite to verify Tier 1 (Scrapling), Tier 2 (Agent-Reach), and Tier 3 (DuckDuckGo) fallback mechanisms.

## Verification Plan

### Automated Tests
- Install `agent-reach` via `py -m pip install https://github.com/Panniantong/agent-reach/archive/main.zip`.
- Run `py test_scanner.py` to test all 3 scraper tiers and schema validation.

### Manual Verification
- Launch local server (`py server.py`) and trigger scan from UI (`#scan-btn`).
- Inspect logs to confirm which scraper tier succeeded and verify new entries appear on Social Listening and Search Intent tabs.
