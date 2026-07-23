# 3-Tier Scraper Pipeline & Agent-Reach Integration Walkthrough

Integrated **Agent-Reach** (`https://github.com/Panniantong/Agent-Reach`) into the **Home Loan Knowledge Hub** backend and built a resilient **3-Tier Web Scraper Pipeline**.

## Changes Completed

1. **Installed Agent-Reach Package**:
   - Installed `agent-reach-1.5.0` via `py -m pip install https://github.com/Panniantong/agent-reach/archive/main.zip`.
   - Updated `requirements.txt`.

2. **3-Tier Scraper Engine (`server.py`)**:
   - **Tier 1 (Primary)**: `Scrapling` (`scrapling.Fetcher` with anti-bot bypass).
   - **Tier 2 (Secondary)**: `Agent-Reach` (`run_agent_reach_fetch` running `agent-reach search`).
   - **Tier 3 (Tertiary)**: `DuckDuckGo Native Engine` + `requests` / `urllib`.

3. **Metadata & Schema Tagging**:
   - Tagged each scraped complaint with source metadata (`[Tier 1: Scrapling]`, `[Tier 2: Agent-Reach]`, `[Tier 3: DuckDuckGo]`).

4. **Testing & Verification**:
   - Ran `py test_scanner.py`: **100% Passed**.
   - Git push: [`6086c58`](https://github.com/mauryarahul007/loan_system/commit/6086c58) → `main`.
