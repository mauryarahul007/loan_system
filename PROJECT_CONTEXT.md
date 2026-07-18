# Home Loan Knowledge Hub — Project Context

> **Purpose of this file:** A self-contained brief to feed into an AI-assisted IDE (Cursor, Windsurf, Claude Code, etc.) so it can start building. It captures the product vision, the research that justifies it, precise feature specs with calculator logic, and the India-specific domain rules that must be implemented correctly. Read it top to bottom before generating code.
>
> **Stage:** Concept validation → early MVP. Not yet monetised.
> **Market:** India (home loans first).
> **Companion artifact:** `home_loan_research_tracker.xlsx` — the raw competitor/pain-point research this brief summarises.

---

## 1. Vision

A simple, trustworthy, **A-to-Z knowledge hub for home loans** that asks the consumer the *minimum* number of questions and gives a *complete* picture — combining plain-language education with **interactive calculators embedded directly in the learning flow**.

Someone lands wanting to understand home loans, reads a concept, and immediately models it with a calculator on the same page — no jumping between five websites, no forms, no sales calls.

**One-line pitch:** *The single place an Indian borrower can understand and model everything about a home loan — before, during, and after — without being sold to.*

---

## 2. The problem (validated by research)

Existing options fall into three buckets, all with the same gaps:

| Layer | Examples | Core weakness |
|---|---|---|
| Aggregators | BankBazaar, Paisabazaar | Lead-gen machines. A single enquiry triggers relentless calls/SMS. Thin education. |
| Direct lenders | SBI, HDFC, Bajaj Finserv | Show only their own products. Basic calculators. Little payoff strategy. |
| Adjacent | Groww, MagicBricks, ClearTax | Loans are a side feature; guidance is shallow or single-lens (e.g., tax only). |

**Validated pain points** (from complaint sites, personal-finance journalism, and forums — see the research tracker):

1. **Prepayment confusion (high severity).** Borrowers make a large part-payment, see their EMI unchanged, and only later discover the bank silently reduced the *tenure* instead. Most don't know they must explicitly request an EMI reduction.
2. **Aggregator spam (loudest complaint).** Floods of calls/SMS after one enquiry; reports of unrequested applications denting credit scores. **→ A no-lead-sale model is the key trust differentiator.**
3. **Hidden charges.** Processing fee + 18% GST, non-refundable even on rejection; "zero fee" offers reappearing as "administrative charges"; penalty clauses buried in fine print.
4. **Tax-benefit confusion.** People assume 80EE/80EEA still apply (both windows closed); don't realise deductions only work under the old regime; miss the pre-construction interest rule.
5. **Weak calculators.** Bank tools rarely model multiple prepayments, rate resets, and fees together.
6. **Scattered information.** Borrowers hop across 5+ sites to piece together one decision. *This is the core thesis — the gap the product fills.*

---

### 2.1 Competitor Audit Detail

The research tracker audited 8 key competitors in the Indian space:

| Platform | Type | Primary Focus | Content Depth | Calculators | UX/Ease | Payoff Guidance | Transparency | Overall Rating | Standout Strength | Biggest Weakness / Gap |
|---|---|---|---|---|---|---|---|---|---|---|
| **BankBazaar** | Aggregator | Compare & apply | 3 | 3 | 3 | 2 | 2 | 2.6 | Broad multi-lender comparison in one place | Heavy lead-spam after enquiry; thin education |
| **Paisabazaar** | Aggregator | Compare & apply | 3 | 3 | 3 | 2 | 2 | 2.6 | Credit-score + loan comparison combo | Aggressive follow-up calls/SMS; transactional |
| **SBI Home Loans** | Bank | Direct lender | 3 | 3 | 2 | 2 | 3 | 2.6 | Trusted lender, huge reach | Dated UX; single-lender view only |
| **HDFC Bank** | Bank | Direct lender | 3 | 4 | 3 | 2 | 3 | 3.0 | Solid calculators + strong brand | Own products only; little payoff strategy |
| **Bajaj Finserv** | Fintech | Direct lender | 3 | 4 | 4 | 2 | 3 | 3.2 | Slick UX, fast application flows | Sales-led; own products only |
| **Groww** | Fintech | Calculators + apply | 3 | 4 | 4 | 2 | 3 | 3.2 | Clean calculators, strong UX | Loans secondary to investing; shallow guidance |
| **MagicBricks** | Property | Property + loans | 2 | 3 | 3 | 1 | 2 | 2.2 | Property + loan under one roof | Loan content is an add-on; shallow |
| **ClearTax** | Tax | Tax + calculators | 4 | 3 | 3 | 2 | 4 | 3.2 | Best-in-class tax-benefit explainers | No end-to-end loan journey; tax-only lens |

---

### 2.2 Feature Gap & White Space Analysis

We mapped the coverage of A-to-Z features across these platforms (Y = Yes, P = Partial, N = No):

| Feature / Content Area | BankBazaar | Paisabazaar | SBI | HDFC | Bajaj | Groww | MagicBricks | ClearTax | Market Coverage | Opportunity Flag |
|---|---|---|---|---|---|---|---|---|---|---|
| **EMI calculator** | Y | Y | Y | Y | Y | Y | Y | Y | 8/8 | None |
| **Documentation checklist by profile** | Y | Y | Y | Y | Y | P | P | N | 5/8 (High) | None |
| **Eligibility / affordability calculator** | Y | Y | Y | Y | Y | P | P | N | 5/8 (High) | None |
| **Eligibility explainer (income, CIBIL, FOIR)** | Y | Y | P | Y | Y | P | P | P | 4/8 (Med) | MED |
| **Interest-rate comparison across lenders** | Y | Y | N | N | N | P | P | N | 2/8 (Low) | **HIGH** |
| **Tax benefit guide (80C / 24b / 80EEA)** | P | P | N | P | P | P | P | Y | 1/8 (Low) | **HIGH** |
| **Step-by-step application walkthrough** | P | P | P | P | Y | P | N | N | 1/8 (Low) | **HIGH** |
| **Prepayment / part-payment calculator** | P | P | N | P | P | P | N | N | 0/8 (None) | **HIGH** (Flagship) |
| **Balance-transfer savings calculator** | P | P | N | P | P | N | N | N | 0/8 (None) | **HIGH** |
| **Tenure vs interest trade-off tool** | P | P | N | P | P | P | N | N | 0/8 (None) | **HIGH** |
| **Prepayment & early-payoff strategy guide** | N | N | N | P | N | P | N | P | 0/8 (None) | **HIGH** |
| **Fixed vs floating explainer** | P | P | P | P | P | P | N | P | 0/8 (None) | **HIGH** |
| **Post-approval / disbursement guidance** | N | N | P | P | P | N | N | N | 0/8 (None) | **HIGH** |
| **Foreclosure & closure process** | N | N | P | P | P | N | N | P | 0/8 (None) | **HIGH** |
| **Common mistakes / red flags** | P | P | N | P | P | P | N | P | 0/8 (None) | **HIGH** |
| **Interactive scenario modelling** | N | N | N | N | N | P | N | N | 0/8 (None) | **HIGH** |
| **First-time buyer learning path** | P | P | N | P | P | P | P | P | 0/8 (None) | **HIGH** |

**Key Finding:** Core calculators like simple EMIs are fully saturated. The major white space lies in **repayment strategy (prepayment simulations), switching analysis (balance transfer), regime-aware tax comparisons, and foreclosure explainers** where existing market coverage is zero.

---

### 2.3 Search Intent & SEO Wedges

Organic search is our main engine. The following search gaps were validated:

| Search Query / Keyword | Est. Monthly Volume | Intent Type | Best Existing Answer (1-5) | Gap Score | Recommended Content Format / Solution |
|---|---|---|---|---|---|
| *documents required for home loan* | 18,000 | Informational | 4 | 36.0 | Interactive profile-based checklist generator |
| *home loan eligibility calculator by salary* | 14,000 | Calculator | 3 | 42.0 | Simple FOIR / affordability tool |
| *how does home loan prepayment reduce interest* | 12,000 | Informational | 2 | 48.0 | Prepayment calculator + strategy guide |
| *home loan hidden charges list* | 12,000 | Informational | 3 | 36.0 | Total all-in cost calculator with GST/MOD rules |
| *home loan EMI calculator with prepayment* | 10,000 | Calculator | 3 | 30.0 | Advanced EMI calculator supporting lump-sums |
| *part payment home loan calculator* | 9,000 | Calculator | 3 | 27.0 | Multi-prepayment calculator |
| *does home loan prepayment reduce EMI or tenure* | 8,000 | Informational | 2 | 32.0 | Interactive EMI-vs-tenure simulator |
| *fixed vs floating home loan which is better* | 7,000 | Comparison | 3 | 21.0 | Rate-scenario simulator |
| *home loan tax benefit old vs new regime* | 6,000 | Comparison | 2 | 24.0 | Regime-aware tax comparison widget |
| *home loan process step by step India* | 6,000 | Informational | 3 | 18.0 | Step-by-step timeline explainer |
| *is balance transfer home loan worth it* | 5,000 | Comparison | 2 | 20.0 | Balance-transfer savings net of switching costs |
| *how to reduce home loan tenure* | 4,500 | Informational | 2 | 18.0 | Payoff strategy guide + interactive tool |
| *80EEA eligibility 2026* | 4,000 | Informational | 3 | 12.0 | Eligibility checker clearly flagging the closed window |
| *home loan foreclosure charges RBI rules* | 3,500 | Informational | 3 | 10.5 | Rights explainer detailing the 0% floating charge rule |
| *joint home loan tax benefit for both* | 3,000 | Informational | 3 | 9.0 | Joint ownership optimization guide |
| *pre construction interest home loan tax* | 2,500 | Informational | 2 | 10.0 | 5-instalment claim scheduler |

---

### 2.4 Opportunity Prioritisation (RICE framework)

Based on social listening severity and search volume, features are prioritised using RICE (Reach × Impact × Confidence ÷ Effort):

| Feature / Opportunity | Reach (1-5) | Impact (1-5) | Confidence (1-5) | Effort (1-5) | RICE Score | Priority | Linked Pain Theme |
|---|---|---|---|---|---|---|---|
| **All-in cost / hidden-charges calculator** | 5 | 4 | 4 | 2 | **40.0** | **P1** | Hidden charges / fee shock |
| **Interactive prepayment simulator** | 5 | 5 | 4 | 3 | **33.3** | **P1** | Prepayment confusion (tenure vs EMI) |
| **Documentation checklist generator** | 4 | 3 | 4 | 2 | **24.0** | **P2** | Document checklist friction |
| **Balance-transfer net-savings calculator** | 3 | 4 | 4 | 2 | **24.0** | **P2** | BT switching cost confusion |
| **Know-your-rights / foreclosure explainer** | 2 | 3 | 4 | 1 | **24.0** | **P2** | Foreclosure penalty disputes |
| **Regime-aware tax-benefit tool** | 4 | 4 | 4 | 3 | **21.3** | **P2** | Tax regime / closed window confusion |
| **Advanced EMI calculator** | 4 | 4 | 4 | 3 | **21.3** | **P2** | Basic bank tools limit scenarios |
| **Single A-to-Z knowledge hub (no lead sale)**| 5 | 5 | 3 | 5 | **15.0** | **P2** | Info scattered + spam calls |
| **First-time-buyer guided path** | 4 | 4 | 3 | 4 | **12.0** | **P2** | General eligibility opacity |
| **Neutral live rate-comparison table** | 4 | 3 | 3 | 4 | **9.0** | **P3** | Rate comparison difficulty |

---

## 3. Target user

- **Primary:** First-time and mid-journey home-loan borrowers in India (salaried, 28–45), financially literate enough to research online but overwhelmed by jargon and scattered sources.
- **Secondary:** Existing borrowers optimising repayment (prepayment, balance transfer, tax).
- **Mindset:** Wants clarity and control, distrusts being "sold to," values privacy.

---

## 4. Product principles (non-negotiable)

1. **Privacy-first / no lead sale.** No mandatory sign-up, no phone-number capture to use tools, no reselling data. This is the brand's moat — do not compromise it for growth hacks.
2. **Minimum questions.** Every tool asks only for the inputs it strictly needs. Sensible defaults; progressive disclosure.
3. **Education + interactivity fused.** Concepts and the calculator that demonstrates them live on the same page.
4. **Neutral & transparent.** No preferential ranking of lenders; show total cost, not just headline rate.
5. **Accuracy over cleverness.** Financial math and Indian tax/regulatory rules must be correct and dated. Show assumptions.
6. **Fast & lightweight.** Content-heavy site; prioritise load speed and mobile.

---

## 5. MVP scope

Prioritised from a RICE pass in the research tracker (Reach × Impact × Confidence ÷ Effort). Build roughly in this order:

### Phase 1 — Core calculators (highest RICE, lowest effort)
1. **All-in cost / hidden-charges calculator** — total borrowing cost incl. processing fee, GST, legal/valuation, stamp duty/MOD, insurance.
2. **Interactive prepayment simulator** — the flagship. Explicitly shows the **EMI-vs-tenure choice** and interest saved.
3. **Documentation checklist generator** — by borrower profile (salaried / self-employed / NRI).
4. **Balance-transfer net-savings calculator** — nets out switching costs.

### Phase 2 — Educational hub + supporting tools
5. **A-to-Z knowledge base** (see §7 content map) with embedded calculators.
6. **Regime-aware tax-benefit tool** — flags closed 80EE/80EEA windows, old-vs-new regime.
7. **Advanced EMI calculator** — multiple prepayments + rate resets + amortisation schedule.
8. **Know-your-rights / foreclosure explainer.**

### Phase 3 — Depth
9. **First-time-buyer guided path.**
10. **Neutral live rate-comparison table** (needs a data source/maintenance plan).

**Explicitly out of scope for MVP:** lead capture, lender applications, account systems, monetisation. (Later monetisation options — affiliate, premium tools — should never violate Principle #1.)

---

## 6. Feature specs & calculator logic

> Implement these as pure, unit-tested functions (framework-agnostic core) with thin UI on top. All money in INR. Show every assumption in the UI.

### 6.1 EMI (base formula)
```
r = annualRatePct / 12 / 100          // monthly rate
n = tenureYears * 12                  // months
EMI = P * r * (1+r)^n / ((1+r)^n - 1) // if r == 0, EMI = P / n
totalInterest = EMI * n - P
```

### 6.2 Amortisation schedule
For each month: `interest = balance * r`, `principal = EMI - interest`, `balance -= principal`.
Return per-period rows (opening balance, principal, interest, closing balance) and yearly summaries. Early EMIs are mostly interest — surface this visually.

### 6.3 Prepayment simulator (flagship)
Inputs: loan amount, rate, original tenure, months elapsed, prepayment amount (one-off and/or recurring).
Model **both** outcomes and show them side by side:
- **Reduce tenure (EMI fixed):** subtract prepayment from outstanding balance, keep EMI, recompute remaining `n`. → biggest interest saving.
- **Reduce EMI (tenure fixed):** subtract prepayment, keep remaining tenure, recompute EMI.
Output: new tenure / new EMI, **total interest saved**, revised payoff date.
> Teaching point to make explicit in UI: banks default to *reducing tenure* and keep EMI unchanged; the borrower must specifically ask to reduce EMI. This is the #1 confusion.

### 6.4 All-in cost calculator
Sum, with each line itemised and toggleable:
- Processing fee: typically **0.25%–2%** of loan amount (some lenders flat/capped; some waive).
- **GST at 18%** on the processing/administrative/legal fees.
- Legal & valuation charges (flat, ₹ range).
- Stamp duty on Memorandum of Deposit of Title Deeds (MOD): varies by state, often ~0.1–0.5% (capped).
- Property stamp duty & registration (state-specific; let the user input or pick state).
- Insurance premium (optional, if financed).
Output: total upfront cost, and effective cost if fees are financed into the principal (increases interest). Note that fees are often **non-refundable even if the loan is rejected**.

### 6.5 Balance-transfer net-savings calculator
Compare staying vs switching: interest saved from lower rate on remaining balance/tenure, **minus** new-lender processing fee + GST + fresh legal/valuation + MOD stamp duty. Output net benefit and break-even months. Make the point that a lower rate can be net-negative after switching costs.

### 6.6 Tax-benefit tool (see §8 for the rules — get these right)
Inputs kept minimal: annual interest paid, annual principal paid, self-occupied vs let-out, old vs new regime, joint owners (y/n), tax slab.
Output: deductible amounts and estimated tax saved, with clear flags for closed windows and regime restrictions. **Label it "informational, not tax advice"** and date the rules.

### 6.7 Documentation checklist generator
Branch by profile (salaried / self-employed / NRI) and property type (ready / under-construction / resale). Output a printable checklist. No personal data stored.

---

## 7. Content architecture (the "A-to-Z")

Each node is an article with an embedded tool where relevant.

1. **Basics** — what a home loan is; principal, interest, EMI, tenure; how EMIs split (amortisation).
2. **Eligibility** — income, CIBIL/credit score, FOIR, LTV, co-applicants. *(tool: eligibility/affordability calculator)*
3. **Interest rates** — fixed vs floating, repo-linked vs MCLR, spread/reset. *(tool: rate-scenario explainer)*
4. **Costs & charges** — processing fee, GST, legal, valuation, stamp duty, MOD, insurance. *(tool: all-in cost calculator)*
5. **Application journey** — step-by-step from sanction to disbursement; under-construction disbursal stages.
6. **Documentation** — by profile. *(tool: checklist generator)*
7. **Repayment & prepayment** — part-payment, EMI-vs-tenure, offset/overdraft loans. *(tool: prepayment simulator)*
8. **Balance transfer** — when it's worth it. *(tool: BT net-savings calculator)*
9. **Tax benefits** — 24(b), 80C, 80EE/80EEA, pre-construction interest, joint loans, regime choice. *(tool: tax tool)*
10. **Rights & closure** — RBI rules, foreclosure, NOC, lien release, getting original documents back.
11. **Common mistakes / red flags.**
12. **Glossary.**

---

## 8. India domain rules the code MUST get right

> ⚠️ Tax and regulatory rules change with each Union Budget. Treat the values below as **current-as-of-early-2026 defaults that must be re-verified**, keep them in a single config file with an effective-date, and show a "last verified" date in the UI. This is not tax advice.

**Prepayment / foreclosure charges**
- RBI has removed foreclosure/prepayment charges on **floating-rate** loans for **individual (non-business)** borrowers.
- **Fixed-rate** loans may still carry charges (commonly ~2% of outstanding). Model both.

**Costs**
- Processing fee ~0.25%–2% of loan; **18% GST** applies on fees; fees usually non-refundable even on rejection.
- MOD stamp duty and state stamp duty/registration are state-specific — make state an input, don't hardcode one state.

**Income-tax deductions (old regime, self-occupied unless noted)**
- **Section 24(b):** interest deduction up to **₹2,00,000/yr** (self-occupied). Let-out property: no upper limit (subject to set-off rules).
- **Section 80C:** principal repayment up to **₹1,50,000/yr** — shared with other 80C items (PPF, ELSS, life insurance, etc.).
- **Section 80EE:** extra ₹50,000/yr — **sanction window Apr 2016–Mar 2017, CLOSED** for new loans.
- **Section 80EEA:** extra ₹1,50,000/yr — **sanction window Apr 2019–Mar 2022, CLOSED** for new loans.
- **Pre-construction interest:** claimable in **5 equal annual instalments** starting the year of possession.
- **Joint loan:** co-owners who are also co-borrowers can *each* claim the full 24(b) and 80C limits.
- **New tax regime (current default):** the above deductions are generally **not available** for self-occupied property (limited interest deduction survives only for let-out property). The tool must ask which regime.

**Do not** present tax numbers as guaranteed — always caveat and date them.

---

## 9. Suggested technical approach

Framework-agnostic core, but a sensible default stack for a fast, content + interactive-tool site:

- **Frontend:** Next.js (React) + TypeScript. Static/ISR for content pages (SEO matters — see §10), client components for calculators.
- **Styling:** Tailwind CSS. Clean, trustworthy, mobile-first. (If using this environment's design guidance, see the `frontend-design` skill.)
- **Content:** MDX or a headless CMS so non-devs can edit articles; embed calculator components inside MDX.
- **Calculators:** pure TS functions in a `/lib/finance` module, fully unit-tested (Jest/Vitest). No calculator should depend on the network.
- **State/data:** everything client-side; **no user accounts, no PII collection** in MVP. If any analytics, use privacy-respecting/anonymous.
- **Config:** a single `taxRules.ts` / `charges.ts` with effective-dates for anything that changes yearly.

Recommended module layout:
```
/lib/finance/emi.ts            // EMI, amortisation
/lib/finance/prepayment.ts     // EMI-vs-tenure models
/lib/finance/costs.ts          // all-in cost, GST
/lib/finance/balanceTransfer.ts
/lib/finance/tax.ts            // reads from config
/config/taxRules.ts            // dated, single source of truth
/content/**/*.mdx              // A-to-Z articles
/components/calculators/*      // UI wrappers over /lib/finance
```

---

## 10. SEO & discovery (why content structure matters)

Organic search is the primary acquisition channel for a no-ads, no-lead-sale model. Target the informational/calculator queries competitors answer poorly (from the research tracker), e.g.: "does home loan prepayment reduce EMI or tenure," "home loan hidden charges list," "part payment home loan calculator," "80EEA eligibility," "balance transfer home loan worth it," "documents required for home loan."
→ Each becomes a content page + embedded tool. Server-render content for crawlability; use structured data (FAQ/HowTo schema).

*(Search-volume numbers in the tracker are unverified estimates — validate with Google Keyword Planner / Ahrefs before committing an SEO roadmap.)*

---

## 11. Open questions to validate before/while building

- Which states to support first for stamp-duty/MOD (start with a few high-volume metros?).
- Source & refresh cadence for the live rate-comparison table (or defer it).
- CMS choice (MDX-in-repo vs headless) based on who edits content.
- Later monetisation path that respects the no-lead-sale principle (contextual affiliate? premium tools?) — decide *after* validation.
- Confirm current-year tax limits and any Budget changes at build time.

---

## 12. What "done" looks like for MVP

A borrower can, without signing up or sharing a phone number:
1. Read a clear explainer on any core home-loan topic.
2. Model their EMI and see the amortisation split.
3. Model a prepayment and see **both** the tenure-reduction and EMI-reduction outcomes with interest saved.
4. See the true all-in cost of a loan including GST and hidden fees.
5. Check whether a balance transfer actually saves money after switching costs.
6. Understand their tax benefits for their regime and situation.
...and never receive a sales call because of it.

---

### Appendix: glossary (seed)
EMI, Principal, Interest, Tenure, FOIR, LTV, CIBIL, Repo-linked rate, MCLR, Spread, Reset, Amortisation, Part-payment, Foreclosure, MOD, NOC, Pre-construction interest, Balance transfer, Offset/overdraft loan.
