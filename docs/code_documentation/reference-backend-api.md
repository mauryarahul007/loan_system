# Backend API & Scraper Reference

The backend of the Home Loan Knowledge Hub is implemented in [server.py](file:///c:/ProjectsV1/Loans%20project/server.py). It serves static files, runs the consumer-complaint web scraping engine, classifies text tone, and appends logs to a local Microsoft Excel ledger.

---

## 1. HTTP Server API Endpoints

The server subclass of `SimpleHTTPRequestHandler` handles all HTTP methods. It enables CORS (Cross-Origin Resource Sharing) and enforces cache-invalidation headers.

### A. CORS Headers (`do_OPTIONS`)
Responds to preflight pre-requests with:
```text
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type
```

### B. GET Requests (`do_GET`)

1.  **`GET /api/logs`**
    *   **Description**: Loads all logs from the Excel workbook sheet `"Social Listening Log"` and returns them as a JSON list.
    *   **Success Response**: `200 OK`
        ```json
        {
          "success": true,
          "logs": [
            {
              "date": "2026-07-18",
              "platform": "Reddit",
              "source": "r/IndiaInvestments",
              "text": "...",
              "theme": "Prepayment confusion",
              "pain": "Yes",
              "sentiment": "Complaint",
              "severity": 4,
              "feature": "...",
              "notes": "...",
              "loan_type": "Home Loan"
            }
          ]
        }
        ```
    *   **Failure Response**: `500 Internal Server Error` containing `{"success": false, "error": "<exception_message>"}`.

2.  **Static Files Routing**
    *   **Description**: Serves pages (e.g. [index.html](file:///c:/ProjectsV1/Loans%20project/index.html), [style.css](file:///c:/ProjectsV1/Loans%20project/style.css), [app.js](file:///c:/ProjectsV1/Loans%20project/app.js)) directly.
    *   **Cache-Control Policy**: Overrides browser conditional request headers (`If-Modified-Since` and `If-None-Match`) on every incoming request. Appends the following response headers to force absolute refresh:
        ```text
        Cache-Control: no-store, no-cache, must-revalidate, max-age=0
        Pragma: no-cache
        Expires: 0
        ```

### C. POST Requests (`do_POST`)

1.  **`POST /api/scan`**
    *   **Description**: Triggers a web scan for consumer loan complaints on DuckDuckGo, classifies the results, updates the Excel worksheet, and returns the scraped objects.
    *   **Request Payload**:
        ```json
        {
          "loanType": "home" // options: "home", "car", "personal", "education"
        }
        ```
    *   **Success Response**: `200 OK`
        ```json
        {
          "success": true,
          "excel_updated": true,
          "results": [...]
        }
        ```

2.  **`POST /api/delete-logs`**
    *   **Description**: Deletes matching complaints from the Excel spreadsheet.
    *   **Request Payload**:
        ```json
        {
          "texts": ["exact complaint text to delete", "..."],
          "all": false // if true, clears all rows except headers
        }
        ```
    *   **Success Response**: `200 OK`
        ```json
        {
          "success": true,
          "deletedCount": 3
        }
        ```

---

## 2. The 3-Tier Multi-Scraper Engine

The scraping engine (`run_scrapling_scan`) compiles a list of search query keywords based on the requested `loanType` (e.g., `"home loan prepayment complaint"`). It runs through a 3-tier sequence to gather exactly 10 unique, non-duplicate complaints:

```
[Request Input]
      |
      v
  [Tier 1: Scrapling Fetcher] ----------> (Success, Count >= 10?) ---> [Analyze & Return]
      | (If 0 results or failed)
      v
  [Tier 2: Agent-Reach CLI] ------------> (Success, Count >= 10?) ---> [Analyze & Return]
      | (If total count < 10)
      v
  [Tier 3: Curated Fallback Pool] ------> (Fill up to exactly 10) ----> [Analyze & Return]
```

### Tier 1: Scrapling Fetcher
*   Initializes the `scrapling.Fetcher` class (packaged with advanced headers bypass and browser mimicking).
*   Requests HTML content from DuckDuckGo: `https://html.duckduckgo.com/html/?q=<query>`.
*   Extracts titles and snippets matching the CSS selector `.result` and parses link sources (e.g., Reddit, Quora, MouthShut, Consumer Forums).

### Tier 2: Agent-Reach CLI
*   Triggered when Tier 1 fetches 0 items (e.g., if scraping is throttled or blocked).
*   Invokes the system command `python -m agent_reach search <query>` using the Python subprocess API.
*   Parses command stdout lines of length greater than 30 characters.

### Tier 3: Curated Fallback Pool
*   If combined Tier 1 and 2 yields fewer than 10 unique rows, the scraper reads from `FALLBACK_COMPLAINTS` inside [server.py](file:///c:/ProjectsV1/Loans%20project/server.py).
*   Adapts fallback texts for the targeted loan category by calling `adjust_text_for_loan_type` (replaces occurrences of "home loan" with "car loan", etc.).
*   Suffixes rescan numbers if duplicates persist (e.g., `"(Ref: Rescan #1)"`) to ensure unique Excel row keys.

---

## 3. Sentiment & Tone Classification

Every scraped text snippet goes through an automated 5-way classification check (`analyze_sentiment`):

1.  **Lexicon Matching**:
    The text is lowercased, stripped of punctuation, and split into tokens. Keywords are matched against four pre-defined sets:
    *   **Displeasure (`DISPLEASURES_LEXICON`)**: `worst`, `disappointed`, `bad`, `frustrated`, `unhappy`, `displeasure`, `scam`, `relentless`, `spam`, `terrible`, `useless`, `horrible`, `annoyed`, `angry`.
    *   **Complaint (`COMPLAINTS_LEXICON`)**: `charge`, `penalty`, `delay`, `fail`, `wrong`, `hidden`, `error`, `refuse`, `slow`, `hostage`, `dispute`, `ignore`, `delayed`, `charges`, `penalties`, `fees`, `refused`, `slowed`, `misleading`.
    *   **Query (`QUERIES_LEXICON`)**: `how`, `does`, `is it`, `can`, `what`, `where`, `why`, `query`, `request`, `know`, `calculate`, `guide`, `rules`.
    *   **Appreciation (`POSITIVES_LEXICON`)**: `satisfied`, `good`, `great`, `easy`, `excellent`, `helpful`, `fast`, `quick`, `recommend`, `resolved`, `save`, `benefit`, `simple`, `clear`, `transparent`, `trust`, `love`, `happy`, `savings`.

2.  **Lexicon Rules Mapping Hierarchy**:
    *   If any token is in `DISPLEASURES_LEXICON` -> **Displeasure**.
    *   If any token is in `COMPLAINTS_LEXICON` -> **Complaint**.
    *   If any token is in `QUERIES_LEXICON` or text contains `?` or `"how to"` -> **Query**.
    *   If any token is in `POSITIVES_LEXICON` -> **Appreciation**.
    *   Default fallback if no match -> **Discussion**.

3.  **Context-Based Rules Overrides**:
    *   If a text classifies as `"Discussion"`, but is tagged with a severe theme (e.g., Prepayment, Hidden Charges, or Foreclosure), the scraper upgrades the sentiment to `"Complaint"` (for problems) or `"Query"` (for regime/tax questions).

---

## 4. Spreadsheet Integration (Database)

*   **Workbook Path**: `C:\Users\Rahul\Downloads\home_loan_research_tracker.xlsx`
*   **Sheet Name**: `"Social Listening Log"`
*   **Columns layout**:
    1.  Date (`ws.cell(col=1)`)
    2.  Platform (`ws.cell(col=2)`)
    3.  Source (`ws.cell(col=3)`)
    4.  Text (`ws.cell(col=4)`) - Used as the unique text key for deduplication.
    5.  Theme (`ws.cell(col=5)`)
    6.  Pain status (`ws.cell(col=6)`)
    7.  Sentiment (`ws.cell(col=7)`)
    8.  Severity rating (`ws.cell(col=8)`)
    9.  Feature mapping (`ws.cell(col=9)`)
    10. Notes (`ws.cell(col=10)`)
    11. Loan Type (`ws.cell(col=11)`)
*   **Excel Reading**:
    Loaded using `openpyxl.load_workbook(path, data_only=True)`. The `data_only=True` flag tells Excel to read computed cell values directly instead of retrieving raw equations.
*   **Excel Writing**:
    Appends new rows starting at `last_row + 1`. Calculates `last_row` dynamically by starting at `ws.max_row` and scanning upward until finding a row containing non-null elements.
*   **Note on Deletion**:
    While reading/writing logs accesses the global file `C:\Users\Rahul\Downloads\home_loan_research_tracker.xlsx`, the `delete_complaints_from_excel` subroutine is configured to open a local file named `home_loan_complaints_scraped.xlsx`. (Keep this in mind when debugging record removal issues).
