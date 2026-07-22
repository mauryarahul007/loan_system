<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# LOANS PROJECT

<em></em>

<!-- BADGES -->
<!-- local repository, no metadata badges. -->

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/TOML-9C4121.svg?style=default&logo=TOML&logoColor=white" alt="TOML">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=default&logo=Docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Python-3776AB.svg?style=default&logo=Python&logoColor=white" alt="Python">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=default&logo=CSS&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=default&logo=YAML&logoColor=white" alt="YAML">

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Documentation](#documentation)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

**Loans Project** is an interactive Home Loan Research & Social Listening Dashboard. It allows users to scrape search engines and forums (Reddit, MouthShut, Quora) for home loan customer queries, complaints, and appreciation statements using the stealthy `Scrapling` web crawler, analyze customer tone into 5 categories, and map them to a prioritised opportunity pipeline and gap matrix.

---

## Documentation

The project includes structured documentation based on the **Diataxis Framework**:

- 🎓 **[Tutorial: Simulating Home Loan Prepayment & Amortisation](docs/tutorial-home-loan-prepayment.md)** — Step-by-step guide to modeling lump-sum part-payments and tenure vs EMI reduction.
- 🛠️ **[How to Calculate All-In Home Loan Processing Costs & Stamp Duty](docs/howto-calculate-all-in-loan-costs.md)** — Practical guide for estimating bank processing fees, GST, stamp duty, and MOD fees across Indian states.
- 📖 **[Financial Calculation API & Schema Reference](docs/reference-finance-api.md)** — Comprehensive technical reference for `lib/finance/` TypeScript modules (`emi`, `prepayment`, `costs`, `balanceTransfer`, `tax`).
- 💡 **[Architectural Explanation: Privacy-First Client-Side Financial Modeling](docs/explanation-privacy-first-architecture.md)** — Architectural rationale behind the zero-lead-sale client-side computation engine.

---

## Features

- **Dynamic Web Scraping**: Integrates `Scrapling` to fetch fresh complaints and questions across Reddit, MouthShut, Quora, and generic consumer forums.
- **5-Way Sentiment Classification**: Rules-based analyzer classifying logs into *Displeasure*, *Complaint*, *Query*, *Discussion*, and *Appreciation*.
- **Competitor Extraction**: Automatically identifies mentions of major housing finance institutions (HDFC, SBI, ICICI, LIC HFL, Axis, etc.) and logs them.
- **Interactive UI**: Multi-slice SVG donut charts, search/filter table dropdowns, and competitor matrix layout.
- **Excel Spreadsheet Sync**: Automatically appends scraped entries into the local research workbook sheet.

---

## Project Structure

```sh
└── Loans project/
    ├── __pycache__
    │   └── server.cpython-314.pyc
    ├── app.js
    ├── index.html
    ├── PROJECT_CONTEXT.md
    ├── scrapling-src
    │   ├── .bandit.yml
    │   ├── .dockerignore
    │   ├── .github
    │   ├── .gitignore
    │   ├── .pre-commit-config.yaml
    │   ├── .readthedocs.yaml
    │   ├── agent-skill
    │   ├── benchmarks.py
    │   ├── cleanup.py
    │   ├── CODE_OF_CONDUCT.md
    │   ├── CONTRIBUTING.md
    │   ├── Dockerfile
    │   ├── docs
    │   ├── images
    │   ├── LICENSE
    │   ├── MANIFEST.in
    │   ├── pyproject.toml
    │   ├── pytest.ini
    │   ├── README.md
    │   ├── ROADMAP.md
    │   ├── ruff.toml
    │   ├── scrapling
    │   ├── server.json
    │   ├── setup.cfg
    │   ├── tests
    │   ├── tox.ini
    │   └── zensical.toml
    ├── server.py
    ├── style.css
    └── test_scanner.py
```

### Project Index

<details open>
	<summary><b><code>C:\PROJECTSV1\LOANS PROJECT/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/app.js'>app.js</a></b></td>
					<td style='padding: 8px;'>Interactive dashboard controller. Handles category aggregations, UI state, rendering donut segments, and triggering scanner scans.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>The responsive dashboard UI layout including stats grid, SVG donut chart container, search metrics, and social log tables.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/server.py'>server.py</a></b></td>
					<td style='padding: 8px;'>Python HTTP backend. Runs the Scrapling crawler logic, sentiment classifier, competitor extractor, and local Excel sheet sync.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/style.css'>style.css</a></b></td>
					<td style='padding: 8px;'>Vanilla CSS layout styles containing layout rules, custom properties, responsive designs, and animations.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/test_scanner.py'>test_scanner.py</a></b></td>
					<td style='padding: 8px;'>Self-check assertion validation scripts ensuring that crawler dependencies import and return correct schemas.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- scrapling-src Submodule -->
	<details>
		<summary><b>scrapling-src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ scrapling-src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.bandit.yml'>.bandit.yml</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.pre-commit-config.yaml'>.pre-commit-config.yaml</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.readthedocs.yaml'>.readthedocs.yaml</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\benchmarks.py'>benchmarks.py</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\cleanup.py'>cleanup.py</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\Dockerfile'>Dockerfile</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\LICENSE'>LICENSE</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\MANIFEST.in'>MANIFEST.in</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\pyproject.toml'>pyproject.toml</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\pytest.ini'>pytest.ini</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\ruff.toml'>ruff.toml</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\server.json'>server.json</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\setup.cfg'>setup.cfg</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\tox.ini'>tox.ini</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\zensical.toml'>zensical.toml</a></b></td>
					<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
				</tr>
			</table>
			<!-- .github Submodule -->
			<details>
				<summary><b>.github</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ scrapling-src..github</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\FUNDING.yml'>FUNDING.yml</a></b></td>
							<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
						</tr>
					</table>
					<!-- ISSUE_TEMPLATE Submodule -->
					<details>
						<summary><b>ISSUE_TEMPLATE</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src..github.ISSUE_TEMPLATE</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\ISSUE_TEMPLATE\01-bug_report.yml'>01-bug_report.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\ISSUE_TEMPLATE\02-feature_request.yml'>02-feature_request.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\ISSUE_TEMPLATE\03-other.yml'>03-other.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\ISSUE_TEMPLATE\04-docs_issue.yml'>04-docs_issue.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\ISSUE_TEMPLATE\config.yml'>config.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- workflows Submodule -->
					<details>
						<summary><b>workflows</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src..github.workflows</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\workflows\code-quality.yml'>code-quality.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\workflows\docker-build.yml'>docker-build.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\workflows\release-and-publish.yml'>release-and-publish.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\.github\workflows\tests.yml'>tests.yml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- scrapling Submodule -->
			<details>
				<summary><b>scrapling</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ scrapling-src.scrapling</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\cli.py'>cli.py</a></b></td>
							<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\parser.py'>parser.py</a></b></td>
							<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\py.typed'>py.typed</a></b></td>
							<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
						</tr>
					</table>
					<!-- core Submodule -->
					<details>
						<summary><b>core</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src.scrapling.core</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\ai.py'>ai.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\custom_types.py'>custom_types.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\mixins.py'>mixins.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\shell.py'>shell.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\storage.py'>storage.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\translator.py'>translator.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\_shell_signatures.py'>_shell_signatures.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\_types.py'>_types.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
							<!-- utils Submodule -->
							<details>
								<summary><b>utils</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ scrapling-src.scrapling.core.utils</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\utils\_shell.py'>_shell.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\core\utils\_utils.py'>_utils.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- engines Submodule -->
					<details>
						<summary><b>engines</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src.scrapling.engines</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\constants.py'>constants.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\static.py'>static.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
							<!-- toolbelt Submodule -->
							<details>
								<summary><b>toolbelt</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ scrapling-src.scrapling.engines.toolbelt</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\toolbelt\ad_domains.py'>ad_domains.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\toolbelt\convertor.py'>convertor.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\toolbelt\custom.py'>custom.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\toolbelt\fingerprints.py'>fingerprints.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\toolbelt\navigation.py'>navigation.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\toolbelt\proxy_rotation.py'>proxy_rotation.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- _browsers Submodule -->
							<details>
								<summary><b>_browsers</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ scrapling-src.scrapling.engines._browsers</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_base.py'>_base.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_config_tools.py'>_config_tools.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_controllers.py'>_controllers.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_page.py'>_page.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_stealth.py'>_stealth.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_types.py'>_types.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\engines\_browsers\_validators.py'>_validators.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- fetchers Submodule -->
					<details>
						<summary><b>fetchers</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src.scrapling.fetchers</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\fetchers\chrome.py'>chrome.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\fetchers\requests.py'>requests.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\fetchers\stealth_chrome.py'>stealth_chrome.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- integrations Submodule -->
					<details>
						<summary><b>integrations</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src.scrapling.integrations</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\integrations\scrapy.py'>scrapy.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- spiders Submodule -->
					<details>
						<summary><b>spiders</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src.scrapling.spiders</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\cache.py'>cache.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\checkpoint.py'>checkpoint.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\engine.py'>engine.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\links.py'>links.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\request.py'>request.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\result.py'>result.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\robotstxt.py'>robotstxt.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\scheduler.py'>scheduler.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\session.py'>session.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\spider.py'>spider.py</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
							<!-- templates Submodule -->
							<details>
								<summary><b>templates</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ scrapling-src.scrapling.spiders.templates</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\templates\crawler.py'>crawler.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\templates\shopify.py'>shopify.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\scrapling\spiders\templates\sitemap.py'>sitemap.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- agent-skill Submodule -->
			<details>
				<summary><b>agent-skill</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ scrapling-src.agent-skill</b></code>
					<!-- Scrapling-Skill Submodule -->
					<details>
						<summary><b>Scrapling-Skill</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ scrapling-src.agent-skill.Scrapling-Skill</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\agent-skill\Scrapling-Skill\LICENSE.txt'>LICENSE.txt</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
							<!-- examples Submodule -->
							<details>
								<summary><b>examples</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ scrapling-src.agent-skill.Scrapling-Skill.examples</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\agent-skill\Scrapling-Skill\examples\01_fetcher_session.py'>01_fetcher_session.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\agent-skill\Scrapling-Skill\examples\02_dynamic_session.py'>02_dynamic_session.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\agent-skill\Scrapling-Skill\examples\03_stealthy_session.py'>03_stealthy_session.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='c:\ProjectsV1\Loans project/blob/master/scrapling-src\agent-skill\Scrapling-Skill\examples\04_spider.py'>04_spider.py</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

- Python 3.10 or higher
- Up-to-date `pip` package manager

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mauryarahul007/loan_system.git
    cd loan_system
    ```

2. **Install project dependencies:**
    ```sh
    pip install openpyxl scrapling curl-cffi browserforge
    ```

### Usage

1. **Start the local dashboard and scanner server:**
    ```sh
    python server.py
    ```
2. **Access the interface**: Open your web browser and navigate to **[http://localhost:8000](http://localhost:8000)**.

### Testing

Run the schema verification checks and scraper validation scripts with:
```sh
python test_scanner.py
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://LOCAL/ProjectsV1/Loans project/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://LOCAL/ProjectsV1/Loans project/issues)**: Submit bugs found or log feature requests for the `Loans project` project.
- **💡 [Submit Pull Requests](https://LOCAL/ProjectsV1/Loans project/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your LOCAL account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone c:\ProjectsV1\Loans project
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to LOCAL**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://LOCAL{/ProjectsV1/Loans project/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=ProjectsV1/Loans project">
   </a>
</p>
</details>

---

## License

Loans project is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
