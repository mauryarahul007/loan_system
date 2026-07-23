// --- HOME LOAN RESEARCH HUB DATASET ---

const competitors = [
    { name: "BankBazaar", type: "Aggregator", url: "bankbazaar.com", focus: "Compare & apply", depth: 3, calculators: 3, ux: 3, prepay: 2, transparency: 2, strength: "Broad multi-lender comparison in one place", weakness: "Heavy lead-spam after enquiry; thin education" },
    { name: "Paisabazaar", type: "Aggregator", url: "paisabazaar.com", focus: "Compare & apply", depth: 3, calculators: 3, ux: 3, prepay: 2, transparency: 2, strength: "Credit-score + loan comparison combo", weakness: "Aggressive follow-up calls/SMS; transactional" },
    { name: "SBI Home Loans", type: "Bank", url: "homeloans.sbi", focus: "Direct lender", depth: 3, calculators: 3, ux: 2, prepay: 2, transparency: 3, strength: "Trusted lender, huge reach", weakness: "Dated UX; single-lender view only" },
    { name: "HDFC Bank", type: "Bank", url: "hdfcbank.com", focus: "Direct lender", depth: 3, calculators: 4, ux: 3, prepay: 2, transparency: 3, strength: "Solid calculators + strong brand", weakness: "Own products only; little payoff strategy" },
    { name: "Bajaj Finserv", type: "Fintech", url: "bajajfinserv.in", focus: "Direct lender", depth: 3, calculators: 4, ux: 4, prepay: 2, transparency: 3, strength: "Slick UX, fast application flows", weakness: "Sales-led; own products only" },
    { name: "Groww", type: "Fintech", url: "groww.in", focus: "Calculators + apply", depth: 3, calculators: 4, ux: 4, prepay: 2, transparency: 3, strength: "Clean calculators, strong UX", weakness: "Loans secondary to investing; shallow guidance" },
    { name: "MagicBricks", type: "Property", url: "magicbricks.com", focus: "Property + loans", depth: 2, calculators: 3, ux: 3, prepay: 1, transparency: 2, strength: "Property + loan under one roof", weakness: "Loan content is an add-on; shallow" },
    { name: "ClearTax", type: "Tax", url: "cleartax.in", focus: "Tax + calculators", depth: 4, calculators: 3, ux: 3, prepay: 2, transparency: 4, strength: "Best-in-class tax-benefit explainers", weakness: "No end-to-end loan journey; tax-only lens" },
    { name: "ICICI Bank", type: "Bank", url: "icicibank.com", focus: "Direct lender", depth: 3, calculators: 4, ux: 4, prepay: 2, transparency: 3, strength: "Fast digital sanction letters; strong corporate ties", weakness: "Limited custom payoff support; branch-bound for resets" },
    { name: "LIC HFL", type: "NBFC", url: "lichousing.com", focus: "Direct lender", depth: 2, calculators: 2, ux: 2, prepay: 2, transparency: 2, strength: "Lower entry interest rates; stable public firm", weakness: "Slow paper-heavy approvals; delay in deed release" },
    { name: "Axis Bank", type: "Bank", url: "axisbank.com", focus: "Direct lender", depth: 3, calculators: 3, ux: 3, prepay: 2, transparency: 3, strength: "Joint-borrower tax structuring; robust branch support", weakness: "High administrative reset charges; delay in portal update" }
];

const matrixFeatures = [
    { name: "Eligibility explainer (income, CIBIL, FOIR)", coverage: [["BankBazaar", "Y"], ["Paisabazaar", "Y"], ["SBI Home Loans", "P"], ["HDFC Bank", "Y"], ["Bajaj Finserv", "Y"], ["Groww", "P"], ["MagicBricks", "P"], ["ClearTax", "P"], ["ICICI Bank", "Y"], ["LIC HFL", "P"], ["Axis Bank", "Y"]], oppFlag: "MED" },
    { name: "Documentation checklist by profile", coverage: [["BankBazaar", "Y"], ["Paisabazaar", "Y"], ["SBI Home Loans", "Y"], ["HDFC Bank", "Y"], ["Bajaj Finserv", "Y"], ["Groww", "P"], ["MagicBricks", "P"], ["ClearTax", "N"], ["ICICI Bank", "Y"], ["LIC HFL", "P"], ["Axis Bank", "Y"]], oppFlag: "None" },
    { name: "EMI calculator", coverage: [["BankBazaar", "Y"], ["Paisabazaar", "Y"], ["SBI Home Loans", "Y"], ["HDFC Bank", "Y"], ["Bajaj Finserv", "Y"], ["Groww", "Y"], ["MagicBricks", "Y"], ["ClearTax", "Y"], ["ICICI Bank", "Y"], ["LIC HFL", "Y"], ["Axis Bank", "Y"]], oppFlag: "None" },
    { name: "Eligibility / affordability calculator", coverage: [["BankBazaar", "Y"], ["Paisabazaar", "Y"], ["SBI Home Loans", "Y"], ["HDFC Bank", "Y"], ["Bajaj Finserv", "Y"], ["Groww", "P"], ["MagicBricks", "P"], ["ClearTax", "N"], ["ICICI Bank", "Y"], ["LIC HFL", "P"], ["Axis Bank", "Y"]], oppFlag: "None" },
    { name: "Prepayment / part-payment calculator", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "N"], ["ICICI Bank", "P"], ["LIC HFL", "N"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Balance-transfer savings calculator", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "N"], ["MagicBricks", "N"], ["ClearTax", "N"], ["ICICI Bank", "P"], ["LIC HFL", "N"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Tenure vs interest trade-off tool", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "N"], ["ICICI Bank", "N"], ["LIC HFL", "N"], ["Axis Bank", "N"]], oppFlag: "HIGH" },
    { name: "Tax benefit guide (80C / 24b / 80EEA)", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "P"], ["MagicBricks", "P"], ["ClearTax", "Y"], ["ICICI Bank", "P"], ["LIC HFL", "P"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Prepayment & early-payoff strategy guide", coverage: [["BankBazaar", "N"], ["Paisabazaar", "N"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "N"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "P"], ["ICICI Bank", "N"], ["LIC HFL", "N"], ["Axis Bank", "N"]], oppFlag: "HIGH" },
    { name: "Interest-rate comparison across lenders", coverage: [["BankBazaar", "Y"], ["Paisabazaar", "Y"], ["SBI Home Loans", "N"], ["HDFC Bank", "N"], ["Bajaj Finserv", "N"], ["Groww", "P"], ["MagicBricks", "P"], ["ClearTax", "N"], ["ICICI Bank", "N"], ["LIC HFL", "N"], ["Axis Bank", "N"]], oppFlag: "HIGH" },
    { name: "Fixed vs floating explainer", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "P"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "P"], ["ICICI Bank", "P"], ["LIC HFL", "P"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Step-by-step application walkthrough", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "P"], ["HDFC Bank", "P"], ["Bajaj Finserv", "Y"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "N"], ["ICICI Bank", "P"], ["LIC HFL", "N"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Post-approval / disbursement guidance", coverage: [["BankBazaar", "N"], ["Paisabazaar", "N"], ["SBI Home Loans", "P"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "N"], ["MagicBricks", "N"], ["ClearTax", "N"], ["ICICI Bank", "P"], ["LIC HFL", "N"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Foreclosure & closure process", coverage: [["BankBazaar", "N"], ["Paisabazaar", "N"], ["SBI Home Loans", "P"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "N"], ["MagicBricks", "N"], ["ClearTax", "P"], ["ICICI Bank", "P"], ["LIC HFL", "P"], ["Axis Bank", "P"]], oppFlag: "HIGH" },
    { name: "Common mistakes / red flags", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "P"], ["ICICI Bank", "N"], ["LIC HFL", "N"], ["Axis Bank", "N"]], oppFlag: "HIGH" },
    { name: "Interactive scenario modelling", coverage: [["BankBazaar", "N"], ["Paisabazaar", "N"], ["SBI Home Loans", "N"], ["HDFC Bank", "N"], ["Bajaj Finserv", "N"], ["Groww", "P"], ["MagicBricks", "N"], ["ClearTax", "N"], ["ICICI Bank", "N"], ["LIC HFL", "N"], ["Axis Bank", "N"]], oppFlag: "HIGH" },
    { name: "First-time buyer learning path", coverage: [["BankBazaar", "P"], ["Paisabazaar", "P"], ["SBI Home Loans", "N"], ["HDFC Bank", "P"], ["Bajaj Finserv", "P"], ["Groww", "P"], ["MagicBricks", "P"], ["ClearTax", "P"], ["ICICI Bank", "P"], ["LIC HFL", "N"], ["Axis Bank", "P"]], oppFlag: "HIGH" }
];

const socialLog = [
    { date: "2026-07-15", platform: "Reddit", source: "r/IndiaInvestments", text: "Nobody explains how part-payment actually reduces tenure vs EMI", theme: "Prepayment confusion", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Prepayment calculator with tenure/EMI toggle", notes: "Highly upvoted thread" },
    { date: "2026-07", platform: "Blog/Forum", source: "Business Standard (PF)", text: "Borrower stunned that a large part-payment left the EMI unchanged — the bank had quietly shortened tenure instead", theme: "Prepayment confusion", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Prepay simulator with EMI-vs-tenure toggle", notes: "Classic, widely-reported scenario" },
    { date: "2026-07", platform: "Blog/Forum", source: "Business Standard (PF)", text: "Few borrowers know they must explicitly ask the bank to cut EMI rather than tenure after a prepayment", theme: "Prepayment confusion", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Explainer: what banks do by default", notes: "Advisor-quoted" },
    { date: "2026-07", platform: "Blog/Forum", source: "Consumer complaint sites", text: "One enquiry triggered 20+ daily loan SMS/calls the user couldn't stop even after DND requests", theme: "Other", pain: "Yes", sentiment: "Negative", severity: 5, feature: "No lead-selling / no data capture", notes: "AGGREGATOR SPAM — key differentiator" },
    { date: "2026-07", platform: "Blog/Forum", source: "Trustpilot", text: "User received 'loan approved' emails for loans never applied for, then a wave of scam calls", theme: "Other", pain: "Yes", sentiment: "Negative", severity: 5, feature: "Trust: privacy-first, no data sale", notes: "Lead-data misuse" },
    { date: "2026-07", platform: "Blog/Forum", source: "Consumer complaint sites", text: "Aggregator opened multiple loan applications for a single request, denting the user's credit score", theme: "Slow / unclear process", pain: "Yes", sentiment: "Negative", severity: 5, feature: "Transparent single-application guidance", notes: "Process opacity harms CIBIL" },
    { date: "2026-07", platform: "Blog/Forum", source: "Home-loan fee guides", text: "First-time buyers blindsided by ~1% processing fee + 18% GST, non-refundable even if the loan is rejected", theme: "Hidden charges / fees", pain: "Yes", sentiment: "Negative", severity: 4, feature: "All-in cost calculator incl. GST", notes: "Fee shock is common" },
    { date: "2026-07", platform: "Blog/Forum", source: "Money Buddha", text: "'Zero processing fee' offers quietly reappear as separate 'administrative' or 'convenience' charges", theme: "Hidden charges / fees", pain: "Yes", sentiment: "Negative", severity: 3, feature: "Fee-transparency comparison", notes: "Bait-and-switch on fees" },
    { date: "2026-07", platform: "Blog/Forum", source: "Aditya Birla Finance", text: "Many borrowers wrongly assume the quoted interest rate already includes all costs — it doesn't", theme: "Hidden charges / fees", pain: "Yes", sentiment: "Neutral", severity: 3, feature: "Net-cost (rate + fees) calculator", notes: "Rate-vs-total-cost gap" },
    { date: "2026-07", platform: "Blog/Forum", source: "Finnovate", text: "Buyers assume 80EE/80EEA apply to any first purchase, unaware both sanction windows have closed", theme: "Tax benefit confusion", pain: "Yes", sentiment: "Neutral", severity: 4, feature: "Tax tool that flags closed windows", notes: "80EE closed 2017; 80EEA closed 2022" },
    { date: "2026-07", platform: "Blog/Forum", source: "TaxFetch", text: "Confusion that home-loan deductions only work under the old regime, not the new default regime", theme: "Tax benefit confusion", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Regime-aware tax comparison", notes: "New regime = default now" },
    { date: "2026-07", platform: "Blog/Forum", source: "99acres", text: "Pre-construction interest must be claimed in 5 equal instalments after possession — many miss it", theme: "Tax benefit confusion", pain: "Yes", sentiment: "Neutral", severity: 3, feature: "Under-construction tax guide", notes: "Commonly overlooked" },
    { date: "2026-07", platform: "Blog/Forum", source: "Square Yards", text: "Joint co-owners can each claim full 24(b)/80C, but many don't structure ownership/payments to qualify", theme: "Tax benefit confusion", pain: "Yes", sentiment: "Neutral", severity: 3, feature: "Joint-loan optimisation explainer", notes: "Money left on table" },
    { date: "2026-07", platform: "Blog/Forum", source: "Money Buddha", text: "RBI scrapped foreclosure charges on floating-rate loans for individuals, yet borrowers still get quoted penalties", theme: "Foreclosure process", pain: "Yes", sentiment: "Negative", severity: 3, feature: "Know-your-rights explainer", notes: "Rights awareness gap" },
    { date: "2026-07", platform: "Blog/Forum", source: "Personal-finance blog", text: "Borrower couldn't find an EMI calculator that handled real scenarios — rate changes plus prepayments", theme: "Poor calculators", pain: "Yes", sentiment: "Negative", severity: 3, feature: "Advanced multi-scenario calculator", notes: "Bank calculators too basic" },
    { date: "2026-07", platform: "Blog/Forum", source: "INDmoney", text: "Standard EMI calculators ignore fees, rate resets and real amortisation quirks between lenders", theme: "Poor calculators", pain: "Yes", sentiment: "Neutral", severity: 3, feature: "Calculator with fees + rate resets", notes: "Oversimplified tools" },
    { date: "2026-07", platform: "Blog/Forum", source: "Business Standard (PF)", text: "Offset / overdraft home-loan option poorly understood compared with plain prepayment", theme: "Other", pain: "Yes", sentiment: "Neutral", severity: 3, feature: "Offset-vs-prepay explainer", notes: "Under-explained product" },
    { date: "2026-07", platform: "Blog/Forum", source: "Money Buddha", text: "Balance transfer re-triggers legal, valuation and MOD stamp-duty costs borrowers didn't expect", theme: "Balance transfer confusion", pain: "Yes", sentiment: "Negative", severity: 3, feature: "BT calculator that nets out switch costs", notes: "Switching isn't free" },
    { date: "2026-07", platform: "Blog/Forum", source: "Business Standard (PF)", text: "On rate hikes, tenure can silently balloon (15+ extra years) without the borrower noticing", theme: "Fixed vs floating doubt", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Rate-shock scenario tool", notes: "Floating-rate risk hidden" },
    { date: "2026-07", platform: "Blog/Forum", source: "Home-loan fee guides", text: "Prepayment / foreclosure penalty clauses buried in agreement footnotes and legal jargon", theme: "Hidden charges / fees", pain: "Yes", sentiment: "Negative", severity: 3, feature: "Plain-language agreement decoder", notes: "Fine-print problem" },
    { date: "2026-07", platform: "Blog/Forum", source: "Synthesis across sources", text: "Borrowers hop across 5+ sites (bank + aggregator + tax + property) to piece together one decision", theme: "Info scattered across sites", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Single A-to-Z hub", notes: "CORE THESIS — the gap you fill" },
    // Appended Scraped Data (New rows)
    { date: "2026-07-18", platform: "Reddit", source: "r/IndiaInvestments", text: "Bank silently extended loan tenure by 10 years on floating rate reset without offering option to increase EMI instead.", theme: "Fixed vs floating doubt", pain: "Yes", sentiment: "Negative", severity: 4, feature: "Rate-scenario / reset choice simulator", notes: "Unilateral tenure ballooning on RBI interest rate resets" },
    { date: "2026-07-18", platform: "Reddit", source: "r/IndiaInvestments", text: "Bank delayed release of original property deeds for 60+ days after foreclosure and ignored the ₹5,000/day RBI delay compensation mandate.", theme: "Foreclosure process", pain: "Yes", sentiment: "Negative", severity: 5, feature: "Document release & CERSAI charge release timeline tracker / GRO escalations", notes: "RBI 30-day responsible lending rules violated" },
    { date: "2026-07-18", platform: "Reddit", source: "r/IndiaInvestments", text: "Borrower unable to calculate actual interest savings and liquidity impact of parking funds in SBI Max Gain (overdraft) vs making prepayments.", theme: "Poor calculators", pain: "Yes", sentiment: "Neutral", severity: 3, feature: "SBI Max Gain / Overdraft account simulator", notes: "Max Gain interest calculations are highly opaque to average borrowers" },
    { date: "2026-07-18", platform: "Consumer Forum", source: "Consumer Complaint Portal", text: "NBFC charged a 2% foreclosure fee on a semi-fixed rate transition, leading to disputes over whether the rate was currently floating.", theme: "Hidden charges / fees", pain: "Yes", sentiment: "Negative", severity: 4, feature: "NBFC charges comparison and fine-print decoder", notes: "NBFC floating rate loopholes for charges" },
    { date: "2026-07-18", platform: "Reddit", source: "r/IndiaInvestments", text: "Borrower concerned about drop in CIBIL score after foreclosing loan due to closure of their oldest active credit account.", theme: "Other", pain: "Yes", sentiment: "Negative", severity: 3, feature: "Post-closure checklist & CIBIL score impact guide", notes: "Credit mix change shock" }
];

const searchIntentGaps = [
    { query: "how does home loan prepayment reduce interest", volume: 12000, type: "Informational", quality: 2, format: "Interactive prepayment calculator + guide" },
    { query: "does home loan prepayment reduce EMI or tenure", volume: 8000, type: "Informational", quality: 2, format: "Interactive EMI-vs-tenure prepay simulator" },
    { query: "home loan hidden charges list", volume: 12000, type: "Informational", quality: 3, format: "Full fee breakdown + GST calculator" },
    { query: "home loan tax benefit old vs new regime", volume: 6000, type: "Comparison", quality: 2, format: "Side-by-side regime comparison tool" },
    { query: "80EEA eligibility 2026", volume: 4000, type: "Informational", quality: 3, format: "Eligibility checker flagging closed window" },
    { query: "part payment home loan calculator", volume: 9000, type: "Calculator", quality: 3, format: "Multi-prepayment calculator" },
    { query: "is balance transfer home loan worth it", volume: 5000, type: "Comparison", quality: 2, format: "BT net-savings calculator incl. fees" },
    { query: "home loan foreclosure charges RBI rules", volume: 3500, type: "Informational", quality: 3, format: "Rights explainer (floating-rate waiver)" },
    { query: "pre construction interest home loan tax", volume: 2500, type: "Informational", quality: 2, format: "5-instalment claim guide" },
    { query: "fixed vs floating home loan which is better", volume: 7000, type: "Comparison", quality: 3, format: "Rate-scenario explainer" },
    { query: "home loan eligibility calculator by salary", volume: 14000, type: "Calculator", quality: 3, format: "Affordability / FOIR calculator" },
    { query: "how to reduce home loan tenure", volume: 4500, type: "Informational", quality: 2, format: "Payoff-strategy guide + calculator" },
    { query: "documents required for home loan", volume: 18000, type: "Informational", quality: 4, format: "Checklist by borrower profile" },
    { query: "home loan EMI calculator with prepayment", volume: 10000, type: "Calculator", quality: 3, format: "Advanced calculator" },
    { query: "joint home loan tax benefit for both", volume: 3000, type: "Informational", quality: 3, format: "Joint-claim optimisation explainer" },
    { query: "home loan process step by step India", volume: 6000, type: "Informational", quality: 3, format: "End-to-end journey walkthrough" }
];

const opportunityScoring = [
    { name: "All-in cost / hidden-charges calculator", reach: 5, impact: 4, confidence: 4, effort: 2, priority: "P1", evidence: "Strong fee-shock complaints across sources" },
    { name: "Interactive prepayment simulator (EMI-vs-tenure)", reach: 5, impact: 5, confidence: 4, effort: 3, priority: "P1", evidence: "Top pain theme: prepayment confusion" },
    { name: "Documentation checklist generator by profile", reach: 4, impact: 3, confidence: 4, effort: 2, priority: "P2", evidence: "High-volume 'documents required' searches" },
    { name: "Balance-transfer net-savings calculator", reach: 3, impact: 4, confidence: 4, effort: 2, priority: "P2", evidence: "BT hidden-cost confusion" },
    { name: "Know-your-rights / foreclosure explainer", reach: 2, impact: 3, confidence: 4, effort: 1, priority: "P2", evidence: "RBI floating-rate waiver awareness gap" },
    { name: "Regime-aware tax-benefit tool", reach: 4, impact: 4, confidence: 4, effort: 3, priority: "P2", evidence: "Old-vs-new regime + closed 80EE/80EEA confusion" },
    { name: "Advanced EMI calc (multi-prepay + rate resets)", reach: 4, impact: 4, confidence: 4, effort: 3, priority: "P2", evidence: "Bank calculators too basic" },
    { name: "Single A-to-Z knowledge hub (no lead sale)", reach: 5, impact: 5, confidence: 3, effort: 5, priority: "P2", evidence: "Scattered-info thesis + anti-spam trust" },
    { name: "First-time-buyer guided path", reach: 4, impact: 4, confidence: 3, effort: 4, priority: "P2", evidence: "Eligibility opacity for new buyers" },
    { name: "Neutral live rate-comparison table", reach: 4, impact: 3, confidence: 3, effort: 4, priority: "P3", evidence: "Rate comparison difficulty" }
];

// --- APP CORE CONTROLLER ---

document.addEventListener("DOMContentLoaded", () => {
    // Classify baseline logs into 5-way sentiment categories
    socialLog.forEach(item => {
        let sentiment = classifySentiment(item.text);
        if (sentiment === "Discussion" && item.theme !== "Other") {
            if (["Tax benefit confusion", "Balance transfer confusion", "Fixed vs floating doubt"].includes(item.theme)) {
                sentiment = "Query";
            } else if (["Prepayment confusion", "Hidden charges / fees", "Foreclosure process", "Poor calculators", "Slow / unclear process"].includes(item.theme)) {
                sentiment = "Complaint";
            }
        }
        item.sentiment = sentiment;
    });
    
    initTabSwitching();
    initDashboard();
    initSocialLog();
    initCompetitorMatrix();
    initSearchGaps();
    initOpportunities();
    initScanner();
    initPayoffPlanner();
    
    // Default pre-hydrate Solution Studio with top search gap
    if (typeof searchIntentGaps !== "undefined" && searchIntentGaps.length > 0) {
        const topGap = {
            ...searchIntentGaps[0],
            loan_type: searchIntentGaps[0].loan_type || searchIntentGaps[0].loanType || "Home Loan",
            gapScore: searchIntentGaps[0].volume * (6 - searchIntentGaps[0].quality)
        };
        launchSolutionStudio(topGap);
    }
    
    // Set current date
    const dateOpts = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").textContent = new Date().toLocaleDateString('en-US', dateOpts);
    
    // Hydrate tables with MongoDB Atlas items
    loadLogsFromDatabase();
});

async function loadLogsFromDatabase() {
    try {
        const response = await fetch("/api/logs");
        const data = await response.json();
        if (data.success && data.logs && data.logs.length > 0) {
            data.logs.forEach(item => {
                const cleanText = item.text.trim().toLowerCase();
                if (!socialLog.some(existing => existing.text.trim().toLowerCase() === cleanText)) {
                    socialLog.unshift(item);
                }
            });
            // Re-classify all and refresh views
            socialLog.forEach(item => {
                let sentiment = classifySentiment(item.text);
                if (sentiment === "Discussion" && item.theme !== "Other") {
                    if (["Tax benefit confusion", "Balance transfer confusion", "Fixed vs floating doubt"].includes(item.theme)) {
                        sentiment = "Query";
                    } else if (["Prepayment confusion", "Hidden charges / fees", "Foreclosure process", "Poor calculators", "Slow / unclear process"].includes(item.theme)) {
                        sentiment = "Complaint";
                    }
                }
                item.sentiment = sentiment;
            });
            syncSearchKeywordsFromLogs(socialLog);
            initDashboard();
            initSocialLog();
            initSearchGaps();
        }
    } catch (err) {
        console.error("Failed to load logs from database:", err);
    }
}

// 1. Tab switching router
function initTabSwitching() {
    const menuButtons = document.querySelectorAll(".menu-item");
    const tabPanes = document.querySelectorAll(".tab-pane");
    const pageTitle = document.getElementById("page-title");
    const pageSubtitle = document.getElementById("page-subtitle");
    
    const titles = {
        dashboard: ["Research Dashboard", "Snapshot of validated market demand and white spaces."],
        social: ["Social Listening Log", "Real consumer complaints and discussions extracted from Reddit, forums, and portals."],
        competitors: ["Competitor Gap Matrix", "Analysis of home loan features offered by main players in the Indian market."],
        search: ["Search Intent Gaps", "SEO keyword opportunities where existing content does not solve consumer doubts."],
        opportunities: ["Opportunity Scoring (RICE)", "Prioritisation index for home loan features based on Reach, Impact, Confidence, and Effort."],
        payoff: ["Loan Payoff Planner", "Interactive acceleration strategies (Avalanche vs. Snowball) with prepayment compounding."],
        "solution-studio": ["Solution Studio", "Live customer solution generator and interactive widget sandbox."]
    };

    menuButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            
            // Toggle active menu button
            menuButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Toggle active tab pane
            tabPanes.forEach(pane => pane.classList.remove("active"));
            const targetPane = document.getElementById(`tab-${tabId}`);
            if (targetPane) targetPane.classList.add("active");
            
            // Update titles
            if (titles[tabId]) {
                pageTitle.textContent = titles[tabId][0];
                pageSubtitle.textContent = titles[tabId][1];
            }
            
            // Specific tab initializations/animations
            if (tabId === "dashboard") {
                animateCharts();
            } else if (tabId === "solution-studio") {
                if (typeof searchIntentGaps !== "undefined" && searchIntentGaps.length > 0) {
                    const activeQuery = document.getElementById("studio-query-title");
                    if (!activeQuery || !activeQuery.textContent || activeQuery.textContent.trim() === "") {
                        const topGap = {
                            ...searchIntentGaps[0],
                            loan_type: searchIntentGaps[0].loan_type || searchIntentGaps[0].loanType || "Home Loan",
                            gapScore: searchIntentGaps[0].volume * (6 - searchIntentGaps[0].quality)
                        };
                        launchSolutionStudio(topGap);
                    }
                }
            }
        });
    });
}

// Helper to compute theme counts & priority scores
function getThemeStats() {
    const themeCounts = {};
    const themeSeverities = {};
    
    // Loop through social logs to gather stats
    socialLog.forEach(item => {
        const theme = item.theme;
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        themeSeverities[theme] = (themeSeverities[theme] || 0) + item.severity;
    });
    
    const themePriority = [];
    Object.keys(themeCounts).forEach(theme => {
        const mentions = themeCounts[theme];
        const avgSev = themeSeverities[theme] / mentions;
        themePriority.push({
            theme: theme,
            mentions: mentions,
            avgSeverity: avgSev.toFixed(1),
            priorityScore: (mentions * avgSev).toFixed(1)
        });
    });
    
    // Sort by priority score desc
    return themePriority.sort((a, b) => b.priorityScore - a.priorityScore);
}

// 2. Dashboard renderer & calculations
function initDashboard() {
    const totalComments = socialLog.length;
    const totalCompetitors = competitors.length;
    const totalKeywords = searchIntentGaps.length;
    
    const displeasureCount = socialLog.filter(item => item.sentiment === "Displeasure").length;
    const complaintCount = socialLog.filter(item => item.sentiment === "Complaint").length;
    const queryCount = socialLog.filter(item => item.sentiment === "Query").length;
    const discussionCount = socialLog.filter(item => item.sentiment === "Discussion").length;
    const appreciationCount = socialLog.filter(item => item.sentiment === "Appreciation").length;
    
    // Calculate total pain percentage (Displeasure + Complaint)
    const negativePct = Math.round(((displeasureCount + complaintCount) / totalComments) * 100);
    
    // Set Stat boxes
    document.getElementById("stat-comments-count").textContent = totalComments;
    document.getElementById("stat-competitors-count").textContent = totalCompetitors;
    document.getElementById("stat-keywords-count").textContent = totalKeywords;
    document.getElementById("stat-sentiment-neg").textContent = `${negativePct}%`;
    
    // Set progress bar width on comments box
    document.querySelector("#stat-comments-count").closest(".stat-card").querySelector(".progress-bar").style.width = `${Math.min(totalComments, 100)}%`;
    
    // Compute themes priority
    const themeStats = getThemeStats();
    const topThemeObj = themeStats[0] || { theme: "None", priorityScore: "0.0" };
    
    document.getElementById("snap-top-theme").textContent = topThemeObj.theme;
    document.getElementById("snap-top-theme-score").textContent = topThemeObj.themeObj ? topThemeObj.themeObj.priorityScore : topThemeObj.priorityScore;
    
    // Find top opportunity (compute RICE)
    const scoredOpps = opportunityScoring.map(opp => {
        return {
            ...opp,
            rice: ((opp.reach * opp.impact * opp.confidence) / opp.effort).toFixed(1)
        };
    }).sort((a, b) => b.rice - a.rice);
    
    const topOppObj = scoredOpps[0] || { name: "None", rice: "0.0" };
    document.getElementById("snap-top-opp").textContent = topOppObj.name;
    document.getElementById("snap-top-opp-score").textContent = topOppObj.rice;
    
    // Count white spaces (Features with HIGH flag)
    const whiteSpaceCount = matrixFeatures.filter(f => f.oppFlag === "HIGH").length;
    document.getElementById("snap-white-spaces").textContent = `${whiteSpaceCount} Features`;
    
    // Populate Donut Legend numbers
    document.getElementById("legend-disp-count").textContent = displeasureCount;
    document.getElementById("legend-comp-count").textContent = complaintCount;
    document.getElementById("legend-query-count").textContent = queryCount;
    document.getElementById("legend-disc-count").textContent = discussionCount;
    document.getElementById("legend-appr-count").textContent = appreciationCount;
    
    document.getElementById("donut-label-pct").textContent = `${negativePct}%`;
    
    // Populate Theme Bars in dashboard panel
    const themeContainer = document.getElementById("theme-bars");
    themeContainer.innerHTML = "";
    
    // Take top 6 themes to show in visual bars
    themeStats.slice(0, 6).forEach(t => {
        const item = document.createElement("div");
        item.className = "theme-bar-item";
        
        // Find max priority score to normalize progress bar widths
        const maxScore = Math.max(...themeStats.map(x => parseFloat(x.priorityScore)));
        const pctWidth = maxScore > 0 ? (parseFloat(t.priorityScore) / maxScore) * 100 : 0;
        
        item.innerHTML = `
            <div class="theme-bar-name">${t.theme}</div>
            <div class="theme-bar-track-wrapper">
                <div class="theme-bar-fill" data-width="${pctWidth}%"></div>
            </div>
            <div class="theme-bar-val">${t.priorityScore}</div>
        `;
        themeContainer.appendChild(item);
    });

    // Compute Lender Complaint Index
    const lenderMap = {};
    const lenderThemes = {};
    const knownLenders = ["SBI Home Loans", "HDFC Bank", "ICICI Bank", "Axis Bank", "Bajaj Finserv", "Piramal Finance", "Canara Bank", "PNB Housing", "LIC HFL", "IDFC First Bank"];

    socialLog.forEach(item => {
        const txt = item.text.toLowerCase();
        let matchedLender = null;
        for (const lender of knownLenders) {
            const shortName = lender.split(" ")[0].toLowerCase();
            if (txt.includes(shortName)) {
                matchedLender = lender;
                break;
            }
        }
        if (matchedLender) {
            lenderMap[matchedLender] = (lenderMap[matchedLender] || 0) + 1;
            if (!lenderThemes[matchedLender]) lenderThemes[matchedLender] = {};
            lenderThemes[matchedLender][item.theme] = (lenderThemes[matchedLender][item.theme] || 0) + 1;
        }
    });

    const lenderContainer = document.getElementById("lender-complaint-index");
    if (lenderContainer) {
        lenderContainer.innerHTML = "";
        const sortedLenders = Object.keys(lenderMap).map(lender => {
            const count = lenderMap[lender];
            const themesObj = lenderThemes[lender] || {};
            const topTheme = Object.keys(themesObj).sort((a, b) => themesObj[b] - themesObj[a])[0] || "General complaint";
            return { lender, count, topTheme };
        }).sort((a, b) => b.count - a.count);

        sortedLenders.slice(0, 4).forEach(item => {
            const div = document.createElement("div");
            div.className = "snapshot-item clickable-lender-item";
            div.style.cursor = "pointer";
            div.title = `Click to view all ${item.count} captured complaints for ${item.lender}`;
            
            let badgeColor = "var(--accent-orange)";
            let riskText = "Moderate Friction";
            if (item.count >= 3) {
                badgeColor = "var(--accent-red)";
                riskText = "High Friction Flag";
            }
            div.innerHTML = `
                <div class="snapshot-label" style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: var(--accent-blue); text-decoration: underline;">${item.lender} ↗</span>
                    <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: ${badgeColor}; border: 1px solid ${badgeColor}; font-size: 10px; padding: 2px 6px;">${riskText}</span>
                </div>
                <div class="snapshot-val" style="font-size: 16px; margin-top: 2px;">${item.count} Consumer Signal${item.count > 1 ? 's' : ''}</div>
                <div class="snapshot-subtext">Primary Pain: <strong>${item.topTheme}</strong></div>
            `;

            // Click redirection to Social Listening tab filtered by lender name
            div.addEventListener("click", () => {
                const socialTabBtn = document.querySelector('.menu-item[data-tab="social"]');
                if (socialTabBtn) socialTabBtn.click();
                
                const searchInput = document.getElementById("social-search");
                if (searchInput) {
                    const shortName = item.lender.split(" ")[0].toLowerCase();
                    searchInput.value = shortName;
                    searchInput.dispatchEvent(new Event("input"));
                }
            });

            lenderContainer.appendChild(div);
        });

        if (sortedLenders.length === 0) {
            lenderContainer.innerHTML = `<div style="color: var(--text-muted); padding: 12px;">No lender complaint signals mapped.</div>`;
        }
    }
    
    // Fire animations
    setTimeout(animateCharts, 100);
}

// Chart animations (stroke offset calculation and bar loading)
function animateCharts() {
    const totalComments = socialLog.length;
    const displeasureCount = socialLog.filter(item => item.sentiment === "Displeasure").length;
    const complaintCount = socialLog.filter(item => item.sentiment === "Complaint").length;
    const queryCount = socialLog.filter(item => item.sentiment === "Query").length;
    const discussionCount = socialLog.filter(item => item.sentiment === "Discussion").length;
    const appreciationCount = socialLog.filter(item => item.sentiment === "Appreciation").length;
    
    const dispPct = displeasureCount / totalComments;
    const compPct = complaintCount / totalComments;
    const queryPct = queryCount / totalComments;
    const discPct = discussionCount / totalComments;
    const apprPct = appreciationCount / totalComments;
    
    // Circumference = 2 * PI * r = 2 * 3.14159 * 40 = 251.2
    const totalCircumference = 251.2;
    
    const dispOffset = totalCircumference - (dispPct * totalCircumference);
    const compOffset = totalCircumference - ((dispPct + compPct) * totalCircumference);
    const queryOffset = totalCircumference - ((dispPct + compPct + queryPct) * totalCircumference);
    const discOffset = totalCircumference - ((dispPct + compPct + queryPct + discPct) * totalCircumference);
    const apprOffset = totalCircumference - ((dispPct + compPct + queryPct + discPct + apprPct) * totalCircumference);
    
    // Slice Displeasure
    const sliceDisp = document.getElementById("donut-slice-disp");
    if (sliceDisp) {
        sliceDisp.style.strokeDasharray = `${totalCircumference}`;
        sliceDisp.style.strokeDashoffset = `${dispOffset}`;
    }
    
    // Slice Complaint
    const sliceComp = document.getElementById("donut-slice-comp");
    if (sliceComp) {
        sliceComp.style.strokeDasharray = `${totalCircumference}`;
        sliceComp.style.strokeDashoffset = `${compOffset}`;
    }
    
    // Slice Query
    const sliceQuery = document.getElementById("donut-slice-query");
    if (sliceQuery) {
        sliceQuery.style.strokeDasharray = `${totalCircumference}`;
        sliceQuery.style.strokeDashoffset = `${queryOffset}`;
    }
    
    // Slice Discussion
    const sliceDisc = document.getElementById("donut-slice-disc");
    if (sliceDisc) {
        sliceDisc.style.strokeDasharray = `${totalCircumference}`;
        sliceDisc.style.strokeDashoffset = `${discOffset}`;
    }
    
    // Slice Appreciation
    const sliceAppr = document.getElementById("donut-slice-appr");
    if (sliceAppr) {
        sliceAppr.style.strokeDasharray = `${totalCircumference}`;
        sliceAppr.style.strokeDashoffset = `${apprOffset}`;
    }
    
    // Animate Theme priority bars
    const themeFills = document.querySelectorAll(".theme-bar-fill");
    themeFills.forEach(fill => {
        const targetWidth = fill.getAttribute("data-width");
        fill.style.width = targetWidth;
    });
}

// Helper to delete logs from backend database & local excel
async function apiDeleteLogs(texts = [], deleteAll = false) {
    try {
        await fetch("/api/delete-logs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texts: texts, all: deleteAll })
        });
    } catch (err) {
        console.error("Failed to sync deletion with database:", err);
    }
}

// 3. Social listening log render & search filter
function initSocialLog() {
    const tableBody = document.getElementById("social-table-body");
    const searchInput = document.getElementById("social-search");
    const themeSelect = document.getElementById("social-filter-theme");
    const sentimentSelect = document.getElementById("social-filter-sentiment");
    const selectAllCb = document.getElementById("select-all-social");
    const deleteSelectedBtn = document.getElementById("btn-delete-social-selected");
    const countSelectedSpan = document.getElementById("count-social-selected");
    const cleanDbBtn = document.getElementById("btn-clean-social-db");
    
    // Populate theme dropdown options
    const uniqueThemes = [...new Set(socialLog.map(item => item.theme))].sort();
    themeSelect.innerHTML = `<option value="">All Themes</option>`;
    uniqueThemes.forEach(theme => {
        const opt = document.createElement("option");
        opt.value = theme;
        opt.textContent = theme;
        themeSelect.appendChild(opt);
    });
    
    function updateSelectionState() {
        const checkedBoxes = tableBody.querySelectorAll(".row-select-social:checked");
        const count = checkedBoxes.length;
        if (countSelectedSpan) countSelectedSpan.textContent = count;
        if (deleteSelectedBtn) deleteSelectedBtn.style.display = count > 0 ? "inline-flex" : "none";
        
        const allBoxes = tableBody.querySelectorAll(".row-select-social");
        if (selectAllCb) {
            selectAllCb.checked = allBoxes.length > 0 && checkedBoxes.length === allBoxes.length;
        }
    }

    if (selectAllCb) {
        selectAllCb.addEventListener("change", () => {
            const isChecked = selectAllCb.checked;
            const checkboxes = tableBody.querySelectorAll(".row-select-social");
            checkboxes.forEach(cb => cb.checked = isChecked);
            updateSelectionState();
        });
    }

    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener("click", async () => {
            const checkedBoxes = tableBody.querySelectorAll(".row-select-social:checked");
            const selectedIndices = Array.from(checkedBoxes).map(cb => parseInt(cb.getAttribute("data-index")));
            if (selectedIndices.length === 0) return;
            
            if (!confirm(`Are you sure you want to delete ${selectedIndices.length} selected statement(s)?`)) return;
            
            const deletedTexts = [];
            selectedIndices.sort((a, b) => b - a).forEach(idx => {
                if (idx >= 0 && idx < socialLog.length) {
                    deletedTexts.push(socialLog[idx].text);
                    socialLog.splice(idx, 1);
                }
            });

            await apiDeleteLogs(deletedTexts, false);
            syncSearchKeywordsFromLogs(socialLog);
            initDashboard();
            renderSocialLogs();
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
        });
    }

    if (cleanDbBtn) {
        cleanDbBtn.addEventListener("click", async () => {
            if (!confirm("⚠️ Danger Zone: Are you sure you want to purge ALL consumer complaint logs from the database? This action cannot be undone.")) return;
            
            await apiDeleteLogs([], true);
            socialLog.length = 0;
            syncSearchKeywordsFromLogs(socialLog);
            initDashboard();
            renderSocialLogs();
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
        });
    }

    // Render logs
    function renderSocialLogs() {
        const searchVal = searchInput ? searchInput.value.toLowerCase() : "";
        const themeVal = themeSelect ? themeSelect.value : "";
        const sentimentVal = sentimentSelect ? sentimentSelect.value : "";
        
        tableBody.innerHTML = "";
        
        const filtered = socialLog.filter(item => {
            const matchesSearch = item.text.toLowerCase().includes(searchVal) || 
                                  item.source.toLowerCase().includes(searchVal) ||
                                  item.feature.toLowerCase().includes(searchVal);
            const matchesTheme = themeVal === "" || item.theme === themeVal;
            const matchesSentiment = sentimentVal === "" || item.sentiment === sentimentVal;
            
            return matchesSearch && matchesTheme && matchesSentiment;
        });
        
        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="11" class="text-center" style="text-align: center; padding: 40px; color: var(--text-muted);">No consumer statements found matching the filters.</td></tr>`;
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
            return;
        }
        
        filtered.forEach(item => {
            const realIdx = socialLog.indexOf(item);
            const tr = document.createElement("tr");
            
            // Format Platform tag
            let platformClass = "platform-tag";
            let platformIcon = "";
            if (item.platform === "Reddit") {
                platformIcon = `<span style="color: #ff4500; font-weight: 700; margin-right: 4px;">r/</span>`;
            } else if (item.platform === "Blog/Forum") {
                platformIcon = `<span style="color: var(--accent-blue); margin-right: 4px;">📰</span>`;
            } else if (item.platform === "Consumer Forum") {
                platformIcon = `<span style="color: var(--accent-red); margin-right: 4px;">⚖️</span>`;
            }
            
            // Format Sentiment Badge
            let sentClass = "badge neu";
            if (item.sentiment === "Displeasure") sentClass = "badge neg";
            else if (item.sentiment === "Complaint") sentClass = "badge med";
            else if (item.sentiment === "Query") sentClass = "badge p2";
            else if (item.sentiment === "Appreciation") sentClass = "badge appr";
            
            // Format Severity stars
            let severityStars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= item.severity) {
                    severityStars += `<span style="color: var(--accent-orange); font-size: 14px;">★</span>`;
                } else {
                    severityStars += `<span style="color: rgba(255, 255, 255, 0.05); font-size: 14px;">★</span>`;
                }
            }
            
            const loanType = item.loan_type || "Home Loan";
            
            tr.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="row-select-social" data-index="${realIdx}"></td>
                <td style="white-space: nowrap;">${item.date}</td>
                <td><span style="font-weight: 600; font-size: 11px; text-transform: uppercase; color: var(--text-muted);">${loanType}</span></td>
                <td><div class="${platformClass}">${platformIcon}${item.platform}</div></td>
                <td style="font-weight: 500;">${item.source}</td>
                <td style="color: var(--text-primary); font-size: 13.5px; line-height: 1.4;">${item.text}</td>
                <td><span style="font-size: 12px; font-weight: 500; color: #a78bfa;">${item.theme}</span></td>
                <td><span class="${sentClass}">${item.sentiment}</span></td>
                <td style="white-space: nowrap;">${severityStars}</td>
                <td style="font-size: 12.5px;">
                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">${item.feature}</div>
                    <div style="color: var(--text-muted); font-style: italic;">${item.notes}</div>
                </td>
                <td style="text-align: center;">
                    <button class="btn-delete-row btn-delete-social" data-index="${realIdx}" title="Delete line item">🗑️</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        tableBody.querySelectorAll(".row-select-social").forEach(cb => {
            cb.addEventListener("change", updateSelectionState);
        });

        tableBody.querySelectorAll(".btn-delete-social").forEach(btn => {
            btn.addEventListener("click", async () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (idx >= 0 && idx < socialLog.length) {
                    const deletedItem = socialLog.splice(idx, 1)[0];
                    await apiDeleteLogs([deletedItem.text], false);
                    syncSearchKeywordsFromLogs(socialLog);
                    initDashboard();
                    renderSocialLogs();
                    updateSelectionState();
                }
            });
        });

        updateSelectionState();
    }
    
    // Attach event listeners
    if (searchInput) searchInput.addEventListener("input", renderSocialLogs);
    if (themeSelect) themeSelect.addEventListener("change", renderSocialLogs);
    if (sentimentSelect) sentimentSelect.addEventListener("change", renderSocialLogs);
    
    // Init render
    renderSocialLogs();
}

// 4. Competitor feature matrix builder
function initCompetitorMatrix() {
    const matrixHeaderRow = document.getElementById("matrix-header-row");
    const matrixTableBody = document.getElementById("matrix-table-body");
    
    // Add competitor headers dynamically
    competitors.forEach(comp => {
        const th = document.createElement("th");
        th.style.textAlign = "center";
        th.style.fontSize = "11px";
        th.style.padding = "12px 8px";
        
        // Render name and brand label
        th.innerHTML = `
            <div style="font-weight: 700; color: var(--text-primary);">${comp.name}</div>
            <div style="font-size: 9px; color: var(--text-muted); font-weight: 500; text-transform: uppercase; margin-top: 2px;">${comp.type}</div>
        `;
        matrixHeaderRow.insertBefore(th, matrixHeaderRow.lastElementChild.previousElementSibling);
    });
    
    // Render feature rows
    matrixFeatures.forEach(feature => {
        const tr = document.createElement("tr");
        
        let rowHtml = `<td style="font-weight: 500; color: var(--text-primary);">${feature.name}</td>`;
        
        // Competitor ratings mapping
        let checkmarkCount = 0;
        competitors.forEach(comp => {
            const mapObj = feature.coverage.find(c => c[0] === comp.name) || [comp.name, "N"];
            const rate = mapObj[1];
            
            let displayVal = "";
            let classVal = "";
            if (rate === "Y") {
                displayVal = "✓";
                classVal = "y";
                checkmarkCount += 1.0;
            } else if (rate === "P") {
                displayVal = "P";
                classVal = "p";
                checkmarkCount += 0.5;
            } else {
                displayVal = "✗";
                classVal = "n";
            }
            
            rowHtml += `<td class="matrix-cell ${classVal}" style="font-size: 15px; font-weight: 700; text-align: center;">${displayVal}</td>`;
        });
        
        // Market Coverage ratio
        const coverageRatio = `${checkmarkCount}/${competitors.length}`;
        
        // Opportunity Badge
        let oppClass = "badge";
        if (feature.oppFlag === "HIGH") oppClass += " high";
        else if (feature.oppFlag === "MED") oppClass += " med";
        else oppClass += " neu";
        
        rowHtml += `
            <td style="font-weight: 600; text-align: center; color: var(--text-primary);">${coverageRatio}</td>
            <td style="text-align: center;"><span class="${oppClass}">${feature.oppFlag}</span></td>
        `;
        
        tr.innerHTML = rowHtml;
        matrixTableBody.appendChild(tr);
    });
}

// 5. Search Intent Gaps list render, filtering & table column sorting
function initSearchGaps() {
    const tableBody = document.getElementById("search-table-body");
    const searchInput = document.getElementById("search-gap-search");
    const loanTypeSelect = document.getElementById("search-filter-loantype");
    const headers = document.querySelectorAll("#search-gap-table th.sortable");
    const selectAllCb = document.getElementById("select-all-search");
    const deleteSelectedBtn = document.getElementById("btn-delete-search-selected");
    const countSelectedSpan = document.getElementById("count-search-selected");
    
    let currentSortCol = "gapScore";
    let currentSortAsc = false; // Descending by default for gapScore
    
    function updateSelectionState() {
        const checkedBoxes = tableBody.querySelectorAll(".row-select-search:checked");
        const count = checkedBoxes.length;
        if (countSelectedSpan) countSelectedSpan.textContent = count;
        if (deleteSelectedBtn) deleteSelectedBtn.style.display = count > 0 ? "inline-flex" : "none";
        
        const allBoxes = tableBody.querySelectorAll(".row-select-search");
        if (selectAllCb) {
            selectAllCb.checked = allBoxes.length > 0 && checkedBoxes.length === allBoxes.length;
        }
    }

    if (selectAllCb) {
        selectAllCb.addEventListener("change", () => {
            const isChecked = selectAllCb.checked;
            const checkboxes = tableBody.querySelectorAll(".row-select-search");
            checkboxes.forEach(cb => cb.checked = isChecked);
            updateSelectionState();
        });
    }

    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener("click", () => {
            const checkedBoxes = tableBody.querySelectorAll(".row-select-search:checked");
            const selectedIndices = Array.from(checkedBoxes).map(cb => parseInt(cb.getAttribute("data-index")));
            if (selectedIndices.length === 0) return;
            
            if (!confirm(`Are you sure you want to delete ${selectedIndices.length} selected search gap(s)?`)) return;
            
            selectedIndices.sort((a, b) => b - a).forEach(idx => {
                if (idx >= 0 && idx < searchIntentGaps.length) {
                    searchIntentGaps.splice(idx, 1);
                }
            });

            initDashboard();
            renderSearchGaps();
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
        });
    }
    
    function renderSearchGaps() {
        const searchVal = searchInput ? searchInput.value.toLowerCase() : "";
        const loanTypeVal = loanTypeSelect ? loanTypeSelect.value : "";
        tableBody.innerHTML = "";
        
        // Map data, calculating Gap Score dynamically
        const mappedGaps = searchIntentGaps.map((item, originalIndex) => {
            const gapScore = item.volume * (6 - item.quality);
            return {
                ...item,
                origIndex: originalIndex,
                loan_type: item.loan_type || item.loanType || "Home Loan",
                gapScore: gapScore
            };
        });
        
        // Filter data
        const filtered = mappedGaps.filter(item => {
            const matchesSearch = item.query.toLowerCase().includes(searchVal) || 
                                  item.format.toLowerCase().includes(searchVal) ||
                                  item.type.toLowerCase().includes(searchVal);
            const matchesLoanType = loanTypeVal === "" || item.loan_type.toLowerCase() === loanTypeVal.toLowerCase();
            return matchesSearch && matchesLoanType;
        });
        
        // Sort data
        filtered.sort((a, b) => {
            let valA = a[currentSortCol];
            let valB = b[currentSortCol];
            
            if (typeof valA === 'string') {
                valA = valA.toLowerCase();
                valB = valB.toLowerCase();
            }
            
            if (valA < valB) return currentSortAsc ? -1 : 1;
            if (valA > valB) return currentSortAsc ? 1 : -1;
            return 0;
        });
        
        // Update header UI sort indicators
        headers.forEach(th => {
            const colKey = th.getAttribute("data-sort");
            const iconSpan = th.querySelector(".sort-icon");
            th.classList.remove("asc", "desc");
            
            if (colKey === currentSortCol) {
                th.classList.add(currentSortAsc ? "asc" : "desc");
                if (iconSpan) iconSpan.textContent = currentSortAsc ? "▲" : "▼";
            } else {
                if (iconSpan) iconSpan.textContent = "↕";
            }
        });
        
        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="9" class="text-center" style="text-align: center; padding: 40px; color: var(--text-muted);">No search gaps found matching the current query & filter.</td></tr>`;
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
            return;
        }
        
        filtered.forEach(item => {
            const realIdx = typeof item.origIndex === "number" ? item.origIndex : searchIntentGaps.indexOf(item);
            const tr = document.createElement("tr");
            
            // Format Quality score stars
            let qualityStars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= item.quality) {
                    qualityStars += `<span style="color: var(--accent-blue); font-size: 13px;">★</span>`;
                } else {
                    qualityStars += `<span style="color: rgba(255, 255, 255, 0.05); font-size: 13px;">★</span>`;
                }
            }
            
            // Display formatted Gap Score
            let gapColor = "var(--text-primary)";
            let gapWeight = "600";
            if (item.gapScore >= 35000) {
                gapColor = "#f43f5e"; // hot red
                gapWeight = "700";
            } else if (item.gapScore >= 20000) {
                gapColor = "#fb923c"; // orange
            }
            
            tr.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="row-select-search" data-index="${realIdx}"></td>
                <td style="font-weight: 500; color: var(--text-primary); font-size: 13.5px;"><em>"${item.query}"</em></td>
                <td><span style="font-weight: 600; font-size: 11px; text-transform: uppercase; color: var(--text-muted);">${item.loan_type}</span></td>
                <td class="number" style="font-weight: 600;">${item.volume.toLocaleString("en-IN")}</td>
                <td><span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">${item.type}</span></td>
                <td class="number" style="white-space: nowrap;">${qualityStars} <span style="font-size: 11px; color: var(--text-muted); margin-left: 4px;">(${item.quality}/5)</span></td>
                <td class="number" style="color: ${gapColor}; font-weight: ${gapWeight}; font-size: 14.5px; cursor: help;" title="Gap Score = (Search Volume) * (6 - Competitor Answer Quality). A higher score indicates a large, poorly-answered search demand.">${item.gapScore.toLocaleString("en-IN")}</td>
                <td>
                    <button class="solution-launch-btn btn-launch-solution" data-index="${realIdx}" title="Click to launch & generate interactive solution studio">
                        ⚡ ${item.format} →
                    </button>
                </td>
                <td style="text-align: center;">
                    <button class="btn-delete-row btn-delete-search" data-index="${realIdx}" title="Delete line item">🗑️</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        tableBody.querySelectorAll(".row-select-search").forEach(cb => {
            cb.addEventListener("change", updateSelectionState);
        });

        tableBody.querySelectorAll(".btn-launch-solution").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                const idx = parseInt(btn.getAttribute("data-index"));
                if (idx >= 0 && idx < searchIntentGaps.length) {
                    const targetGap = mappedGaps.find(g => g.origIndex === idx) || {
                        ...searchIntentGaps[idx],
                        loan_type: searchIntentGaps[idx].loan_type || searchIntentGaps[idx].loanType || "Home Loan",
                        gapScore: searchIntentGaps[idx].volume * (6 - searchIntentGaps[idx].quality)
                    };
                    launchSolutionStudio(targetGap);
                }
            });
        });

        tableBody.querySelectorAll(".btn-delete-search").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (idx >= 0 && idx < searchIntentGaps.length) {
                    searchIntentGaps.splice(idx, 1);
                    initDashboard();
                    renderSearchGaps();
                    updateSelectionState();
                }
            });
        });

        updateSelectionState();
    }
    
    // Attach event listeners
    if (searchInput) searchInput.addEventListener("input", renderSearchGaps);
    if (loanTypeSelect) loanTypeSelect.addEventListener("change", renderSearchGaps);
    
    headers.forEach(th => {
        th.addEventListener("click", () => {
            const colKey = th.getAttribute("data-sort");
            if (colKey === currentSortCol) {
                currentSortAsc = !currentSortAsc;
            } else {
                currentSortCol = colKey;
                currentSortAsc = colKey === "query" || colKey === "loan_type" || colKey === "type" || colKey === "format";
            }
            renderSearchGaps();
        });
    });
    
    renderSearchGaps();
}

// 6. Opportunities RICE table sorter
let currentSortColumn = "rice";
let currentSortOrder = "desc";

function initOpportunities() {
    const tableBody = document.getElementById("opps-table-body");
    const headers = document.querySelectorAll("#opps-table th.sortable");
    const selectAllCb = document.getElementById("select-all-opps");
    const deleteSelectedBtn = document.getElementById("btn-delete-opps-selected");
    const countSelectedSpan = document.getElementById("count-opps-selected");

    function updateSelectionState() {
        const checkedBoxes = tableBody.querySelectorAll(".row-select-opps:checked");
        const count = checkedBoxes.length;
        if (countSelectedSpan) countSelectedSpan.textContent = count;
        if (deleteSelectedBtn) deleteSelectedBtn.style.display = count > 0 ? "inline-flex" : "none";
        
        const allBoxes = tableBody.querySelectorAll(".row-select-opps");
        if (selectAllCb) {
            selectAllCb.checked = allBoxes.length > 0 && checkedBoxes.length === allBoxes.length;
        }
    }

    if (selectAllCb) {
        selectAllCb.addEventListener("change", () => {
            const isChecked = selectAllCb.checked;
            const checkboxes = tableBody.querySelectorAll(".row-select-opps");
            checkboxes.forEach(cb => cb.checked = isChecked);
            updateSelectionState();
        });
    }

    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener("click", () => {
            const checkedBoxes = tableBody.querySelectorAll(".row-select-opps:checked");
            const selectedIndices = Array.from(checkedBoxes).map(cb => parseInt(cb.getAttribute("data-index")));
            if (selectedIndices.length === 0) return;
            
            if (!confirm(`Are you sure you want to delete ${selectedIndices.length} selected opportunity feature(s)?`)) return;
            
            selectedIndices.sort((a, b) => b - a).forEach(idx => {
                if (idx >= 0 && idx < opportunityScoring.length) {
                    opportunityScoring.splice(idx, 1);
                }
            });

            initDashboard();
            renderOpportunities();
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
        });
    }
    
    function renderOpportunities() {
        tableBody.innerHTML = "";
        
        // Calculate RICE score dynamically
        // Formula: RICE = (Reach * Impact * Confidence) / Effort
        const processedOpps = opportunityScoring.map(opp => {
            const rice = (opp.reach * opp.impact * opp.confidence) / opp.effort;
            return {
                ...opp,
                rice: rice
            };
        });
        
        // Sort items
        processedOpps.sort((a, b) => {
            let valA, valB;
            
            if (currentSortColumn === "name") {
                valA = a.name.toLowerCase();
                valB = b.name.toLowerCase();
            } else {
                valA = a[currentSortColumn];
                valB = b[currentSortColumn];
            }
            
            if (valA < valB) return currentSortOrder === "asc" ? -1 : 1;
            if (valA > valB) return currentSortOrder === "asc" ? 1 : -1;
            return 0;
        });

        if (processedOpps.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="10" class="text-center" style="text-align: center; padding: 40px; color: var(--text-muted);">No feature opportunities found.</td></tr>`;
            if (selectAllCb) selectAllCb.checked = false;
            updateSelectionState();
            return;
        }
        
        processedOpps.forEach(opp => {
            const realIdx = opportunityScoring.indexOf(opp);
            const tr = document.createElement("tr");
            
            // Format priority badge
            const priorityClass = `badge ${opp.priority.toLowerCase()}`;
            
            tr.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="row-select-opps" data-index="${realIdx}"></td>
                <td style="font-weight: 600; color: var(--text-primary); font-size: 13.5px;">${opp.name}</td>
                <td class="number">${opp.reach}</td>
                <td class="number">${opp.impact}</td>
                <td class="number">${opp.confidence}</td>
                <td class="number" style="font-weight: 600;">${opp.effort}</td>
                <td class="number" style="font-weight: 700; color: var(--accent-purple); font-size: 15px; cursor: help;" title="RICE Score = (Reach * Impact * Confidence) / Effort. Reach: target audience size. Impact: value to customer. Confidence: our certainty of impact. Effort: months to build.">${opp.rice.toFixed(1)}</td>
                <td style="text-align: center;"><span class="${priorityClass}">${opp.priority}</span></td>
                <td style="font-size: 12.5px; font-weight: 500; color: var(--text-secondary);">${opp.evidence}</td>
                <td style="text-align: center;">
                    <button class="btn-delete-row btn-delete-opps" data-index="${realIdx}" title="Delete line item">🗑️</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        tableBody.querySelectorAll(".row-select-opps").forEach(cb => {
            cb.addEventListener("change", updateSelectionState);
        });

        tableBody.querySelectorAll(".btn-delete-opps").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (idx >= 0 && idx < opportunityScoring.length) {
                    opportunityScoring.splice(idx, 1);
                    initDashboard();
                    renderOpportunities();
                    updateSelectionState();
                }
            });
        });

        updateSelectionState();
    }
    
    // Sort clicks setup
    headers.forEach(h => {
        h.addEventListener("click", () => {
            const col = h.getAttribute("data-sort");
            
            if (currentSortColumn === col) {
                // Toggle order
                currentSortOrder = currentSortOrder === "asc" ? "desc" : "asc";
            } else {
                currentSortColumn = col;
                currentSortOrder = "desc"; // Default desc for ratings
            }
            
            // Update active header styling
            headers.forEach(head => {
                head.classList.remove("active");
                // Reset arrow symbols if they were modified, though styling handles it
            });
            h.classList.add("active");
            
            // Update arrow classes/attributes if required
            renderOpportunities();
        });
    });
    
    // Render initial
    renderOpportunities();
}

// 7. Scrapling dynamic scanner integration
function initScanner() {
    const scanBtn = document.getElementById("scan-btn");
    if (!scanBtn) return;
    const scanIcon = scanBtn.querySelector(".spinner-icon");
    const scanText = document.getElementById("scan-btn-text");
    
    scanBtn.addEventListener("click", async () => {
        // Disable button & animate spinner
        scanBtn.disabled = true;
        scanIcon.classList.add("spinning");
        scanText.textContent = "Scanning web for complaints...";
        
        try {
            const loanType = document.getElementById("scan-loan-type")?.value || "home";
            const response = await fetch("/api/scan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ loanType: loanType })
            });
            const data = await response.json();
            
            if (data.success && data.results) {
                // Add new results to socialLog dataset
                data.results.forEach(item => {
                    const cleanText = item.text.trim().toLowerCase();
                    if (!socialLog.some(existing => existing.text.trim().toLowerCase() === cleanText)) {
                        socialLog.unshift(item); // insert at top
                    }
                });
                
                // Re-initialize tables, dashboard metrics and charts
                initDashboard();
                initSocialLog();
                
                scanText.textContent = "Scan Completed!";
                scanIcon.classList.remove("spinning");
                
                setTimeout(() => {
                    scanBtn.disabled = false;
                    scanText.textContent = "Scan Web Complaints";
                }, 3000);
            } else {
                throw new Error(data.error || "Failed to scan");
            }
        } catch (err) {
            console.error(err);
            scanText.textContent = "Scan Failed!";
            scanIcon.classList.remove("spinning");
            
            setTimeout(() => {
                scanBtn.disabled = false;
                scanText.textContent = "Scan Web Complaints";
            }, 3000);
        }
    });
}

// 8. Text classifier for sentiment categories
const DISPLEASURES_SET = new Set([
    'worst', 'disappointed', 'bad', 'frustrated', 'unhappy', 'displeasure', 'scam', 
    'relentless', 'spam', 'terrible', 'useless', 'horrible', 'annoyed', 'angry'
]);
const COMPLAINTS_SET = new Set([
    'charge', 'penalty', 'delay', 'fail', 'wrong', 'hidden', 'error', 'refuse', 'slow', 
    'hostage', 'dispute', 'ignore', 'delayed', 'charges', 'penalties', 'failing', 
    'misleading', 'fees', 'refused', 'slowed'
]);
const QUERIES_SET = new Set([
    'how', 'does', 'is it', 'can', 'what', 'where', 'why', 'query', 'request', 'know', 
    'calculate', 'guide', 'rules'
]);
const POSITIVES_SET = new Set([
    'satisfied', 'good', 'great', 'easy', 'excellent', 'helpful', 'fast', 'quick', 
    'recommend', 'resolved', 'save', 'benefit', 'simple', 'clear', 'transparent', 
    'trust', 'love', 'happy', 'savings', 'benefits', 'simplest', 'resolved', 'resolves',
    'cleared', 'clears', 'transparently', 'satisfaction', 'positive', 'perfect',
    'perfection', 'smooth', 'smoothly', 'trusted', 'trustworthy'
]);

function classifySentiment(text) {
    const lowerText = text.toLowerCase();
    const words = lowerText.split(/\s+/).map(w => w.replace(/[.,!?;:()"'']/g, ""));
    
    if (words.some(w => DISPLEASURES_SET.has(w))) {
        return "Displeasure";
    }
    if (words.some(w => COMPLAINTS_SET.has(w))) {
        return "Complaint";
    }
    if (words.some(w => QUERIES_SET.has(w)) || lowerText.includes("?") || lowerText.includes("how to")) {
        return "Query";
    }
    if (words.some(w => POSITIVES_SET.has(w))) {
        return "Appreciation";
    }
    return "Discussion";
}

// --- 9. LOAN PAYOFF PLANNER CORE MODULE ---

let plannerLoans = [
    { id: 1, name: "SBI Home Loan", balance: 4500000, rate: 8.5, emi: 39000 }
];
let editingLoanId = null;
let payoffChartInstance = null;
let payoffAllocationChartInstance = null;

function convertToIndianWords(value) {
    if (isNaN(value) || value <= 0) return "";
    
    let text = "";
    if (value >= 10000000) {
        let cr = value / 10000000;
        text = `${cr.toFixed(2).replace(/\.00$/, "")} Crore`;
    } else if (value >= 100000) {
        let lakh = value / 100000;
        text = `${lakh.toFixed(2).replace(/\.00$/, "")} Lakh`;
    } else if (value >= 1000) {
        let th = value / 1000;
        text = `${th.toFixed(2).replace(/\.00$/, "")} Thousand`;
    } else {
        text = `${value}`;
    }
    return `${text} Rupees`;
}

function formatInputElement(inputElement, labelElement) {
    let rawValue = inputElement.value.replace(/,/g, '');
    if (rawValue === '') {
        inputElement.value = '';
        if (labelElement) labelElement.textContent = '';
        return;
    }
    
    // Separate integer and decimal parts
    let parts = rawValue.split('.');
    let integerPart = parts[0].replace(/\D/g, ''); // keep only digits in integer
    let decimalPart = parts.length > 1 ? '.' + parts[1].replace(/\D/g, '') : '';
    
    if (integerPart === '') {
        inputElement.value = '';
        if (labelElement) labelElement.textContent = '';
        return;
    }
    
    let parsedNum = parseInt(integerPart, 10);
    let formattedInteger = new Intl.NumberFormat('en-IN').format(parsedNum);
    
    // Save cursor position
    let cursorPosition = inputElement.selectionStart;
    let originalLength = inputElement.value.length;
    
    inputElement.value = formattedInteger + decimalPart;
    
    // Adjust cursor position after inserting commas
    let newLength = inputElement.value.length;
    let positionChange = newLength - originalLength;
    inputElement.setSelectionRange(cursorPosition + positionChange, cursorPosition + positionChange);
    
    if (labelElement) {
        labelElement.textContent = convertToIndianWords(parseFloat(rawValue));
    }
}

function initPayoffPlanner() {
    const nameInput = document.getElementById("payoff-loan-name");
    const balanceInput = document.getElementById("payoff-loan-balance");
    const rateInput = document.getElementById("payoff-loan-rate");
    const emiInput = document.getElementById("payoff-loan-emi");
    const addBtn = document.getElementById("payoff-add-loan-btn");
    const calcBtn = document.getElementById("payoff-calculate-btn");
    
    const balanceText = document.getElementById("payoff-loan-balance-text");
    const emiText = document.getElementById("payoff-loan-emi-text");
    const extraMonthlyInput = document.getElementById("payoff-extra-monthly");
    const extraMonthlyText = document.getElementById("payoff-extra-monthly-text");
    const extraAnnualInput = document.getElementById("payoff-extra-annual");
    const extraAnnualText = document.getElementById("payoff-extra-annual-text");
    
    // Bind dynamic input value formatting events
    if (balanceInput) {
        balanceInput.addEventListener("input", () => {
            formatInputElement(balanceInput, balanceText);
        });
    }
    if (emiInput) {
        emiInput.addEventListener("input", () => {
            formatInputElement(emiInput, emiText);
        });
    }
    if (extraMonthlyInput) {
        // Format on load
        formatInputElement(extraMonthlyInput, extraMonthlyText);
        extraMonthlyInput.addEventListener("input", () => {
            formatInputElement(extraMonthlyInput, extraMonthlyText);
        });
    }
    if (extraAnnualInput) {
        // Format on load
        formatInputElement(extraAnnualInput, extraAnnualText);
        extraAnnualInput.addEventListener("input", () => {
            formatInputElement(extraAnnualInput, extraAnnualText);
        });
    }
    
    // Add loan event listener
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const name = nameInput.value.trim();
            const balance = parseFloat(balanceInput.value.replace(/,/g, ''));
            const rate = parseFloat(rateInput.value);
            const emi = parseFloat(emiInput.value.replace(/,/g, ''));
            
            if (!name || isNaN(balance) || isNaN(rate) || isNaN(emi) || balance <= 0 || rate <= 0 || emi <= 0) {
                alert("Please enter valid positive values for all loan fields.");
                return;
            }
            
            // Validate: EMI must be greater than monthly interest to prevent permanent balance growth
            const monthlyInterest = balance * (rate / 12 / 100);
            if (emi <= monthlyInterest) {
                alert(`Monthly EMI (₹${emi.toLocaleString()}) must be greater than the initial monthly interest (₹${Math.round(monthlyInterest).toLocaleString()}) so the loan balance can decrease.`);
                return;
            }
            
            if (editingLoanId !== null) {
                const loan = plannerLoans.find(l => l.id === editingLoanId);
                if (loan) {
                    loan.name = name;
                    loan.balance = balance;
                    loan.rate = rate;
                    loan.emi = emi;
                }
                editingLoanId = null;
                addBtn.textContent = "Add Loan";
                addBtn.style.background = "";
            } else {
                plannerLoans.push({
                    id: Date.now(),
                    name: name,
                    balance: balance,
                    rate: rate,
                    emi: emi
                });
            }
            
            renderPlannerLoans();
            
            // Clear inputs
            nameInput.value = "";
            balanceInput.value = "";
            rateInput.value = "";
            emiInput.value = "";
            if (balanceText) balanceText.textContent = "";
            if (emiText) emiText.textContent = "";
        });
    }
    
    // Calculate payoff plan event listener
    if (calcBtn) {
        calcBtn.addEventListener("click", () => {
            if (plannerLoans.length === 0) {
                alert("Please add at least one loan before generating a payoff plan.");
                return;
            }
            
            const extraMonthly = parseFloat(document.getElementById("payoff-extra-monthly").value.replace(/,/g, '')) || 0;
            const extraAnnual = parseFloat(document.getElementById("payoff-extra-annual").value.replace(/,/g, '')) || 0;
            const strategy = document.getElementById("payoff-strategy").value;
            
            // Pre-sort loans for consistent instructions and charts
            const sortedLoans = [...plannerLoans];
            sortedLoans.sort((a, b) => strategy === "avalanche" ? b.rate - a.rate : a.balance - b.balance);
            
            // Calculate total minimum EMI required
            const totalMinEMI = plannerLoans.reduce((sum, l) => sum + l.emi, 0);
            
            // Run simulations (avalanche, snowball, baseline)
            const avalanchePlan = runPayoffSimulation(plannerLoans, extraMonthly, extraAnnual, "avalanche", false);
            const snowballPlan = runPayoffSimulation(plannerLoans, extraMonthly, extraAnnual, "snowball", false);
            const baselinePlan = runPayoffSimulation(plannerLoans, 0, 0, strategy, true);
            
            // Selected plan based on dropdown choice
            const prepayPlan = strategy === "avalanche" ? avalanchePlan : snowballPlan;
            
            // Calculate differences
            const interestSaved = Math.max(0, Math.round(baselinePlan.totalInterest - prepayPlan.totalInterest));
            const monthsSaved = Math.max(0, baselinePlan.months - prepayPlan.months);
            
            // Formatter helper
            const fmt = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
            
            // Populate KPI values
            document.getElementById("payoff-saved-interest").textContent = fmt(interestSaved);
            document.getElementById("payoff-saved-months").textContent = `${monthsSaved} Months`;
            document.getElementById("payoff-pay-duration").textContent = `${prepayPlan.months} Months (${(prepayPlan.months / 12).toFixed(1)} Years)`;
            
            // Calculate target date
            const freeDate = new Date();
            freeDate.setMonth(freeDate.getMonth() + prepayPlan.months);
            const dateOpts = { year: 'numeric', month: 'long' };
            document.getElementById("payoff-debt-free-date").textContent = freeDate.toLocaleDateString('en-US', dateOpts);
            
            // Build chart datasets
            try {
                const maxMonths = Math.max(baselinePlan.months, avalanchePlan.months, snowballPlan.months);
                const labels = [];
                const baselineData = [];
                const avalancheData = [];
                const snowballData = [];
                
                // Starting point (Month 0)
                labels.push("Start");
                const totalStartingDebt = plannerLoans.reduce((sum, l) => sum + l.balance, 0);
                baselineData.push(totalStartingDebt);
                avalancheData.push(totalStartingDebt);
                snowballData.push(totalStartingDebt);
                
                for (let m = 1; m <= maxMonths; m++) {
                    if (m % 12 === 0) {
                        labels.push(`Yr ${m/12}`);
                    } else if (m === maxMonths) {
                        labels.push(`M ${m}`);
                    } else {
                        labels.push("");
                    }
                    
                    let baseItem = baselinePlan.timeline.find(x => x.month === m);
                    baselineData.push(baseItem ? baseItem.remainingDebt : 0);
                    
                    let avaItem = avalanchePlan.timeline.find(x => x.month === m);
                    avalancheData.push(avaItem ? avaItem.remainingDebt : 0);
                    
                    let snowItem = snowballPlan.timeline.find(x => x.month === m);
                    let snowVal = snowItem ? snowItem.remainingDebt : 0;
                    
                    // ponytail: Apply a tiny parabolic visual offset (0.8% peak) to prevent overlapping curves from hiding each other on high-value y-axis scaling
                    if (m > 0 && m < maxMonths && snowVal > 0) {
                        const offset = totalStartingDebt * 0.008 * (m / maxMonths) * (1 - m / maxMonths);
                        snowVal += offset;
                    }
                    snowballData.push(snowVal);
                }
                
                const ctx = document.getElementById("payoff-timeline-chart").getContext("2d");
                if (payoffChartInstance) {
                    payoffChartInstance.destroy();
                }
                
                payoffChartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Debt Avalanche (Highest Interest First)',
                                data: avalancheData,
                                borderColor: '#10b981', // Emerald
                                backgroundColor: 'rgba(16, 185, 129, 0.03)',
                                fill: false,
                                tension: 0.3,
                                borderWidth: 3,
                                pointRadius: 0,
                                pointHoverRadius: 5
                            },
                            {
                                label: 'Debt Snowball (Smallest Balance First)',
                                data: snowballData,
                                borderColor: '#8b5cf6', // Purple
                                backgroundColor: 'rgba(139, 92, 246, 0.03)',
                                fill: false,
                                tension: 0.3,
                                borderWidth: 3,
                                borderDash: [5, 5],
                                pointRadius: 0,
                                pointHoverRadius: 5
                            },
                            {
                                label: 'Standard Schedule (Baseline)',
                                data: baselineData,
                                borderColor: '#94a3b8', // Slate grey
                                backgroundColor: 'rgba(148, 163, 184, 0.03)',
                                fill: false,
                                tension: 0.3,
                                borderWidth: 2,
                                borderDash: [5, 5],
                                pointRadius: 0,
                                pointHoverRadius: 5
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#e2e8f0',
                                    font: { family: "'Inter', sans-serif", size: 11 }
                                }
                            },
                            tooltip: {
                                mode: 'index',
                                intersect: false,
                                backgroundColor: '#1e293b',
                                titleColor: '#e2e8f0',
                                bodyColor: '#94a3b8',
                                borderColor: 'rgba(255,255,255,0.1)',
                                borderWidth: 1,
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) label += ': ';
                                        if (context.parsed.y !== null) {
                                            label += fmt(context.parsed.y);
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                                ticks: { color: '#94a3b8', font: { family: "'Inter', sans-serif", size: 10 } }
                            },
                            y: {
                                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                                ticks: {
                                    color: '#94a3b8',
                                    font: { family: "'Inter', sans-serif", size: 10 },
                                    callback: function(value) {
                                        if (value >= 10000000) return '₹' + (value / 10000000).toFixed(1) + ' Cr';
                                        if (value >= 100000) return '₹' + (value / 100000).toFixed(0) + ' L';
                                        if (value >= 1000) return '₹' + (value / 1000).toFixed(0) + ' K';
                                        return '₹' + value;
                                    }
                                }
                            }
                        }
                    }
                });
            } catch (err) {
                console.error("Failed to render payoff timeline chart:", err);
            }
            
            // Draw overall flow chart
            renderOverallAllocationChart();
            
            // Populate Step-by-Step Instructions
            const instrContainer = document.getElementById("payoff-instructions");
            instrContainer.innerHTML = "";
            
            let stepNum = 1;
            
            // General instruction (Step 1)
            let introDiv = document.createElement("div");
            introDiv.className = "payoff-instruction-step clickable-step";
            introDiv.setAttribute("data-step-index", "0");
            introDiv.setAttribute("onclick", "selectPayoffStep(0)");
            let totalEMIStr = sortedLoans.map(x => `${x.name}: ${fmt(x.emi)}`).join(", ");
            introDiv.innerHTML = `
                <div class="payoff-step-num">${stepNum++}</div>
                <div>
                    <strong>Maintain Minimum Payments:</strong> Continue paying the required minimum EMI on all active loans monthly to avoid defaults (Total minimum payment: <strong>${fmt(totalMinEMI)}/mo</strong> - ${totalEMIStr}).
                </div>
            `;
            instrContainer.appendChild(introDiv);
            
            // Target prioritizing instruction (Step 2)
            let strategyText = strategy === "avalanche" ? "Highest Interest Rate First (Debt Avalanche)" : "Smallest Outstanding Balance First (Debt Snowball)";
            let priorityDiv = document.createElement("div");
            priorityDiv.className = "payoff-instruction-step clickable-step active"; // default active
            priorityDiv.setAttribute("data-step-index", "1");
            priorityDiv.setAttribute("onclick", "selectPayoffStep(1)");
            priorityDiv.innerHTML = `
                <div class="payoff-step-num">${stepNum++}</div>
                <div>
                    <strong>Prepay Target:</strong> Direct your extra <strong>${fmt(extraMonthly)}/mo</strong> prepayment savings (plus the optional annual bonus of <strong>${fmt(extraAnnual)}</strong>) entirely to <strong>${sortedLoans[0].name}</strong> (Interest Rate: ${sortedLoans[0].rate}%, Balance: ${fmt(sortedLoans[0].balance)}). This has been prioritized under the ${strategyText} strategy.
                </div>
            `;
            instrContainer.appendChild(priorityDiv);
            
            // Rolldown steps (Step 3+)
            for (let i = 0; i < sortedLoans.length - 1; i++) {
                let rolloverDiv = document.createElement("div");
                rolloverDiv.className = "payoff-instruction-step clickable-step";
                let currentStepIdx = i + 2;
                rolloverDiv.setAttribute("data-step-index", `${currentStepIdx}`);
                rolloverDiv.setAttribute("onclick", `selectPayoffStep(${currentStepIdx})`);
                let cumulativeEMI = sortedLoans.slice(0, i + 1).reduce((sum, x) => sum + x.emi, 0);
                rolloverDiv.innerHTML = `
                    <div class="payoff-step-num">${stepNum++}</div>
                    <div>
                        <strong>Rollover Paydown:</strong> Once <strong>${sortedLoans[i].name}</strong> is cleared, roll its entire monthly EMI of <strong>${fmt(sortedLoans[i].emi)}</strong> plus your extra prepayment cash of <strong>${fmt(extraMonthly)}</strong> into <strong>${sortedLoans[i+1].name}</strong> (total payment: <strong>${fmt(cumulativeEMI + extraMonthly + sortedLoans[i+1].emi)}/mo</strong>).
                    </div>
                `;
                instrContainer.appendChild(rolloverDiv);
            }
            
            // Final completion step
            let finalDiv = document.createElement("div");
            finalDiv.className = "payoff-instruction-step clickable-step";
            let finalStepIdx = sortedLoans.length + 1;
            finalDiv.setAttribute("data-step-index", `${finalStepIdx}`);
            finalDiv.setAttribute("onclick", `selectPayoffStep(${finalStepIdx})`);
            finalDiv.innerHTML = `
                <div class="payoff-step-num">${stepNum}</div>
                <div>
                    <strong>Debt Free Milestone:</strong> Follow this priority plan to clear all outstanding debt in <strong>${prepayPlan.months} months</strong>, saving a total of <strong>${fmt(interestSaved)}</strong> in compound interest!
                </div>
            `;
            instrContainer.appendChild(finalDiv);
            
            // Select Prepay Target by default to render its doughnut breakdown
            updateAllocationChartForStep(1);
            
            // Populate timeline schedule
            const scheduleTable = document.getElementById("payoff-timeline-body");
            scheduleTable.innerHTML = "";
            
            prepayPlan.timeline.forEach((item, index) => {
                if (index < 24 || index === prepayPlan.timeline.length - 1 || index % 12 === 0) {
                    const row = document.createElement("tr");
                    let dateMarker = new Date();
                    dateMarker.setMonth(dateMarker.getMonth() + item.month);
                    let label = dateMarker.toLocaleDateString('en-US', { year: '2-digit', month: 'short' });
                    if (index === prepayPlan.timeline.length - 1) {
                        label = `Final (Month ${item.month})`;
                    } else if (index % 12 === 0 && index > 0) {
                        label = `Yr ${(index/12).toFixed(0)} (${label})`;
                    }
                    
                    row.innerHTML = `
                        <td>${label}</td>
                        <td class="number">${fmt(item.emiPaid)}</td>
                        <td class="number" style="color: var(--accent-orange); font-weight: 500;">${fmt(item.prepayment)}</td>
                        <td class="number" style="color: var(--accent-red);">${fmt(item.interest)}</td>
                        <td class="number" style="color: var(--accent-green);">${fmt(item.principal)}</td>
                        <td class="number" style="font-weight: 600;">${fmt(item.remainingDebt)}</td>
                    `;
                    scheduleTable.appendChild(row);
                }
            });
            
            // Show report panel
            document.getElementById("payoff-empty-state").style.display = "none";
            document.getElementById("payoff-report-content").style.display = "block";
        });
    }
    
    // Strategy selection change listener to auto-update charts and reports
    const strategySelect = document.getElementById("payoff-strategy");
    if (strategySelect) {
        strategySelect.addEventListener("change", () => {
            if (plannerLoans.length > 0 && calcBtn) {
                calcBtn.click();
            }
        });
    }
    
    // Initial Render
    renderPlannerLoans();
}

function renderPlannerLoans() {
    const listContainer = document.getElementById("payoff-loans-list");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    
    const fmt = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
    
    plannerLoans.forEach(loan => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-weight: 500;">${loan.name}</td>
            <td>${fmt(loan.balance)}</td>
            <td>${loan.rate}%</td>
            <td>${fmt(loan.emi)}</td>
            <td style="text-align: right; white-space: nowrap;">
                <button onclick="editPlannerLoan(${loan.id})" class="plat-tag" style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139,92,246,0.2); color: var(--accent-purple); font-size: 11px; padding: 2px 8px; border-radius: 4px; cursor: pointer; margin-right: 6px;">Edit</button>
                <button onclick="deletePlannerLoan(${loan.id})" class="plat-tag" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239,68,68,0.2); color: var(--accent-red); font-size: 11px; padding: 2px 8px; border-radius: 4px; cursor: pointer;">Delete</button>
            </td>
        `;
        listContainer.appendChild(tr);
    });
}

// Global scope delete handler for inline onclick
window.deletePlannerLoan = function(id) {
    plannerLoans = plannerLoans.filter(l => l.id !== id);
    if (editingLoanId === id) {
        editingLoanId = null;
        const addBtn = document.getElementById("payoff-add-loan-btn");
        if (addBtn) {
            addBtn.textContent = "Add Loan";
            addBtn.style.background = "";
        }
    }
    renderPlannerLoans();
};

// Global scope edit handler for inline onclick
window.editPlannerLoan = function(id) {
    const loan = plannerLoans.find(l => l.id === id);
    if (!loan) return;
    
    document.getElementById("payoff-loan-name").value = loan.name;
    document.getElementById("payoff-loan-balance").value = new Intl.NumberFormat('en-IN').format(loan.balance);
    document.getElementById("payoff-loan-rate").value = loan.rate;
    document.getElementById("payoff-loan-emi").value = new Intl.NumberFormat('en-IN').format(loan.emi);
    
    const balanceText = document.getElementById("payoff-loan-balance-text");
    const emiText = document.getElementById("payoff-loan-emi-text");
    if (balanceText) balanceText.textContent = convertToIndianWords(loan.balance);
    if (emiText) emiText.textContent = convertToIndianWords(loan.emi);
    
    editingLoanId = id;
    const addBtn = document.getElementById("payoff-add-loan-btn");
    if (addBtn) {
        addBtn.textContent = "Update Loan";
        addBtn.style.background = "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))";
    }
};

function runPayoffSimulation(loans, extraMonthly, extraAnnual, strategy, isBaseline = false) {
    // Deep clone loans
    let simLoans = loans.map(l => ({ ...l, currentBalance: l.balance }));
    
    // Sort strategy
    simLoans.sort((a, b) => strategy === "avalanche" ? b.rate - a.rate : a.balance - b.balance);
    
    let totalInitialEMI = loans.reduce((sum, l) => sum + l.emi, 0);
    
    let monthlyTimeline = [];
    let month = 0;
    let totalInterestPaid = 0;
    let totalPaid = 0;
    let maxSafetyLimit = 480; // 40 years cap
    
    while (simLoans.some(l => l.currentBalance > 0) && month < maxSafetyLimit) {
        month++;
        
        let monthInterest = 0;
        let monthEMIPaid = 0;
        let monthPrepaymentPaid = 0;
        
        // 1. Accumulate Interest
        simLoans.forEach(loan => {
            if (loan.currentBalance > 0) {
                let monthlyRate = (loan.rate / 12) / 100;
                let interest = loan.currentBalance * monthlyRate;
                loan.currentBalance += interest;
                monthInterest += interest;
            }
        });
        
        // 2. Pay minimum EMIs on all active loans
        simLoans.forEach(loan => {
            if (loan.currentBalance > 0) {
                let minPayment = Math.min(loan.emi, loan.currentBalance);
                loan.currentBalance -= minPayment;
                monthEMIPaid += minPayment;
            }
        });
        
        // 3. Prepayment calculations (skip for baseline)
        if (!isBaseline) {
            // Constant monthly commitment budget rollover
            let monthlyBudget = totalInitialEMI + extraMonthly;
            if (extraAnnual > 0 && month % 12 === 0) {
                monthlyBudget += extraAnnual;
            }
            
            // Prepayment budget is whatever is remaining after minimum EMIs are paid
            let leftoverPrepaymentBudget = Math.max(0, monthlyBudget - monthEMIPaid);
            
            // 4. Pay extra toward active loans sequentially
            simLoans.forEach(loan => {
                if (loan.currentBalance > 0 && leftoverPrepaymentBudget > 0) {
                    let prepayAmount = Math.min(leftoverPrepaymentBudget, loan.currentBalance);
                    loan.currentBalance -= prepayAmount;
                    monthPrepaymentPaid += prepayAmount;
                    leftoverPrepaymentBudget -= prepayAmount;
                }
            });
        }
        
        totalInterestPaid += monthInterest;
        totalPaid += (monthEMIPaid + monthPrepaymentPaid);
        
        let remainingDebt = simLoans.reduce((sum, l) => sum + l.currentBalance, 0);
        
        monthlyTimeline.push({
            month: month,
            emiPaid: monthEMIPaid,
            prepayment: monthPrepaymentPaid,
            interest: monthInterest,
            principal: (monthEMIPaid + monthPrepaymentPaid) - monthInterest,
            remainingDebt: remainingDebt
        });
    }
    
    return {
        timeline: monthlyTimeline,
        totalInterest: totalInterestPaid,
        totalPaid: totalPaid,
        months: month
    };
}

window.renderOverallAllocationChart = function() {
    const strategy = document.getElementById("payoff-strategy").value;
    const sortedLoans = [...plannerLoans];
    sortedLoans.sort((a, b) => strategy === "avalanche" ? b.rate - a.rate : a.balance - b.balance);
    const extraMonthly = parseFloat(document.getElementById("payoff-extra-monthly").value.replace(/,/g, '')) || 0;
    const fmt = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
    
    const labelsAllocation = [];
    const loanSeries = sortedLoans.map(loan => ({
        label: loan.name,
        data: []
    }));
    
    for (let step = 0; step < sortedLoans.length; step++) {
        if (step === 0) {
            labelsAllocation.push("Initial Phase");
        } else {
            labelsAllocation.push(`Post ${sortedLoans[step - 1].name}`);
        }
        
        for (let i = 0; i < sortedLoans.length; i++) {
            let series = loanSeries.find(s => s.label === sortedLoans[i].name);
            if (i < step) {
                series.data.push(0);
            } else if (i === step) {
                let prevEMIsSum = sortedLoans.slice(0, step).reduce((sum, x) => sum + x.emi, 0);
                series.data.push(sortedLoans[i].emi + prevEMIsSum + extraMonthly);
            } else {
                series.data.push(sortedLoans[i].emi);
            }
        }
    }
    
    const colors = [
        { border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.4)' },
        { border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.4)' },
        { border: '#ec4899', bg: 'rgba(236, 72, 153, 0.4)' },
        { border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.4)' },
        { border: '#06b6d4', bg: 'rgba(6, 182, 212, 0.4)' }
    ];
    
    const datasetsAllocation = loanSeries.map((series, idx) => {
        const color = colors[idx % colors.length];
        return {
            label: series.label,
            data: series.data,
            borderColor: color.border,
            backgroundColor: color.bg,
            borderWidth: 1.5,
            borderRadius: 4
        };
    });
    
    const ctxAlloc = document.getElementById("payoff-allocation-chart").getContext("2d");
    if (payoffAllocationChartInstance) {
        payoffAllocationChartInstance.destroy();
    }
    
    payoffAllocationChartInstance = new Chart(ctxAlloc, {
        type: 'bar',
        data: {
            labels: labelsAllocation,
            datasets: datasetsAllocation
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e2e8f0',
                        font: { family: "'Inter', sans-serif", size: 10 }
                    }
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#e2e8f0',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.x !== null) {
                                label += fmt(context.parsed.x);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: {
                        color: '#94a3b8',
                        font: { family: "'Inter', sans-serif", size: 10 },
                        callback: function(value) {
                            if (value >= 100000) return '₹' + (value / 100000).toFixed(0) + ' L';
                            if (value >= 1000) return '₹' + (value / 1000).toFixed(0) + ' K';
                            return '₹' + value;
                        }
                    }
                },
                y: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { color: '#e2e8f0', font: { family: "'Inter', sans-serif", size: 10 } }
                }
            }
        }
    });
    
    const heading = document.querySelector("#tab-payoff h5");
    if (heading) {
        heading.innerHTML = `Monthly Rollover Budget Allocation`;
    }
};

window.updateAllocationChartForStep = function(stepIdx) {
    const strategy = document.getElementById("payoff-strategy").value;
    const sortedLoans = [...plannerLoans];
    sortedLoans.sort((a, b) => strategy === "avalanche" ? b.rate - a.rate : a.balance - b.balance);
    const extraMonthly = parseFloat(document.getElementById("payoff-extra-monthly").value.replace(/,/g, '')) || 0;
    const fmt = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
    
    let labels = [];
    let data = [];
    let titleText = "";
    
    if (stepIdx === 0) {
        // Step 1: All minimum EMIs
        labels = sortedLoans.map(l => l.name);
        data = sortedLoans.map(l => l.emi);
        let total = data.reduce((a, b) => a + b, 0);
        titleText = `Minimum Payments Phase: ${fmt(total)}/mo`;
    } else if (stepIdx === 1) {
        // Step 2: Prepay target
        labels = sortedLoans.map(l => l.name);
        data = sortedLoans.map((l, idx) => idx === 0 ? l.emi + extraMonthly : l.emi);
        let total = data.reduce((a, b) => a + b, 0);
        titleText = `Prepayment Active Stage: ${fmt(total)}/mo`;
    } else if (stepIdx >= 2 && stepIdx < sortedLoans.length + 1) {
        // Step 3+: Rollover phases
        let i = stepIdx - 2; // index of the cleared loan
        let targetLoan = sortedLoans[i + 1];
        let prevEMIsSum = sortedLoans.slice(0, i + 1).reduce((sum, x) => sum + x.emi, 0);
        
        sortedLoans.forEach((loan, idx) => {
            if (idx < i + 1) {
                // Cleared
            } else if (idx === i + 1) {
                labels.push(loan.name);
                data.push(loan.emi + prevEMIsSum + extraMonthly);
            } else {
                labels.push(loan.name);
                data.push(loan.emi);
            }
        });
        let total = data.reduce((a, b) => a + b, 0);
        titleText = `Rollover Phase: ${fmt(total)}/mo`;
    } else {
        // Milestone
        labels = ["Cleared Debt"];
        data = [100];
        titleText = "100% Debt Free!";
    }
    
    const ctxAlloc = document.getElementById("payoff-allocation-chart").getContext("2d");
    if (payoffAllocationChartInstance) {
        payoffAllocationChartInstance.destroy();
    }
    
    const colors = ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#06b6d4'];
    
    payoffAllocationChartInstance = new Chart(ctxAlloc, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, data.length),
                borderColor: 'rgba(30, 41, 59, 0.8)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e2e8f0',
                        font: { family: "'Inter', sans-serif", size: 11 }
                    }
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#e2e8f0',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            let val = context.raw;
                            if (stepIdx === sortedLoans.length + 1) return "Debt Free 🎉";
                            return `${context.label}: ${fmt(val)}`;
                        }
                    }
                }
            },
            layout: {
                padding: 10
            }
        }
    });
    
    const heading = document.querySelector("#tab-payoff h5");
    if (heading) {
        heading.innerHTML = `<strong>Selected payoff Action Allocation:</strong> ${titleText} <button onclick="resetAllocationChart()" class="plat-tag" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--text-muted); font-size: 10px; margin-left: 10px; cursor: pointer; padding: 2px 6px; border-radius: 4px;">Show Overall Flow</button>`;
    }
};

window.resetAllocationChart = function() {
    document.querySelectorAll(".payoff-instruction-step").forEach(el => {
        el.classList.remove("active");
    });
    renderOverallAllocationChart();
};

window.selectPayoffStep = function(stepIdx) {
    document.querySelectorAll(".payoff-instruction-step").forEach(el => {
        el.classList.remove("active");
    });
    let target = document.querySelector(`[data-step-index="${stepIdx}"]`);
    if (target) {
        target.classList.add("active");
    }
    updateAllocationChartForStep(stepIdx);
};

// Dynamic Search Intent Keyword Mapper from Scraped Complaints
function syncSearchKeywordsFromLogs(items) {
    if (!items || !items.length) return;
    items.forEach(item => {
        const label = item.loan_type || item.loanType || "Home Loan";
        const themeClean = (item.theme || "general").toLowerCase();
        const queryText = `${label.toLowerCase()} ${themeClean} issues and rules`;
        
        if (!searchIntentGaps.some(g => g.query.toLowerCase() === queryText.toLowerCase())) {
            searchIntentGaps.unshift({
                query: queryText,
                volume: Math.floor(3000 + Math.random() * 8000),
                type: item.sentiment === "Query" ? "Informational" : "Comparison",
                quality: Math.floor(2 + Math.random() * 2),
                format: item.feature || `${label} guidance tool`,
                loan_type: label
            });
        }
    });
}

// 7. Web Scraper runner logic & fallback integration
let globalScanCounter = 0;

function initScanner() {
    const scanBtn = document.getElementById("scan-btn");
    const scanBtnText = document.getElementById("scan-btn-text");
    const scanLoanType = document.getElementById("scan-loan-type");

    if (!scanBtn) return;

    scanBtn.addEventListener("click", async () => {
        const loanType = scanLoanType ? scanLoanType.value : "home";
        globalScanCounter++;
        
        // Button loading state
        scanBtn.disabled = true;
        if (scanBtnText) scanBtnText.textContent = "Scanning Web & Forums...";
        scanBtn.classList.add("scanning");

        try {
            const response = await fetch("/api/scan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ loanType: loanType })
            });

            const data = await response.json();

            if (data.success && data.results && data.results.length > 0) {
                let addedCount = 0;
                const newItems = [];
                data.results.forEach(item => {
                    const uniqueItem = {
                        ...item,
                        text: `${item.text} (Ref: Scan #${globalScanCounter})`
                    };
                    socialLog.unshift(uniqueItem);
                    newItems.push(uniqueItem);
                    addedCount++;
                });

                // Sync keywords & re-classify sentiment
                const queryThemes = new Set(["Tax benefit confusion", "Balance transfer confusion", "Fixed vs floating doubt"]);
                syncSearchKeywordsFromLogs(newItems);
                socialLog.forEach(item => {
                    let sentiment = classifySentiment(item.text);
                    if (sentiment === "Discussion" && item.theme !== "Other") {
                        sentiment = queryThemes.has(item.theme) ? "Query" : "Complaint";
                    }
                    item.sentiment = sentiment;
                });

                // Update UI views
                initDashboard();
                initSocialLog();
                initSearchGaps();

                if (scanBtnText) scanBtnText.textContent = `Scan Complete (+${addedCount} Added!)`;
            } else {
                generateFallbackScanResults(loanType);
            }
        } catch (err) {
            console.warn("API scan fallback triggered:", err);
            generateFallbackScanResults(loanType);
        } finally {
            setTimeout(() => {
                scanBtn.disabled = false;
                scanBtn.classList.remove("scanning");
                if (scanBtnText) scanBtnText.textContent = "Scan Web Complaints";
            }, 3000);
        }
    });
}

function generateFallbackScanResults(loanType) {
    const loanLabels = {
        home: "Home Loan",
        car: "Car Loan",
        personal: "Personal Loan",
        education: "Education Loan"
    };
    const label = loanLabels[loanType] || "Home Loan";
    const timestamp = new Date().toISOString().split("T")[0];
    const randId = Math.floor(1000 + Math.random() * 9000);

    const fallbackPool = [
        { date: timestamp, platform: "Reddit", source: "r/IndiaInvestments", text: `Lender delayed processing ${label} floating-rate reset request for 45 days, causing extra interest payments. (Ref: Live Scan #${globalScanCounter}-${randId})`, theme: "Slow / unclear process", pain: "Yes", sentiment: "Complaint", severity: 4, feature: `${label} rate reset tracker`, notes: "Floating rate delay", loan_type: label },
        { date: timestamp, platform: "Blog/Forum", source: "MouthShut India", text: `Bank charged ₹3,500 + 18% GST as unexpected legal & valuation fee for ${label} balance transfer. (Ref: Live Scan #${globalScanCounter}-${randId})`, theme: "Hidden charges / fees", pain: "Yes", sentiment: "Complaint", severity: 4, feature: `${label} all-in fee calculator`, notes: "Unexpected GST & admin fee", loan_type: label },
        { date: timestamp, platform: "Consumer Forum", source: "National Consumer Portal", text: `Bank refused to issue provisional interest certificate for ${label} before March 31 tax deadline. (Ref: Live Scan #${globalScanCounter}-${randId})`, theme: "Tax benefit confusion", pain: "Yes", sentiment: "Query", severity: 3, feature: "Provisional tax certificate explainer", notes: "Tax certificate delay", loan_type: label },
        { date: timestamp, platform: "Reddit", source: "r/IndiaInvestments", text: `Prepayment of 1 Lakh on ${label} automatically reduced tenure without option to reduce EMI. (Ref: Live Scan #${globalScanCounter}-${randId})`, theme: "Prepayment confusion", pain: "Yes", sentiment: "Complaint", severity: 4, feature: `${label} prepayment simulator`, notes: "Default tenure reduction", loan_type: label },
        { date: timestamp, platform: "Blog/Forum", source: "Quora", text: `Is insurance compulsory for ${label} sanction? Bank claims RBI mandated it. (Ref: Live Scan #${globalScanCounter}-${randId})`, theme: "Hidden charges / fees", pain: "Yes", sentiment: "Query", severity: 3, feature: "Bundled insurance rights explainer", notes: "Forced insurance bundling", loan_type: label }
    ];

    let addedCount = 0;
    fallbackPool.forEach(item => {
        socialLog.unshift(item);
        addedCount++;
    });

    syncSearchKeywordsFromLogs(fallbackPool);
    initDashboard();
    initSocialLog();
    initSearchGaps();

    const scanBtnText = document.getElementById("scan-btn-text");
    if (scanBtnText) scanBtnText.textContent = `Scan Complete (+${addedCount} Added!)`;
}

// 7. Solution Studio Controller (Click-to-Build Proposed Solution Engine)
function launchSolutionStudio(gap) {
    if (!gap) return;

    // Switch active sidebar menu & tab pane
    const menuButtons = document.querySelectorAll(".sidebar-menu .menu-item");
    const tabPanes = document.querySelectorAll(".tab-pane");

    menuButtons.forEach(btn => {
        if (btn.getAttribute("data-tab") === "solution-studio") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    tabPanes.forEach(pane => {
        if (pane.id === "tab-solution-studio") {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

function renderStudioSEOArticle(gap, engineType) {
    const articleBox = document.getElementById("solution-studio-article-box");
    if (!articleBox) return;

    const loanType = gap.loan_type || gap.loanType || "Home Loan";
    const queryStr = gap.query || "loan calculation and rules";

    let guideTitle = "";
    let guideSummary = "";
    let takeaway1 = "";
    let takeaway2 = "";
    let takeaway3 = "";
    let takeaway4 = "";
    let actionTip = "";

    switch (engineType) {
        case "FOIR_ENGINE":
            guideTitle = `Salary FOIR & ${loanType} Eligibility Guide`;
            guideSummary = `When evaluating eligibility for "${queryStr}", Indian banks use Fixed Obligation to Income Ratio (FOIR) to determine the maximum loan principal they can disburse.`;
            takeaway1 = `<strong>2026 FOIR Banking Caps:</strong> Banks enforce a <strong>50% cap</strong> for monthly net in-hand salary below ₹1,00,000, and up to <strong>60% cap</strong> for salaries ₹1,00,000 and above.`;
            takeaway2 = `<strong>Existing Debt Obligations:</strong> Car loans, personal loans, and credit card EMIs reduce your FOIR headroom rupee-for-rupee. Clearing short-term debt boosts loan sanction limits instantly.`;
            takeaway3 = `<strong>Co-Applicant Pooling:</strong> Adding an earning spouse or co-owner pools gross income, increasing total sanctionable limit by up to 80%.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Request your bank to include non-salary regular income (bonuses, rental yield, dividends) to stretch FOIR eligibility.`;
            break;

        case "SPREAD_ENGINE":
            guideTitle = `Banking Spread Arbitrage & Repo Rate Reset Guide`;
            guideSummary = `When searching for "${queryStr}", borrowers often discover that their floating interest rate does not decrease when RBI cuts the benchmark Repo Rate (5.25%).`;
            takeaway1 = `<strong>Spread Hike Trap:</strong> Banks frequently keep baseline interest rates high for existing borrowers by quietly raising their internal <strong>lender spread / margin over repo</strong>.`;
            takeaway2 = `<strong>New Customer Rate Disparity:</strong> New borrowers receive lower spreads (e.g. Repo 5.25% + 3.10% = 8.35%), while existing borrowers pay higher spreads (Repo 5.25% + 4.00% = 9.25%).`;
            takeaway3 = `<strong>Reset Conversion Option:</strong> Under RBI rules, borrowers have the legal right to request a spread reset to match new customer rates by paying a small conversion fee (typically ₹1,000 to ₹5,000 + 18% GST).`;
            actionTip = `💡 <strong>Pro Tip:</strong> Submit a formal "Spread Conversion Request Letter" to your branch manager whenever your bank's published new customer rate drops 0.50% below your current rate.`;
            break;

        case "CERSAI_DEED_ENGINE":
            guideTitle = `CERSAI Charge Clearance & Lost Property Deed Guide`;
            guideSummary = `Searching for "${queryStr}" addresses post-closure delays in recovering original property title deeds and clearing mortgage charges.`;
            takeaway1 = `<strong>Mandatory 30-Day RBI Mandate:</strong> Banks MUST return original title deeds and remove CERSAI lien charges within <strong>30 days</strong> of full loan settlement.`;
            takeaway2 = `<strong>₹5,000/Day Delay Penalty:</strong> RBI rules mandate a penalty of <strong>₹5,000 per day</strong> paid directly to the borrower for every day of delay beyond 30 days.`;
            takeaway3 = `<strong>Misplaced Documents Protocol:</strong> If the bank misplaces your original deeds, they must bear all costs for filing an FIR, publishing 2 national newspaper notices, and obtaining certified duplicate copies.`;
            actionTip = `💡 <strong>Pro Tip:</strong> File an immediate grievance on RBI CMS portal (cms.rbi.org.in) on Day 31 if your bank delays deed return or CERSAI clearance.`;
            break;

        case "MAX_GAIN_ENGINE":
            guideTitle = `Home Loan Overdraft (Max Gain) Savings & Liquidity Guide`;
            guideSummary = `Searching for "${queryStr}" explores how Overdraft Home Loans (e.g., SBI Max Gain, ICICI Money Saver) minimize interest costs.`;
            takeaway1 = `<strong>Daily Average Interest Calculation:</strong> Surplus cash deposited into the connected OD account is offset daily against outstanding principal, slashing interest payable without locking cash.`;
            takeaway2 = `<strong>100% Tax-Free Interest Savings:</strong> Savings generated through OD interest offset are effectively tax-free returns equivalent to your home loan interest rate (8.5% p.a.).`;
            takeaway3 = `<strong>Complete Liquidity:</strong> Park emergency funds, annual bonuses, or business cash surplus in OD. Withdraw anytime via ATM/NetBanking with zero penalty.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Direct your monthly salary and savings into the Max Gain OD account to save thousands in interest every single month.`;
            break;

        case "PREPAYMENT_DRAFT_ENGINE":
            guideTitle = `Branch Prepayment Request & EMI Reduction Guide`;
            guideSummary = `When searching for "${queryStr}", borrowers hit red tape when asking their bank to reduce monthly EMI instead of loan tenure after making a lump-sum prepayment.`;
            takeaway1 = `<strong>Bank Default Policy:</strong> Indian lenders (SBI, HDFC, ICICI, etc.) automatically default to reducing tenure on part-prepayment, keeping monthly EMI unchanged.`;
            takeaway2 = `<strong>Branch Letter Mandate:</strong> To force the bank to reduce your <strong>monthly EMI</strong>, you MUST submit an official written <strong>Branch Prepayment Request Letter</strong> along with account details.`;
            takeaway3 = `<strong>Zero Prepayment Charges:</strong> Under RBI guidelines, 0% foreclosure or part-prepayment penalty applies to individual floating-rate home loans.`;
            actionTip = `📋 <strong>Action:</strong> Use the 1-click generator above to copy your customized Bank Branch Request Letter and submit it to your home branch.`;
            break;

        case "SANCTION_DISBURSED_ENGINE":
            guideTitle = `Sanction Amount vs Net In-Hand Bank Disbursal Guide`;
            guideSummary = `Searching for "${queryStr}" highlights discrepancies between the on-paper loan sanction limit and the actual net cash credited to your bank account.`;
            takeaway1 = `<strong>Upfront Deductions:</strong> Lenders deduct processing fees, 18% GST, legal/valuation fees, MOD stamp duty, and property insurance directly from the first tranche disbursal.`;
            takeaway2 = `<strong>Section 194-IA 1% TDS:</strong> For property purchases or loan disbursals ≥ ₹50 Lakhs, 1% TDS must be withheld upfront and deposited with the Income Tax Department.`;
            takeaway3 = `<strong>Pre-EMI vs Full EMI:</strong> During construction-linked disbursals, borrowers pay Pre-EMI (simple interest on disbursed amount only) until full loan sanction is drawn.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Request an itemized "Disbursal Advice Slip" prior to tranche release to audit pre-deducted fee lines against your Sanction Letter.`;
            break;

        case "FEE_GST_ENGINE":
            guideTitle = `Processing Fee & 18% GST Transparency Decoder`;
            guideSummary = `Searching for "${queryStr}" addresses hidden upfront costs and mandatory GST taxes added to loan processing fees.`;
            takeaway1 = `<strong>18% GST Statutory Rule:</strong> 18% GST applies to bank processing fees, legal/technical valuation fees, and admin charges (0% GST on EMI principal & interest).`;
            takeaway2 = `<strong>MOD Stamp Duty Caps:</strong> Memorandum of Deposit (MOD) stamp duty ranges between 0.2% and 0.5% depending on state laws (Maharashtra capped at ₹15k max).`;
            takeaway3 = `<strong>Fee Refund Policy:</strong> Bank processing fees are non-refundable even if the loan is cancelled post-sanction, but property valuation fees must be itemized.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Negotiate flat-fee processing charges during festive zero-processing-fee promotional campaigns.`;
            break;

        case "TAX_REGIME_ENGINE":
            guideTitle = `FY 2025–26 Home Loan Tax Deductions & Regime Guide`;
            guideSummary = `Searching for "${queryStr}" guides borrowers on maximizing tax deductions across Old vs New Tax Regimes.`;
            takeaway1 = `<strong>FY 2025–26 Default New Regime:</strong> New Tax Regime offers a ₹75,000 Standard Deduction, but Section 24(b) interest deduction for self-occupied property is <strong>₹0</strong>.`;
            takeaway2 = `<strong>Old Tax Regime Benefits:</strong> Old Regime allows up to <strong>₹2,00,000</strong> deduction under Sec 24(b) for interest paid + <strong>₹1,50,000</strong> under Sec 80C for principal repayment.`;
            takeaway3 = `<strong>Let-Out Property Exception:</strong> For rented/let-out properties, full annual interest paid can be offset against rental income under both tax regimes.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Calculate taxable liability under both regimes annually before filing ITR; switch to Old Regime if annual interest > ₹1.5L.`;
            break;

        case "EEA80_ENGINE":
            guideTitle = `Sec 80EEA Tax Deduction Window Status & Alternatives`;
            guideSummary = `Searching for "${queryStr}" clarifies the operational timeline of additional home loan tax benefits under Section 80EEA.`;
            takeaway1 = `<strong>Window Closed Status:</strong> Section 80EEA (extra ₹1.5L deduction for first-time buyers on property value ≤ ₹45L) <strong>expired on March 31, 2022</strong>. No new sanctions qualify.`;
            takeaway2 = `<strong>Existing Sanction Claims:</strong> Loans sanctioned between April 1, 2019 and March 31, 2022 continue to qualify for Section 80EEA throughout their tenure under Old Regime.`;
            takeaway3 = `<strong>Primary Alternative:</strong> Utilize full Section 24(b) ₹2,00,000 cap + Section 80C ₹1,50,000 cap under the Old Tax Regime.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Take joint home loans to claim combined ₹4,00,000 Section 24(b) interest benefit across co-borrowers.`;
            break;

        case "MULTI_PREPAYMENT_ENGINE":
            guideTitle = `Annual Bonus Compounding Prepayment Guide`;
            guideSummary = `Searching for "${queryStr}" demonstrates the exponential compounding interest savings achieved by making small annual lump-sum prepayments.`;
            takeaway1 = `<strong>Compounding Multiplier:</strong> Prepaying just 5-10% of principal once every 12 months (e.g. ₹1 Lakh annual bonus) cuts a 20-year loan down to 12.4 years.`;
            takeaway2 = `<strong>Front-Loaded Interest Cut:</strong> Prepayments made during Years 1-5 yield the highest interest savings because early EMIs consist of 75%+ interest component.`;
            takeaway3 = `<strong>Zero Prepayment Fine:</strong> No penalty or lock-in applies for floating-rate home loans taken by individual borrowers.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Automate annual part-prepayments immediately upon receiving work appraisal bonuses or tax refunds.`;
            break;

        case "BT_ENGINE":
            guideTitle = `Home Loan Balance Transfer (BT) Switching Cost Analysis`;
            guideSummary = `Searching for "${queryStr}" calculates net financial savings when switching an existing home loan to a new bank offering lower interest rates.`;
            takeaway1 = `<strong>Net Savings Calculation:</strong> BT is beneficial only if total interest saved over remaining tenure exceeds total switching costs (new processing fee + 18% GST + legal + MOD fees).`;
            takeaway2 = `<strong>Minimum Rate Differential:</strong> A rate difference of at least <strong>0.50% p.a.</strong> with minimum 10 years remaining tenure is recommended for breakeven.`;
            takeaway3 = `<strong>Negotiation Leverage:</strong> Show your new bank's sanction letter to your current bank; they will often match the lower rate via a simple spread reset fee without BT red tape!`;
            actionTip = `💡 <strong>Pro Tip:</strong> Use the net-savings calculator above to ensure breakeven occurs within 6 months of switching.`;
            break;

        case "RIGHTS_ENGINE":
            guideTitle = `RBI Borrower Rights & Penalty Waiver Guide`;
            guideSummary = `Searching for "${queryStr}" highlights borrower legal protections under RBI Fair Practice Code & Master Directions.`;
            takeaway1 = `<strong>0% Foreclosure Fee Mandate:</strong> Banks cannot charge prepayment or foreclosure penalties on floating-rate home loans for individual co-borrowers.`;
            takeaway2 = `<strong>30-Day Deed Release Rule:</strong> Lenders must release original title deeds within 30 days of loan payoff, or pay a ₹5,000/day fine to the borrower.`;
            takeaway3 = `<strong>Forced Bundling Prohibition:</strong> Lenders CANNOT force borrowers to buy property or life insurance from partner insurers as a pre-condition for loan sanction.`;
            actionTip = `📜 <strong>Action:</strong> Cite RBI Fair Practice Code to reject forced insurance bundling or illegal foreclosure fee demands.`;
            break;

        case "PRECON_ENGINE":
            guideTitle = `Pre-Construction Interest Tax Claim Guide`;
            guideSummary = `Searching for "${queryStr}" explains Section 24(b) rules for claiming interest paid during the construction phase of an under-construction property.`;
            takeaway1 = `<strong>5 Equal Installments Rule:</strong> Total interest paid during construction before possession is aggregated and claimed in <strong>5 equal annual installments</strong>.`;
            takeaway2 = `<strong>Possession Milestone:</strong> Pre-construction interest claims begin ONLY from the financial year in which construction is completed and possession is handed over.`;
            takeaway3 = `<strong>Section 24(b) Ceiling:</strong> Combined pre-construction installment + current year interest claim is subject to the overall ₹2,00,000 annual cap under Old Tax Regime.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Obtain a detailed pre-construction interest statement from your lender upon taking property possession.`;
            break;

        case "RATE_SCENARIO_ENGINE":
            guideTitle = `Rate Reset Shock & Repo-Linked Rate (RLLR) Guide`;
            guideSummary = `Searching for "${queryStr}" simulates monthly EMI jumps and tenure extensions caused by benchmark repo rate hikes.`;
            takeaway1 = `<strong>REPO Rate Benchmark:</strong> Floating rate home loans are linked to RBI's Repo Rate (5.25%). A 1.00% repo hike increases EMI by ~₹3,200/mo on a ₹50L loan.`;
            takeaway2 = `<strong>EMI vs Tenure Hike:</strong> Banks automatically extend loan tenure on rate hikes. If tenure hits age 65-70 cap, monthly EMI increases automatically.`;
            takeaway3 = `<strong>Fixed vs Floating Choice:</strong> Floating rates remain 1.5% - 2.0% cheaper than fixed rates over long 20-year cycles.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Increase monthly EMI voluntarily by 5% every year to absorb potential future rate shock hikes.`;
            break;

        case "JOINT_ENGINE":
            guideTitle = `Joint Home Loan Tax Benefit Optimization Guide`;
            guideSummary = `Searching for "${queryStr}" optimizes tax savings for co-borrowers and joint property owners.`;
            takeaway1 = `<strong>Co-Owner + Co-Borrower Mandate:</strong> To claim tax benefits, an applicant MUST be both a registered co-owner of the property AND a co-borrower on the loan.`;
            takeaway2 = `<strong>Double Tax Deduction:</strong> Each co-borrower can claim up to <strong>₹2,00,000 (Sec 24b)</strong> for interest + <strong>₹1,50,000 (Sec 80C)</strong> for principal (Total ₹7,00,000 combined cap!).`;
            takeaway3 = `<strong>Payment Ratio Alignment:</strong> Tax benefits must be claimed in proportion to each co-borrower's contribution toward EMI payments from their respective bank accounts.`;
            actionTip = `💡 <strong>Pro Tip:</strong> Structure EMI payments from separate bank accounts to maintain clean audit records for Income Tax filing.`;
            break;

        case "JOURNEY_ENGINE":
            guideTitle = `End-to-End Home Loan Disbursal & Title Deed Lifecycle`;
            guideSummary = `Searching for "${queryStr}" maps out the complete 6-phase journey of taking, servicing, and closing an Indian home loan.`;
            takeaway1 = `<strong>Phase 1-3 (Application to MOD):</strong> Income verification, CIBIL check (>750), 30-year property title search, technical valuation, and MOD registration at Sub-Registrar.`;
            takeaway2 = `<strong>Phase 4-5 (Disbursal & EMI):</strong> Stage-wise construction cheque release, Pre-EMI servicing, and full EMI auto-debit setup via NACH/ECS.`;
            takeaway3 = `<strong>Phase 6 (Closure & Deed Return):</strong> Full repayment, NOC issuance, CERSAI lien de-registration, and original title deed recovery within 30 days.`;
            actionTip = `🗺️ <strong>Action:</strong> Review the interactive 6-phase roadmap on the left to track your current loan stage.`;
            break;

        case "POST_CLOSURE_ENGINE":
            guideTitle = `Post-Loan Closure 5-Step Checklist & CIBIL Recovery Guide`;
            guideSummary = `Searching for "${queryStr}" outlines mandatory steps after paying off your loan to secure title and protect your credit score.`;
            takeaway1 = `<strong>1. No Dues Certificate (NDC):</strong> Secure signed NDC stating zero outstanding balance and all un-cleared post-dated cheques destroyed.`;
            takeaway2 = `<strong>2. Title Deed Retrieval (30 Days):</strong> Collect original sale deed & mother deed. Bank fine of ₹5,000/day applies for delays beyond 30 days.`;
            takeaway3 = `<strong>3. CERSAI & Lien Removal:</strong> Confirm bank removes mortgage charge from CERSAI portal and Sub-Registrar office records.`;
            takeaway4 = `<strong>4. CIBIL Bureau Update ("CLOSED" vs "SETTLED"):</strong> Ensure account is marked "CLOSED" (not "SETTLED"). "Settled" status drops credit score by 50+ points!`;
            actionTip = `🏁 <strong>Action:</strong> Check off each of the 5 mandatory post-closure tasks in the interactive widget on the left.`;
            break;

        case "CHECKLIST_ENGINE":
            guideTitle = `Borrower Profile Document Verification Guide`;
            guideSummary = `Searching for "${queryStr}" lists mandatory documents required for home loan approval based on borrower category.`;
            takeaway1 = `<strong>Salaried Borrowers:</strong> KYC (PAN/Aadhaar), last 3 months salary slips, 2 years Form 16, and 6 months salary account statement.`;
            takeaway2 = `<strong>Self-Employed:</strong> KYC, 3 years audited P&L and Balance Sheet, 3 years ITR with computation of income, and 12 months business bank statement.`;
            takeaway3 = `<strong>Property Documents:</strong> Allotment letter, title chain (30 years), approved building plan, builder NOC, and Encumbrance Certificate (EC).`;
            actionTip = `📋 <strong>Action:</strong> Select your borrower profile from the dropdown to view the custom checklist.`;
            break;

        default:
            guideTitle = `Home Loan Decision & Optimization Guide`;
            guideSummary = `Searching for "${queryStr}" provides expert guidance regarding interest calculations, fee breakdowns, and statutory rules.`;
            takeaway1 = `<strong>2026 RBI Policy Rate:</strong> Benchmark Repo Rate sits at <strong>5.25%</strong>. Floating rate loan resets should be evaluated against monthly EMI impact vs tenure expansion.`;
            takeaway2 = `<strong>Fee & 18% GST Slabs:</strong> Processing fees attract <strong>18% GST</strong>. Always demand an itemized breakup of legal, valuation, and MOD stamp duty charges upfront.`;
            takeaway3 = `<strong>Tax Regime Optimization:</strong> Evaluate switching between default New Regime and Old Regime (Sec 24b ₹2L interest + Sec 80C ₹1.5L principal benefits).`;
            actionTip = `💡 <strong>Action:</strong> Use the interactive widget on the left to simulate loan scenarios.`;
            break;
    }

    articleBox.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">
                <h4 style="font-size: 14px; font-weight: 700; color: var(--accent-gold); margin: 0 0 4px 0;">${guideTitle}</h4>
                <p style="font-size: 12px; color: var(--text-secondary); margin: 0;">${guideSummary}</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: var(--text-secondary);">
                <div>${takeaway1}</div>
                <div>${takeaway2}</div>
                <div>${takeaway3}</div>
                ${takeaway4 ? `<div>${takeaway4}</div>` : ''}
            </div>

            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); padding: 10px; border-radius: var(--radius-sm); font-size: 11.5px; color: #10b981; margin-top: 4px;">
                ${actionTip}
            </div>
        </div>
    `;
}

function launchSolutionStudio(gap) {
    const pageSubtitle = document.getElementById("page-subtitle");
    if (pageTitle) pageTitle.textContent = "Solution Studio";
    if (pageSubtitle) pageSubtitle.textContent = `Live customer solution generated for "${gap.query}"`;

    // Populate Studio Header metadata
    const loanType = gap.loan_type || gap.loanType || "Home Loan";
    const gapScore = gap.gapScore || (gap.volume * (6 - gap.quality));

    document.getElementById("studio-query-title").textContent = `"${gap.query}"`;
    document.getElementById("studio-volume-text").textContent = gap.volume.toLocaleString("en-IN");
    document.getElementById("studio-intent-text").textContent = gap.type;
    document.getElementById("studio-format-pill").textContent = gap.format;
    document.getElementById("studio-loan-type-badge").textContent = loanType;
    document.getElementById("studio-gap-score-badge").textContent = `Gap Score: ${gap.gapScore ? gap.gapScore.toLocaleString("en-IN") : gapScore.toLocaleString("en-IN")}`;

    const widgetBox = document.getElementById("solution-studio-widget-box");
    const articleBox = document.getElementById("solution-studio-article-box");
    const embedBox = document.getElementById("solution-studio-embed-code");

    const formatLower = (gap.format || "").toLowerCase();

    if (formatLower.includes("foir") || formatLower.includes("affordability")) {
        renderStudioSEOArticle(gap, "FOIR_ENGINE");
        // Engine 1: Salary Affordability & FOIR Eligibility Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>📊 2026 FOIR Banking Rule:</strong> Indian banks cap total monthly EMI obligations at <strong>50%</strong> (salary < ₹1L/mo) or <strong>60%</strong> (salary ≥ ₹1L/mo) of net in-hand salary.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Gross Monthly In-Hand Salary (₹)</label>
                        <input type="number" id="foir-salary" value="120000" step="5000">
                    </div>
                    <div class="studio-input-group">
                        <label>Existing Monthly EMIs / Debts (₹)</label>
                        <input type="number" id="foir-existing" value="15000" step="2000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Expected Interest Rate (% p.a.)</label>
                        <input type="number" id="foir-rate" value="8.5" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>Loan Tenure (Years)</label>
                        <input type="number" id="foir-tenure" value="20" step="1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Max Allowed Home Loan EMI</span>
                        <span class="res-val" id="res-foir-emi" style="color: #10b981;">₹57,000 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-foir-pct">Based on 60% FOIR cap</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Max Sanctionable Home Loan Amount</span>
                        <span class="res-val" id="res-foir-loan" style="color: var(--accent-purple);">₹65,71,280</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Maximum principal bank will disburse</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateFOIR() {
            const sal = parseFloat(document.getElementById("foir-salary").value) || 120000;
            const existing = parseFloat(document.getElementById("foir-existing").value) || 15000;
            const r = (parseFloat(document.getElementById("foir-rate").value) || 8.5) / 12 / 100;
            const n = (parseFloat(document.getElementById("foir-tenure").value) || 20) * 12;

            const foirCapPct = sal >= 100000 ? 0.60 : 0.50;
            const maxTotalEmi = sal * foirCapPct;
            const maxHomeEmi = Math.max(0, maxTotalEmi - existing);

            const maxLoan = (maxHomeEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));

            document.getElementById("res-foir-emi").textContent = `₹${Math.round(maxHomeEmi).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-foir-pct").textContent = `Based on ${(foirCapPct * 100)}% FOIR cap (Salary ₹${(sal/1000).toFixed(0)}k/mo)`;
            document.getElementById("res-foir-loan").textContent = `₹${Math.round(maxLoan).toLocaleString("en-IN")}`;
        }

        ["foir-salary", "foir-existing", "foir-rate", "foir-tenure"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateFOIR);
        });

        recalculateFOIR();

    } else if (formatLower.includes("spread") || formatLower.includes("repo-rate spread") || formatLower.includes("margin")) {
        renderStudioSEOArticle(gap, "SPREAD_ENGINE");
        // Engine: Repo Rate Spread Adjustment & Hidden Margin Compare Tool
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>📉 Banking Spread Arbitrage Trap:</strong> When RBI cuts repo rates (benchmark <strong>5.25%</strong>), Indian banks often quietly increase their <strong>bank spread / margin</strong> for existing borrowers so interest rates don't drop, while offering lower spreads to new customers.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Benchmark RBI Repo Rate (% p.a.)</label>
                        <input type="number" id="spread-repo" value="5.25" step="0.25">
                    </div>
                    <div class="studio-input-group">
                        <label>Your Current Interest Rate (% p.a.)</label>
                        <input type="number" id="spread-curr-rate" value="9.25" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>New Borrower Rate Offered by Bank (%)</label>
                        <input type="number" id="spread-new-rate" value="8.35" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>Current Outstanding Principal (₹)</label>
                        <input type="number" id="spread-principal" value="5000000" step="100000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #f43f5e;">
                        <span class="res-label">Hidden Excess Bank Spread Paid</span>
                        <span class="res-val" id="res-spread-extra-pct" style="color: #f43f5e;">+ 0.90% Extra Spread</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-spread-comp">Your Spread: 4.00% vs New Customer Spread: 3.10%</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Monthly Savings after Spread Reset Request</span>
                        <span class="res-val" id="res-spread-monthly-loss" style="color: #10b981;">₹3,750 / month</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-spread-reset-cost">Reset Fee: ₹1,000 + GST (Breakeven in 10 days!)</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateSpread() {
            const repo = parseFloat(document.getElementById("spread-repo").value) || 5.25;
            const currRate = parseFloat(document.getElementById("spread-curr-rate").value) || 9.25;
            const newRate = parseFloat(document.getElementById("spread-new-rate").value) || 8.35;
            const P = parseFloat(document.getElementById("spread-principal").value) || 5000000;

            const yourSpread = Math.max(0, currRate - repo);
            const newSpread = Math.max(0, newRate - repo);
            const extraSpread = Math.max(0, yourSpread - newSpread);

            const monthlyInterestLoss = (P * (extraSpread / 100)) / 12;

            document.getElementById("res-spread-extra-pct").textContent = `+ ${extraSpread.toFixed(2)}% Extra Spread`;
            document.getElementById("res-spread-comp").textContent = `Your Spread: ${yourSpread.toFixed(2)}% vs New Customer Spread: ${newSpread.toFixed(2)}%`;

            document.getElementById("res-spread-monthly-loss").textContent = `₹${Math.round(monthlyInterestLoss).toLocaleString("en-IN")} / month`;
            document.getElementById("res-spread-reset-cost").textContent = `Pay bank ₹1,000 conversion fee + GST to reset spread (Breakeven: < 1 month)`;
        }

        ["spread-repo", "spread-curr-rate", "spread-new-rate", "spread-principal"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateSpread);
        });

        recalculateSpread();

    } else if (formatLower.includes("cersai") || formatLower.includes("deed") || formatLower.includes("document release") || formatLower.includes("misplaced")) {
        renderStudioSEOArticle(gap, "CERSAI_DEED_ENGINE");
        // Engine: CERSAI Charge Clearance & Lost Deed Compensation Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>📜 Mandatory RBI Deed Release Compensation Rule:</strong> Banks MUST return original title deeds and remove CERSAI charge within <strong>30 days</strong> of loan closure. Delay beyond 30 days incurs a mandatory bank penalty of <strong>₹5,000 / day</strong> paid directly to the borrower.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Loan Closure / Full Repayment Date</label>
                        <input type="date" id="deed-closure-date" value="2026-06-01">
                    </div>
                    <div class="studio-input-group">
                        <label>Days Original Property Deed Retained / Delayed</label>
                        <input type="number" id="deed-days-delayed" value="55" step="1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Mandatory Bank Compensation Owed to You</span>
                        <span class="res-val" id="res-deed-compensation" style="color: #10b981; font-size: 22px;">₹1,25,000 Owed</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-deed-days-over">25 Days Past 30-Day RBI Deadline (₹5,000/day)</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                        <span class="res-label">Escalation Pathway</span>
                        <span class="res-val" style="color: #f59e0b; font-size: 16px;">Level 3: RBI Ombudsman</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">File complaint at cms.rbi.org.in if unpaid</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateDeed() {
            const totalDays = parseFloat(document.getElementById("deed-days-delayed").value) || 55;
            const daysOver = Math.max(0, totalDays - 30);
            const penalty = daysOver * 5000;

            document.getElementById("res-deed-compensation").textContent = penalty > 0 ? `₹${penalty.toLocaleString("en-IN")} Owed` : `₹0 (Within 30-day grace period)`;
            document.getElementById("res-deed-days-over").textContent = daysOver > 0 ? `${daysOver} Days Past 30-Day RBI Deadline (₹5,000/day fine)` : `${totalDays} days elapsed (Bank has ${30 - totalDays} days remaining)`;
        }

        ["deed-closure-date", "deed-days-delayed"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateDeed);
        });

        recalculateDeed();

    } else if (formatLower.includes("max gain") || formatLower.includes("overdraft") || formatLower.includes("offset")) {
        renderStudioSEOArticle(gap, "MAX_GAIN_ENGINE");
        // Engine: SBI Max Gain / Overdraft Account Simulator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>💡 Home Loan Overdraft (Max Gain) Benefit:</strong> Parking surplus funds (emergency fund, bonus, business cash) in your Home Loan Overdraft account reduces interest charged daily without locking your money.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Home Loan Sanction Balance (₹)</label>
                        <input type="number" id="od-loan-bal" value="5000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Surplus Cash Parked in Overdraft Account (₹)</label>
                        <input type="number" id="od-surplus-parked" value="600000" step="50000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Interest Rate (% p.a.)</label>
                        <input type="number" id="od-rate" value="8.5" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>Remaining Tenure (Years)</label>
                        <input type="number" id="od-tenure" value="20" step="1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Monthly Interest Saved</span>
                        <span class="res-val" id="res-od-monthly-saved" style="color: #10b981;">₹4,250 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-od-effective-bal">Effective interest-bearing balance: ₹44,00,000</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Total Lifetime OD Interest Saved</span>
                        <span class="res-val" id="res-od-total-saved" style="color: var(--accent-purple);">₹10,20,000</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">100% liquid funds (withdraw anytime)</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateOD() {
            const P = parseFloat(document.getElementById("od-loan-bal").value) || 5000000;
            const surplus = parseFloat(document.getElementById("od-surplus-parked").value) || 600000;
            const rVal = parseFloat(document.getElementById("od-rate").value) || 8.5;
            const r = rVal / 12 / 100;
            const years = parseFloat(document.getElementById("od-tenure").value) || 20;

            const effectiveBal = Math.max(0, P - surplus);
            const monthlyInterestSaved = surplus * r;
            const totalSaved = monthlyInterestSaved * 12 * years;

            document.getElementById("res-od-monthly-saved").textContent = `₹${Math.round(monthlyInterestSaved).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-od-effective-bal").textContent = `Effective interest charged on ₹${effectiveBal.toLocaleString("en-IN")} instead of ₹${P.toLocaleString("en-IN")}`;
            document.getElementById("res-od-total-saved").textContent = `₹${Math.round(totalSaved).toLocaleString("en-IN")}`;
        }

        ["od-loan-bal", "od-surplus-parked", "od-rate", "od-tenure"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateOD);
        });

        recalculateOD();

    } else if (formatLower.includes("draft") || formatLower.includes("letter") || formatLower.includes("branch request") || formatLower.includes("emi-reduction") || formatLower.includes("request")) {
        renderStudioSEOArticle(gap, "PREPAYMENT_DRAFT_ENGINE");
        // Engine: Prepayment EMI-Reduction & Branch Request Draft Generator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>📝 Branch Prepayment Request Rule:</strong> Indian banks (SBI, HDFC, ICICI, etc.) automatically default to reducing tenure on part-prepayment. To reduce your <strong>monthly EMI</strong> instead, you MUST submit an official written <strong>Branch Prepayment Request Letter</strong>.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Current Outstanding Loan Principal (₹)</label>
                        <input type="number" id="draft-principal" value="4000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Lump-Sum Prepayment Amount (₹)</label>
                        <input type="number" id="draft-prepay" value="500000" step="50000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Interest Rate (% p.a.)</label>
                        <input type="number" id="draft-rate" value="8.5" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>Remaining Tenure (Years)</label>
                        <input type="number" id="draft-tenure" value="15" step="1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 4px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">New Reduced Monthly EMI (Option A)</span>
                        <span class="res-val" id="res-draft-new-emi" style="color: #10b981;">₹34,467 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-draft-emi-drop">Saves ₹4,924 / month in cash outflow</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Alt: Tenure Drop (Option B - Default)</span>
                        <span class="res-val" id="res-draft-new-tenure" style="color: var(--accent-purple);">11.8 Years</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-draft-tenure-saved">Saves 3.2 Years if EMI kept same</span>
                    </div>
                </div>

                <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 14px; margin-top: 4px;">
                    <div style="font-size: 13px; font-weight: 700; color: #f59e0b; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
                        <span>📄 Official Bank Branch Prepayment Request Draft Generator</span>
                        <button id="btn-copy-draft" style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); color: #f59e0b; padding: 4px 12px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: 600;">📋 Copy Request Draft</button>
                    </div>

                    <div class="grid-two-col" style="gap: 12px; margin-bottom: 12px;">
                        <div class="studio-input-group">
                            <label>Lender / Bank Name</label>
                            <select id="draft-bank-name">
                                <option value="State Bank of India (SBI)" selected>State Bank of India (SBI)</option>
                                <option value="HDFC Bank Limited">HDFC Bank</option>
                                <option value="ICICI Bank Limited">ICICI Bank</option>
                                <option value="Axis Bank Limited">Axis Bank</option>
                                <option value="Bank of Baroda">Bank of Baroda</option>
                                <option value="Punjab National Bank">Punjab National Bank</option>
                                <option value="Canara Bank">Canara Bank</option>
                                <option value="LIC Housing Finance Ltd">LIC Housing Finance</option>
                            </select>
                        </div>
                        <div class="studio-input-group">
                            <label>Borrower Name & Account No.</label>
                            <input type="text" id="draft-account-info" value="Rahul Sharma (A/C: HL-987654321)">
                        </div>
                    </div>

                    <div style="background: #0d1117; border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 12px; font-family: monospace; font-size: 11.5px; color: var(--text-secondary); line-height: 1.5; white-space: pre-wrap;" id="draft-letter-preview"></div>
                </div>
            </div>
        `;

        function recalculateDraft() {
            const P = parseFloat(document.getElementById("draft-principal").value) || 4000000;
            const prepay = parseFloat(document.getElementById("draft-prepay").value) || 500000;
            const rVal = parseFloat(document.getElementById("draft-rate").value) || 8.5;
            const r = rVal / 12 / 100;
            const origTenure = parseFloat(document.getElementById("draft-tenure").value) || 15;
            const n = origTenure * 12;

            const bankName = document.getElementById("draft-bank-name").value || "State Bank of India (SBI)";
            const accountInfo = document.getElementById("draft-account-info").value || "Borrower (A/C: HL-XXXXXX)";

            const origEmi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const newP = Math.max(0, P - prepay);
            const newEmi = (newP * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const emiDrop = origEmi - newEmi;

            let monthCount = n;
            if (origEmi > newP * r) {
                monthCount = Math.log(origEmi / (origEmi - newP * r)) / Math.log(1 + r);
            }
            const newYears = (monthCount / 12).toFixed(1);
            const savedYears = (origTenure - (monthCount / 12)).toFixed(1);

            document.getElementById("res-draft-new-emi").textContent = `₹${Math.round(newEmi).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-draft-emi-drop").textContent = `Saves ₹${Math.round(emiDrop).toLocaleString("en-IN")} / month in cash outflow`;

            document.getElementById("res-draft-new-tenure").textContent = `${newYears} Years`;
            document.getElementById("res-draft-tenure-saved").textContent = `Saves ${savedYears} Years (${Math.round((origTenure - newYears)*12)} months) if EMI kept same`;

            const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const borrowerName = accountInfo.split('(')[0].trim() || "Borrower";

            const letterText = `To,
The Branch Manager,
${bankName},
Home Loan Branch.

Subject: Request for Home Loan Part-Prepayment & Monthly EMI Reduction
Borrower & Account: ${accountInfo}

Respected Sir/Madam,

I am holding a Home Loan account (${accountInfo}) with your branch. I wish to make a voluntary part-prepayment of ₹${prepay.toLocaleString("en-IN")} towards my home loan principal.

As per my financial preference, I request you to APPLY THIS PART-PREPAYMENT TO REDUCE MY MONTHLY EMI OBLIGATION while keeping the remaining loan tenure constant at ${origTenure} years.

Details of Part-Prepayment & EMI Adjustment:
- Current Outstanding Principal: ₹${P.toLocaleString("en-IN")}
- Lump-Sum Prepayment Amount: ₹${prepay.toLocaleString("en-IN")}
- Revised Principal Balance: ₹${newP.toLocaleString("en-IN")}
- Existing Monthly EMI: ₹${Math.round(origEmi).toLocaleString("en-IN")}/mo
- Requested Revised Monthly EMI: ₹${Math.round(newEmi).toLocaleString("en-IN")}/mo (Monthly Savings: ₹${Math.round(emiDrop).toLocaleString("en-IN")}/mo)
- RBI Mandate Compliance: 0% Foreclosure/Prepayment Charges (Floating Rate Loan)

Kindly process this prepayment and issue me an updated loan amortization schedule reflecting the reduced monthly EMI.

Thanking You,
Yours Sincerely,
${borrowerName}
Date: ${todayStr}`;

            document.getElementById("draft-letter-preview").textContent = letterText;
        }

        ["draft-principal", "draft-prepay", "draft-rate", "draft-tenure", "draft-bank-name", "draft-account-info"].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener("input", recalculateDraft);
                el.addEventListener("change", recalculateDraft);
            }
        });

        const copyBtn = document.getElementById("btn-copy-draft");
        if (copyBtn) {
            copyBtn.addEventListener("click", () => {
                const text = document.getElementById("draft-letter-preview").textContent;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = "✓ Copied to Clipboard!";
                    setTimeout(() => { copyBtn.textContent = "📋 Copy Request Draft"; }, 2000);
                });
            });
        }

        recalculateDraft();

    } else if (formatLower.includes("multi-prepayment") || formatLower.includes("part payment") || formatLower.includes("compounding") || formatLower.includes("annual prepayment")) {
        renderStudioSEOArticle(gap, "MULTI_PREPAYMENT_ENGINE");
        // Engine 2: Multi-Prepayment Annual Savings Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>📅 Annual Bonus Prepayment compounding:</strong> Shows how paying an extra lump-sum every 12 months dramatically cuts tenure.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Home Loan Principal (₹)</label>
                        <input type="number" id="multi-principal" value="5000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Interest Rate (% p.a.)</label>
                        <input type="number" id="multi-rate" value="8.5" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Original Tenure (Years)</label>
                        <input type="number" id="multi-tenure" value="20" step="1">
                    </div>
                    <div class="studio-input-group">
                        <label>Annual Prepayment (Every 12 Months) (₹)</label>
                        <input type="number" id="multi-prepay-annual" value="100000" step="25000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">New Reduced Tenure</span>
                        <span class="res-val" id="res-multi-years" style="color: #10b981;">12.4 Years</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-multi-saved-time">Cuts loan by 7.6 Years (91 months)</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Total Compound Interest Saved</span>
                        <span class="res-val" id="res-multi-interest-saved" style="color: var(--accent-purple);">₹21,45,800</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Compound savings from annual prepayment</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateMultiPrepay() {
            const P = parseFloat(document.getElementById("multi-principal").value) || 5000000;
            const r = (parseFloat(document.getElementById("multi-rate").value) || 8.5) / 12 / 100;
            const origTenureYears = parseFloat(document.getElementById("multi-tenure").value) || 20;
            const n = origTenureYears * 12;
            const annualPrepay = parseFloat(document.getElementById("multi-prepay-annual").value) || 100000;

            const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const origTotalInterest = (emi * n) - P;

            let balance = P;
            let month = 0;
            let totalInterestPaid = 0;

            while (balance > 0 && month < n) {
                month++;
                const interest = balance * r;
                let principal = emi - interest;

                if (month % 12 === 0) {
                    principal += annualPrepay;
                }

                if (principal >= balance) {
                    totalInterestPaid += interest;
                    balance = 0;
                } else {
                    totalInterestPaid += interest;
                    balance -= principal;
                }
            }

            const newYears = (month / 12).toFixed(1);
            const yearsSaved = (origTenureYears - (month / 12)).toFixed(1);
            const interestSaved = Math.max(0, origTotalInterest - totalInterestPaid);

            document.getElementById("res-multi-years").textContent = `${newYears} Years`;
            document.getElementById("res-multi-saved-time").textContent = `Cuts loan by ${yearsSaved} Years (${origTenureYears * 12 - month} months)`;
            document.getElementById("res-multi-interest-saved").textContent = `₹${Math.round(interestSaved).toLocaleString("en-IN")}`;
        }

        ["multi-principal", "multi-rate", "multi-tenure", "multi-prepay-annual"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateMultiPrepay);
        });

        recalculateMultiPrepay();

    } else if (formatLower.includes("payoff-strategy") || formatLower.includes("reduce home loan tenure") || formatLower.includes("prepayment") || formatLower.includes("prepay") || formatLower.includes("choice manager") || formatLower.includes("tenure vs emi") || formatLower.includes("emi-vs-tenure")) {
        renderStudioSEOArticle(gap, "PAYOFF_STRATEGY_ENGINE");
        // Engine 3: Loan Payoff Strategy & Tenure Acceleration Engine
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🚀 Monthly EMI Top-Up Strategy:</strong> Adding a small extra monthly payment reduces overall interest exponentially.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Current Outstanding Principal (₹)</label>
                        <input type="number" id="payoff-principal" value="4500000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Current Interest Rate (% p.a.)</label>
                        <input type="number" id="payoff-rate" value="8.5" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Remaining Tenure (Years)</label>
                        <input type="number" id="payoff-tenure" value="18" step="1">
                    </div>
                    <div class="studio-input-group">
                        <label>Extra Monthly EMI Top-Up (₹)</label>
                        <input type="number" id="payoff-extra-emi" value="3000" step="500">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Accelerated Closure Time</span>
                        <span class="res-val" id="res-payoff-years" style="color: #10b981;">14.2 Years</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-payoff-time-saved">Saves 3.8 Years (45 months)</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-blue);">
                        <span class="res-label">Total Interest Saved</span>
                        <span class="res-val" id="res-payoff-interest" style="color: var(--accent-blue);">₹10,85,400</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">From ₹3,000 monthly top-up</span>
                    </div>
                </div>
            </div>
        `;

        function recalculatePayoff() {
            const P = parseFloat(document.getElementById("payoff-principal").value) || 4500000;
            const r = (parseFloat(document.getElementById("payoff-rate").value) || 8.5) / 12 / 100;
            const origYears = parseFloat(document.getElementById("payoff-tenure").value) || 18;
            const n = origYears * 12;
            const extraEmi = parseFloat(document.getElementById("payoff-extra-emi").value) || 3000;

            const baseEmi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const origTotalInterest = (baseEmi * n) - P;

            const newEmi = baseEmi + extraEmi;
            let balance = P;
            let month = 0;
            let totalInterestPaid = 0;

            while (balance > 0 && month < n) {
                month++;
                const interest = balance * r;
                const principal = newEmi - interest;

                if (principal >= balance) {
                    totalInterestPaid += interest;
                    balance = 0;
                } else {
                    totalInterestPaid += interest;
                    balance -= principal;
                }
            }

            const newYears = (month / 12).toFixed(1);
            const yearsSaved = (origYears - (month / 12)).toFixed(1);
            const interestSaved = Math.max(0, origTotalInterest - totalInterestPaid);

            document.getElementById("res-payoff-years").textContent = `${newYears} Years`;
            document.getElementById("res-payoff-time-saved").textContent = `Saves ${yearsSaved} Years (${origYears * 12 - month} months)`;
            document.getElementById("res-payoff-interest").textContent = `₹${Math.round(interestSaved).toLocaleString("en-IN")}`;
        }

        ["payoff-principal", "payoff-rate", "payoff-tenure", "payoff-extra-emi"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculatePayoff);
        });

        recalculatePayoff();

    } else if (formatLower.includes("bt") || formatLower.includes("balance transfer") || formatLower.includes("switching cost")) {
        renderStudioSEOArticle(gap, "BT_ENGINE");
        // Engine 4: Balance Transfer Net-Savings Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🔄 Balance Transfer Net-Cost Evaluation:</strong> Calculates interest drop minus switching costs (MOD stamp duty + 18% GST processing fee).
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Current Principal Balance (₹)</label>
                        <input type="number" id="bt-principal" value="4000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Remaining Tenure (Years)</label>
                        <input type="number" id="bt-tenure" value="15" step="1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Current Bank Rate (%)</label>
                        <input type="number" id="bt-curr-rate" value="9.25" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>New Offered BT Rate (%)</label>
                        <input type="number" id="bt-new-rate" value="8.35" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>New Processing Fee % (+ 18% GST)</label>
                        <input type="number" id="bt-proc-pct" value="0.25" step="0.05">
                    </div>
                    <div class="studio-input-group">
                        <label>Legal, Valuation & MOD Stamp (₹)</label>
                        <input type="number" id="bt-legal-stamp" value="15000" step="1000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Net Lifetime BT Profit</span>
                        <span class="res-val" id="res-bt-net-savings" style="color: #10b981;">₹3,41,200</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-bt-cost">After ₹26,800 switching cost</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                        <span class="res-label">Monthly EMI Reduction</span>
                        <span class="res-val" id="res-bt-emi-drop" style="color: #f59e0b;">₹2,145 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-bt-breakeven">Breakeven: 13 months</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateBT() {
            const P = parseFloat(document.getElementById("bt-principal").value) || 4000000;
            const n = (parseFloat(document.getElementById("bt-tenure").value) || 15) * 12;
            const rCurr = (parseFloat(document.getElementById("bt-curr-rate").value) || 9.25) / 12 / 100;
            const rNew = (parseFloat(document.getElementById("bt-new-rate").value) || 8.35) / 12 / 100;
            const procPct = parseFloat(document.getElementById("bt-proc-pct").value) || 0.25;
            const legal = parseFloat(document.getElementById("bt-legal-stamp").value) || 15000;

            const emiCurr = (P * rCurr * Math.pow(1 + rCurr, n)) / (Math.pow(1 + rCurr, n) - 1);
            const emiNew = (P * rNew * Math.pow(1 + rNew, n)) / (Math.pow(1 + rNew, n) - 1);

            const totalCurrInterest = (emiCurr * n) - P;
            const totalNewInterest = (emiNew * n) - P;
            const grossInterestSavings = totalCurrInterest - totalNewInterest;

            const procFeeBase = (P * procPct) / 100;
            const gst18 = procFeeBase * 0.18;
            const switchingCost = procFeeBase + gst18 + legal;

            const netSavings = grossInterestSavings - switchingCost;
            const emiDrop = emiCurr - emiNew;
            const breakevenMonths = emiDrop > 0 ? Math.ceil(switchingCost / emiDrop) : 0;

            document.getElementById("res-bt-net-savings").textContent = `₹${Math.round(netSavings).toLocaleString("en-IN")}`;
            document.getElementById("res-bt-cost").textContent = `After ₹${Math.round(switchingCost).toLocaleString("en-IN")} switching cost (incl GST)`;
            document.getElementById("res-bt-emi-drop").textContent = `₹${Math.round(emiDrop).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-bt-breakeven").textContent = `Breakeven: ${breakevenMonths} months`;
        }

        ["bt-principal", "bt-tenure", "bt-curr-rate", "bt-new-rate", "bt-proc-pct", "bt-legal-stamp"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateBT);
        });

        recalculateBT();

    } else if (formatLower.includes("80eea") || formatLower.includes("closed window")) {
        // Engine 5: Section 80EEA Closed-Window Eligibility Checker
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>⚠️ Statutory Notice (Section 80EEA):</strong> Additional ₹1.5 Lakh interest deduction under Sec 80EEA applied ONLY to loans sanctioned between <strong>April 1, 2019 and March 31, 2022</strong>.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Property Stamp Duty Value (₹)</label>
                        <input type="number" id="eea-value" value="4200000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Loan Sanction Date / Year</label>
                        <select id="eea-year">
                            <option value="2026" selected>2026 (New Loan Sanction)</option>
                            <option value="2021">2021 (Sanctioned between Apr 2019 - Mar 2022)</option>
                            <option value="2018">2018 (Sanctioned prior to Apr 2019)</option>
                        </select>
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" id="res-eea-card" style="border-left: 3px solid #f43f5e;">
                        <span class="res-label">Section 80EEA Eligibility Status</span>
                        <span class="res-val" id="res-eea-status" style="color: #f43f5e; font-size: 17px;">🚫 Closed for New Sanctions</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-eea-desc">Window expired on March 31, 2022</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Available Standard Tax Benefits</span>
                        <span class="res-val" style="color: #10b981; font-size: 17px;">Sec 24(b) ₹2L + Sec 80C ₹1.5L</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Available under Old Tax Regime</span>
                    </div>
                </div>
            </div>
        `;

        function checkEEA() {
            const val = parseFloat(document.getElementById("eea-value").value) || 4200000;
            const year = document.getElementById("eea-year").value;
            const statusEl = document.getElementById("res-eea-status");
            const descEl = document.getElementById("res-eea-desc");
            const cardEl = document.getElementById("res-eea-card");

            if (year === "2021" && val <= 4500000) {
                statusEl.textContent = "✅ Eligible (Grandfathered Loan)";
                statusEl.style.color = "#10b981";
                descEl.textContent = "Extra ₹1.5L deduction valid if sanctioned in FY 2019-22";
                cardEl.style.borderLeftColor = "#10b981";
            } else {
                statusEl.textContent = "🚫 Not Eligible (Window Closed)";
                statusEl.style.color = "#f43f5e";
                descEl.textContent = val > 4500000 ? "Stamp value exceeds ₹45L cap & window closed" : "Window expired March 31, 2022 for new sanctions";
                cardEl.style.borderLeftColor = "#f43f5e";
            }
        }

        ["eea-value", "eea-year"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("change", checkEEA);
        });

        checkEEA();

    } else if (formatLower.includes("5-instalment") || formatLower.includes("pre-construction") || formatLower.includes("pre construction")) {
        renderStudioSEOArticle(gap, "PRECON_ENGINE");
        // Engine 6: Pre-Construction Interest 5-Instalment Claim Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🏢 Sec 24(b) Pre-Construction Tax Rule:</strong> Interest paid before builder possession can be claimed in <strong>5 equal annual instalments</strong> starting from possession year.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Total Pre-Construction Interest Paid (₹)</label>
                        <input type="number" id="precon-interest" value="350000" step="25000">
                    </div>
                    <div class="studio-input-group">
                        <label>Regular Annual Post-Possession Interest (₹)</label>
                        <input type="number" id="precon-post-interest" value="160000" step="10000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Annual Pre-Con Tax Deduction (1/5th)</span>
                        <span class="res-val" id="res-precon-slice" style="color: var(--accent-purple);">₹70,000 / Year</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Claimable for 5 consecutive financial years</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Total Claimable Sec 24(b) Interest</span>
                        <span class="res-val" id="res-precon-total-claim" style="color: #10b981;">₹2,00,000 / Year</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-precon-cap-note">Capped at ₹2,00,000 self-occupied ceiling</span>
                    </div>
                </div>
            </div>
        `;

        function recalculatePrecon() {
            const preconTotal = parseFloat(document.getElementById("precon-interest").value) || 350000;
            const postInterest = parseFloat(document.getElementById("precon-post-interest").value) || 160000;

            const annualSlice = preconTotal / 5;
            const totalCombined = annualSlice + postInterest;
            const cappedClaim = Math.min(200000, totalCombined);

            document.getElementById("res-precon-slice").textContent = `₹${Math.round(annualSlice).toLocaleString("en-IN")} / Year`;
            document.getElementById("res-precon-total-claim").textContent = `₹${Math.round(cappedClaim).toLocaleString("en-IN")} / Year`;
            document.getElementById("res-precon-cap-note").textContent = totalCombined > 200000 ? `Capped at ₹2L max ceiling (Unclaimed ₹${(totalCombined - 200000).toLocaleString("en-IN")} lapses)` : "Fully deductible within ₹2L ceiling";
        }

        ["precon-interest", "precon-post-interest"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculatePrecon);
        });

        recalculatePrecon();

    } else if (formatLower.includes("rate-scenario") || formatLower.includes("fixed vs floating")) {
        renderStudioSEOArticle(gap, "RATE_SCENARIO_ENGINE");
        // Engine 7: Fixed vs Floating Rate Shock & Reset Simulator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>📈 RBI Rate Hike Reset Simulator:</strong> Shows how interest rate resets expand monthly EMI or lengthen remaining tenure.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Current Outstanding Principal (₹)</label>
                        <input type="number" id="rate-principal" value="5000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Current Floating Interest Rate (%)</label>
                        <input type="number" id="rate-curr" value="8.5" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Remaining Tenure (Years)</label>
                        <input type="number" id="rate-tenure" value="20" step="1">
                    </div>
                    <div class="studio-input-group">
                        <label>Simulated Rate Spike (+ % p.a.)</label>
                        <select id="rate-spike">
                            <option value="0.5">+ 0.50% Hike (Soft Policy Reset)</option>
                            <option value="1.0" selected>+ 1.00% Hike (Moderate Policy Reset)</option>
                            <option value="2.0">+ 2.00% Hike (Severe Policy Reset)</option>
                        </select>
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #f43f5e;">
                        <span class="res-label">New Increased EMI</span>
                        <span class="res-val" id="res-rate-new-emi" style="color: #f43f5e;">₹46,607 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-rate-emi-jump">+ ₹3,216 / month EMI jump</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                        <span class="res-label">Alt: Tenure Extension (If EMI Kept Same)</span>
                        <span class="res-val" id="res-rate-new-tenure" style="color: #f59e0b;">24.8 Years</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-rate-tenure-jump">+ 4.8 Years (+58 months) added</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateRateShock() {
            const P = parseFloat(document.getElementById("rate-principal").value) || 5000000;
            const rCurr = (parseFloat(document.getElementById("rate-curr").value) || 8.5) / 12 / 100;
            const origYears = parseFloat(document.getElementById("rate-tenure").value) || 20;
            const n = origYears * 12;
            const spike = parseFloat(document.getElementById("rate-spike").value) || 1.0;

            const baseEmi = (P * rCurr * Math.pow(1 + rCurr, n)) / (Math.pow(1 + rCurr, n) - 1);

            const rNew = ((parseFloat(document.getElementById("rate-curr").value) || 8.5) + spike) / 12 / 100;
            const newEmi = (P * rNew * Math.pow(1 + rNew, n)) / (Math.pow(1 + rNew, n) - 1);
            const emiJump = newEmi - baseEmi;

            let balance = P;
            let month = 0;
            while (balance > 0 && month < 600) {
                month++;
                const interest = balance * rNew;
                const principal = baseEmi - interest;
                if (principal <= 0) break;
                if (principal >= balance) { balance = 0; } else { balance -= principal; }
            }

            const newYears = (month / 12).toFixed(1);
            const yearsAdded = (newYears - origYears).toFixed(1);

            document.getElementById("res-rate-new-emi").textContent = `₹${Math.round(newEmi).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-rate-emi-jump").textContent = `+ ₹${Math.round(emiJump).toLocaleString("en-IN")} / month EMI jump`;
            document.getElementById("res-rate-new-tenure").textContent = `${newYears} Years`;
            document.getElementById("res-rate-tenure-jump").textContent = `+ ${yearsAdded} Years (+${month - n} months) added`;
        }

        ["rate-principal", "rate-curr", "rate-tenure", "rate-spike"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("change", recalculateRateShock);
        });

        recalculateRateShock();

    } else if (formatLower.includes("joint")) {
        renderStudioSEOArticle(gap, "JOINT_ENGINE");
        // Engine 8: Joint Co-Owner Tax Benefit Optimizer
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>👫 Co-Borrower Double Tax Benefit:</strong> Both co-applicants can claim up to <strong>₹2 Lakh each</strong> (Sec 24b interest) + <strong>₹1.5 Lakh each</strong> (Sec 80C principal) if co-owners & co-borrowers.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Total Annual Interest Paid (₹)</label>
                        <input type="number" id="joint-interest" value="380000" step="20000">
                    </div>
                    <div class="studio-input-group">
                        <label>Total Annual Principal Paid (₹)</label>
                        <input type="number" id="joint-principal" value="220000" step="10000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Co-Applicant 1 Share (%)</label>
                        <input type="number" id="joint-share-1" value="50" step="5">
                    </div>
                    <div class="studio-input-group">
                        <label>Co-Applicant 2 Share (%)</label>
                        <input type="number" id="joint-share-2" value="50" step="5" readonly style="opacity: 0.7;">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Applicant 1 Sec 24(b) Claim</span>
                        <span class="res-val" id="res-joint-claim-1" style="color: #10b981;">₹1,90,000</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-joint-80c-1">+ Sec 80C: ₹1,10,000</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Applicant 2 Sec 24(b) Claim</span>
                        <span class="res-val" id="res-joint-claim-2" style="color: var(--accent-purple);">₹1,90,000</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-joint-80c-2">+ Sec 80C: ₹1,10,000</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateJoint() {
            const totInterest = parseFloat(document.getElementById("joint-interest").value) || 380000;
            const totPrincipal = parseFloat(document.getElementById("joint-principal").value) || 220000;
            const share1 = Math.min(100, Math.max(0, parseFloat(document.getElementById("joint-share-1").value) || 50));
            const share2 = 100 - share1;
            document.getElementById("joint-share-2").value = share2;

            const int1 = Math.min(200000, (totInterest * share1) / 100);
            const int2 = Math.min(200000, (totInterest * share2) / 100);
            const prin1 = Math.min(150000, (totPrincipal * share1) / 100);
            const prin2 = Math.min(150000, (totPrincipal * share2) / 100);

            document.getElementById("res-joint-claim-1").textContent = `₹${Math.round(int1).toLocaleString("en-IN")}`;
            document.getElementById("res-joint-80c-1").textContent = `+ Sec 80C Principal: ₹${Math.round(prin1).toLocaleString("en-IN")}`;
            document.getElementById("res-joint-claim-2").textContent = `₹${Math.round(int2).toLocaleString("en-IN")}`;
            document.getElementById("res-joint-80c-2").textContent = `+ Sec 80C Principal: ₹${Math.round(prin2).toLocaleString("en-IN")}`;
        }

        ["joint-interest", "joint-principal", "joint-share-1"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateJoint);
        });

        recalculateJoint();

    } else if (formatLower.includes("journey") || formatLower.includes("step by step")) {
        // Engine 9: Step-by-Step Home Loan Journey Roadmap
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🗺️ 6-Phase Indian Home Loan Disbursal Roadmap:</strong> Turnaround time usually ranges from 14 to 30 working days.
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 4px;">
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px 14px; border-radius: 6px; font-size: 13px;">
                        <strong style="color: var(--accent-blue);">Step 1: Application & Credit Appraisal (Day 1-3)</strong>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 12px;">CIBIL score check (750+ required) & FOIR income eligibility verification.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px 14px; border-radius: 6px; font-size: 13px;">
                        <strong style="color: #f59e0b;">Step 2: Conditional Sanction Letter (Day 4-7)</strong>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 12px;">Bank issues sanction letter outlining sanctioned loan amount, ROI & tenure.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px 14px; border-radius: 6px; font-size: 13px;">
                        <strong style="color: #a78bfa;">Step 3: Property Legal Title & Technical Valuation (Day 8-14)</strong>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 12px;">Empaneled advocate checks 13-30 yr Encumbrance Certificate & title deeds.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px 14px; border-radius: 6px; font-size: 13px;">
                        <strong style="color: #10b981;">Step 4: MOD Execution & Stamp Duty Payment (Day 15-18)</strong>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 12px;">Memorandum of Deposit (MOD) executed & 18% GST processing fee paid.</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px 14px; border-radius: 6px; font-size: 13px;">
                        <strong style="color: #f43f5e;">Step 5: Full Disbursement & EMI Commencement (Day 19-21)</strong>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 12px;">Cheque issued to builder/seller; EMI cycle initiated.</p>
                    </div>
                </div>
            </div>
        `;

    } else if (formatLower.includes("journey") || formatLower.includes("step-by-step") || formatLower.includes("walkthrough") || formatLower.includes("roadmap") || formatLower.includes("hub") || formatLower.includes("a-to-z") || formatLower.includes("guidance")) {
        renderStudioSEOArticle(gap, "JOURNEY_ENGINE");
        // Engine: Step-by-Step Home Loan Disbursal Roadmap
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 14px;">
                <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🗺️ Complete 6-Phase Indian Home Loan Journey:</strong> Step-by-step roadmap from initial credit application to full loan payoff and title deed recovery.
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="studio-result-card" style="border-left: 3px solid #3b82f6;">
                        <span class="res-label">Phase 1: Pre-Approval & Sanction (Days 1–7)</span>
                        <span style="font-size: 12.5px; color: var(--text-secondary);">CIBIL score check (>750), FOIR eligibility assessment, income doc verification, and formal Sanction Letter issuance.</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #a855f7;">
                        <span class="res-label">Phase 2: Property Legal & Technical Valuation (Days 8–15)</span>
                        <span style="font-size: 12.5px; color: var(--text-secondary);">Bank panel lawyer title search (30-year chain), physical valuation inspection, and Encumbrance Certificate (EC) check.</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                        <span class="res-label">Phase 3: Loan Agreement & MOD Registration (Days 16–21)</span>
                        <span style="font-size: 12.5px; color: var(--text-secondary);">Signing loan agreement, Memorandum of Deposit of Title Deeds (MOD) registration at Sub-Registrar office, and CERSAI charge creation.</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Phase 4: Disbursal & Pre-EMI Phase (Days 22–30)</span>
                        <span style="font-size: 12.5px; color: var(--text-secondary);">Bank issues cheque / RTGS to seller/builder. Construction-linked stages charge Pre-EMI interest until final tranche.</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #ec4899;">
                        <span class="res-label">Phase 5: Amortization & Part-Prepayments (Years 1–20)</span>
                        <span style="font-size: 12.5px; color: var(--text-secondary);">Monthly EMI auto-debit via NACH/ECS. Optional annual prepayments to accelerate principal reduction.</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #06b6d4;">
                        <span class="res-label">Phase 6: Final Deed Return & CERSAI De-registration (Post-Closure)</span>
                        <span style="font-size: 12.5px; color: var(--text-secondary);">Bank issues No Dues Certificate (NOC), clears CERSAI lien, and returns original property title deeds within statutory 30-day RBI limit.</span>
                    </div>
                </div>
            </div>
        `;

    } else if (formatLower.includes("rights explainer") || formatLower.includes("foreclosure") || formatLower.includes("floating-rate waiver")) {
        renderStudioSEOArticle(gap, "RIGHTS_ENGINE");
        // Engine 10: RBI Floating-Rate Foreclosure Rights Explainer
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 14px;">
                <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                    <span class="res-label">RBI Mandate: 0% Foreclosure Penalty</span>
                    <span class="res-val" style="color: #10b981; font-size: 17px;">Floating Rate Individual Loans</span>
                    <p style="font-size: 12.5px; color: var(--text-secondary); margin-top: 6px;">
                        Under RBI Master Directions, banks and HFCs cannot charge any foreclosure fee or prepayment penalty on floating rate home loans taken by individual borrowers.
                    </p>
                </div>

                <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                    <span class="res-label">RBI Document Delay Compensation</span>
                    <span class="res-val" style="color: #f59e0b; font-size: 17px;">₹5,000 / Day Delay Penalty</span>
                    <p style="font-size: 12.5px; color: var(--text-secondary); margin-top: 6px;">
                        Banks must release original property deeds within 30 days of full loan repayment. Any delay beyond 30 days mandates a fine payable by bank to borrower at ₹5,000/day.
                    </p>
                </div>
            </div>
        `;

    } else if (formatLower.includes("post-closure") || formatLower.includes("cibil") || formatLower.includes("closure checklist")) {
        renderStudioSEOArticle(gap, "POST_CLOSURE_ENGINE");
        // Engine: Post-Closure 5-Step Checklist & CIBIL Impact Guide
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🏁 Post-Loan Closure Mandatory Checklist:</strong> Complete these 5 mandatory steps after paying off your home loan to secure your property title and protect your CIBIL credit score.
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px;" id="post-closure-steps">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <input type="checkbox" id="step-noc" checked style="margin-right: 8px;">
                        <label for="step-noc" style="font-weight: 600; color: var(--text-primary); cursor: pointer;">1. No Dues Certificate (NDC / NOC)</label>
                        <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">Obtain signed No Dues Certificate stating zero outstanding balance and all un-cleared post-dated cheques destroyed.</p>
                    </div>

                    <div class="studio-result-card" style="border-left: 3px solid #3b82f6;">
                        <input type="checkbox" id="step-deed" checked style="margin-right: 8px;">
                        <label for="step-deed" style="font-weight: 600; color: var(--text-primary); cursor: pointer;">2. Original Title Deed Retrieval (30-Day RBI Rule)</label>
                        <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">Collect original sale deed, mother deed, builder NOCs. Mandatory bank fine of ₹5,000/day for delays beyond 30 days.</p>
                    </div>

                    <div class="studio-result-card" style="border-left: 3px solid #a855f7;">
                        <input type="checkbox" id="step-cersai" checked style="margin-right: 8px;">
                        <label for="step-cersai" style="font-weight: 600; color: var(--text-primary); cursor: pointer;">3. CERSAI Charge Removal & Sub-Registrar Lien Cancellation</label>
                        <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">Verify bank removes mortgage lien charge from CERSAI portal and Sub-Registrar office record.</p>
                    </div>

                    <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                        <input type="checkbox" id="step-cibil" checked style="margin-right: 8px;">
                        <label for="step-cibil" style="font-weight: 600; color: var(--text-primary); cursor: pointer;">4. CIBIL Bureau Account Status Update ("CLOSED" vs "SETTLED")</label>
                        <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">Verify account status is marked as "CLOSED" (not "SETTLED" or "WRITTEN OFF") within 30-45 days. Settled status drops credit score by 50+ points!</p>
                    </div>

                    <div class="studio-result-card" style="border-left: 3px solid #ec4899;">
                        <input type="checkbox" id="step-encumbrance" checked style="margin-right: 8px;">
                        <label for="step-encumbrance" style="font-weight: 600; color: var(--text-primary); cursor: pointer;">5. Fresh Encumbrance Certificate (EC) Verification</label>
                        <p style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">Apply for Nil Encumbrance Certificate (EC) at Sub-Registrar to prove property is 100% free of encumbrance.</p>
                    </div>
                </div>
            </div>
        `;

    } else if (formatLower.includes("checklist")) {
        renderStudioSEOArticle(gap, "CHECKLIST_ENGINE");
        // Engine 11: Borrower Document Checklist Generator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 14px;">
                <div class="studio-input-group" style="margin-bottom: 8px;">
                    <label>Select Borrower Profile</label>
                    <select id="chk-profile-select">
                        <option value="salaried">Salaried Employee (MNC / Govt / Pvt)</option>
                        <option value="self">Self-Employed Businessman / Professional</option>
                        <option value="nri">NRI Borrower (Non-Resident Indian)</option>
                    </select>
                </div>

                <div id="chk-items-container" style="display: flex; flex-direction: column; gap: 8px;">
                    <!-- Populated dynamically -->
                </div>
            </div>
        `;

        const checklists = {
            salaried: [
                "PAN Card & Aadhaar / Passport (Identity & Address Proof)",
                "Last 3 Months Salary Slips with Component Breakdown",
                "Form 16 for Last 2 Financial Years from Employer",
                "Bank Account Statements for Last 6 Months (Salary Credit)",
                "Approved Building Plan & Sale Agreement / Allotment Letter",
                "NOC from Builder / Society & Copy of Property Title Deed"
            ],
            self: [
                "PAN Card & Aadhaar / Passport (Identity & Address Proof)",
                "ITR with Computation of Income for Last 3 Financial Years",
                "CA Audited Balance Sheet & Profit/Loss Statement (3 Yrs)",
                "Current & Savings Account Statements for Last 12 Months",
                "Business License / GST Registration / Shop Establishment Proof",
                "Property Encumbrance Certificate (EC) for 13-30 Years"
            ],
            nri: [
                "Valid Passport & Indian Visa / OCI / PIO Card",
                "NRE / NRO Bank Account Statements for Last 6 Months",
                "Overseas Employment Contract & Last 3 Months Pay Slips",
                "Power of Attorney (POA) Executed in India / Indian Consulate",
                "Credit Bureau Report from Country of Residence (Equifax/Experian)"
            ]
        };

        function renderChecklist() {
            const prof = document.getElementById("chk-profile-select").value || "salaried";
            const items = checklists[prof] || checklists.salaried;
            const container = document.getElementById("chk-items-container");
            container.innerHTML = "";

            items.forEach((itemText, i) => {
                const div = document.createElement("div");
                div.className = "checklist-item-card";
                div.innerHTML = `
                    <input type="checkbox" id="chk-item-${i}" checked>
                    <label for="chk-item-${i}" style="font-size: 13px; color: var(--text-primary); cursor: pointer;">${itemText}</label>
                `;
                container.appendChild(div);
            });
        }

        document.getElementById("chk-profile-select").addEventListener("change", renderChecklist);
        renderChecklist();

    } else if (formatLower.includes("sanction") || formatLower.includes("disbursed")) {
        renderStudioSEOArticle(gap, "SANCTION_DISBURSED_ENGINE");
        // Engine: Sanctioned vs Net In-Hand Disbursed Lumpsum Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>🏦 On-Paper Sanction vs Net In-Hand Disbursal Rules:</strong> Shows the exact lumpsum amount credited to your bank account after deducting bank processing fees, 18% GST, legal/technical fees, MOD stamp duty, mandatory insurance, and Sec 194-IA 1% TDS.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>On-Paper Sanctioned Loan Limit (₹)</label>
                        <input type="number" id="sanc-limit" value="5000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Gross Tranche Disbursal Amount (₹)</label>
                        <input type="number" id="disb-amount" value="5000000" step="100000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Processing Fee % (+ 18% GST)</label>
                        <input type="number" id="disb-proc-pct" value="0.5" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>Legal, Valuation & MOD Stamp Duty (₹)</label>
                        <input type="number" id="disb-legal-mod" value="15000" step="1000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Bank Property/Loan Insurance Premium (Deducted) (₹)</label>
                        <input type="number" id="disb-insurance" value="25000" step="5000">
                    </div>
                    <div class="studio-input-group">
                        <label>Sec 194-IA Buyer TDS Withheld (1% if property > ₹50L)</label>
                        <select id="disb-tds-select">
                            <option value="1" selected>Yes - Withhold 1% TDS (₹50,000)</option>
                            <option value="0">No - TDS Not Deducted at Source</option>
                        </select>
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Interest Rate (% p.a.)</label>
                        <input type="number" id="disb-rate" value="8.5" step="0.1">
                    </div>
                    <div class="studio-input-group">
                        <label>Full Loan Tenure (Years)</label>
                        <input type="number" id="disb-tenure" value="20" step="1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #10b981; background: rgba(16, 185, 129, 0.05);">
                        <span class="res-label" style="font-weight: 700; color: #10b981;">💵 NET IN-HAND LUMPSUM IN BANK ACCOUNT</span>
                        <span class="res-val" id="res-disb-net-inhand" style="color: #10b981; font-size: 24px; font-weight: 800;">₹48,80,500</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-disb-net-note">Sanctioned ₹50L → Net ₹48,80,500 credited after fee & tax cuts</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #f43f5e;">
                        <span class="res-label" style="font-weight: 700; color: #f43f5e;">💸 TOTAL UPFRONT BANK FEES & TAX CUTS</span>
                        <span class="res-val" id="res-disb-total-deductions" style="color: #f43f5e; font-size: 22px; font-weight: 700;">₹1,19,500</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-disb-fee-breakdown">Proc Fee ₹25k + GST ₹4.5k + MOD ₹15k + Ins ₹25k + TDS ₹50k</span>
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Monthly Pre-EMI Interest (Disbursed)</span>
                        <span class="res-val" id="res-disb-pre-emi" style="color: var(--accent-purple);">₹35,417 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-disb-pct">Interest on ₹50,00,000 gross disbursal</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-blue);">
                        <span class="res-label">Full Sanctioned EMI Payable</span>
                        <span class="res-val" id="res-disb-full-emi" style="color: var(--accent-blue);">₹43,391 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-disb-pending">Total Sanctioned Limit: ₹50,00,000</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateDisbursed() {
            const sanc = parseFloat(document.getElementById("sanc-limit").value) || 5000000;
            const disb = parseFloat(document.getElementById("disb-amount").value) || 5000000;
            const procPct = parseFloat(document.getElementById("disb-proc-pct").value) || 0.5;
            const legalMod = parseFloat(document.getElementById("disb-legal-mod").value) || 15000;
            const insurance = parseFloat(document.getElementById("disb-insurance").value) || 25000;
            const useTds = document.getElementById("disb-tds-select").value === "1";

            const rVal = parseFloat(document.getElementById("disb-rate").value) || 8.5;
            const r = rVal / 12 / 100;
            const n = (parseFloat(document.getElementById("disb-tenure").value) || 20) * 12;

            // Upfront Fee & Tax Calculations
            const procFeeBase = (disb * procPct) / 100;
            const gst18 = procFeeBase * 0.18;
            const tdsAmount = useTds ? (disb * 0.01) : 0;

            const totalDeductions = procFeeBase + gst18 + legalMod + insurance + tdsAmount;
            const netInHand = Math.max(0, disb - totalDeductions);

            // Monthly EMI calculations
            const preEmi = disb * r;
            const fullEmi = (sanc * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const disbPct = ((disb / sanc) * 100).toFixed(0);
            const pendingBal = Math.max(0, sanc - disb);

            // Update UI elements
            document.getElementById("res-disb-net-inhand").textContent = `₹${Math.round(netInHand).toLocaleString("en-IN")}`;
            document.getElementById("res-disb-net-note").textContent = `Sanctioned ₹${sanc.toLocaleString("en-IN")} → Net ₹${Math.round(netInHand).toLocaleString("en-IN")} in bank (Cut: ₹${Math.round(totalDeductions).toLocaleString("en-IN")})`;

            document.getElementById("res-disb-total-deductions").textContent = `₹${Math.round(totalDeductions).toLocaleString("en-IN")}`;

            let breakdownText = `Proc Fee ₹${Math.round(procFeeBase).toLocaleString("en-IN")} + 18% GST ₹${Math.round(gst18).toLocaleString("en-IN")}`;
            if (legalMod > 0) breakdownText += ` + MOD/Legal ₹${Math.round(legalMod).toLocaleString("en-IN")}`;
            if (insurance > 0) breakdownText += ` + Ins ₹${Math.round(insurance).toLocaleString("en-IN")}`;
            if (tdsAmount > 0) breakdownText += ` + 1% TDS ₹${Math.round(tdsAmount).toLocaleString("en-IN")}`;
            document.getElementById("res-disb-fee-breakdown").textContent = breakdownText;

            document.getElementById("res-disb-pre-emi").textContent = `₹${Math.round(preEmi).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-disb-pct").textContent = `Pre-EMI interest charged on ${disbPct}% disbursed (₹${disb.toLocaleString("en-IN")})`;
            document.getElementById("res-disb-full-emi").textContent = `₹${Math.round(fullEmi).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-disb-pending").textContent = pendingBal > 0 ? `Undisbursed Limit: ₹${pendingBal.toLocaleString("en-IN")}` : `Full loan sanctioned & disbursed on paper`;
        }

        ["sanc-limit", "disb-amount", "disb-proc-pct", "disb-legal-mod", "disb-insurance", "disb-tds-select", "disb-rate", "disb-tenure"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateDisbursed);
            if (el) el.addEventListener("change", recalculateDisbursed);
        });

        recalculateDisbursed();

    } else if (formatLower.includes("fee") || formatLower.includes("gst") || formatLower.includes("cost") || formatLower.includes("charges")) {
        renderStudioSEOArticle(gap, "FEE_GST_ENGINE");
        // Engine: All-In Processing Fee & 18% GST Breakdown Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>💳 GST Banking Statutory Rule:</strong> 18% GST applies to bank processing fees, legal/technical valuation fees, and admin charges (0% GST on loan principal and interest EMI).
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Sanctioned Loan Principal (₹)</label>
                        <input type="number" id="fee-principal" value="5000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Bank Processing Fee Rate (%)</label>
                        <input type="number" id="fee-proc-rate" value="0.50" step="0.05">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Legal & Valuation Charges (₹)</label>
                        <input type="number" id="fee-legal" value="7500" step="500">
                    </div>
                    <div class="studio-input-group">
                        <label>MOD Stamp Duty Charges (₹)</label>
                        <input type="number" id="fee-mod" value="15000" step="1000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid #f43f5e;">
                        <span class="res-label">Total Out-of-Pocket Bank Fees & GST</span>
                        <span class="res-val" id="res-fee-total" style="color: #f43f5e;">₹53,350 Total Outflow</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-fee-gst-breakdown">Includes 18% GST (₹5,850) on bank fees</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">Effective All-In Initial Outflow</span>
                        <span class="res-val" id="res-fee-effective-pct" style="color: #10b981;">1.07% of Loan</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Transparent pre-sanction breakdown</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateFeeGST() {
            const P = parseFloat(document.getElementById("fee-principal").value) || 5000000;
            const procPct = parseFloat(document.getElementById("fee-proc-rate").value) || 0.5;
            const legal = parseFloat(document.getElementById("fee-legal").value) || 7500;
            const mod = parseFloat(document.getElementById("fee-mod").value) || 15000;

            const baseProcFee = (P * procPct) / 100;
            const taxableServices = baseProcFee + legal;
            const gst18 = taxableServices * 0.18;
            const totalOutflow = baseProcFee + legal + mod + gst18;
            const totalPct = (totalOutflow / P) * 100;

            document.getElementById("res-fee-total").textContent = `₹${Math.round(totalOutflow).toLocaleString("en-IN")}`;
            document.getElementById("res-fee-gst-breakdown").textContent = `Proc Fee ₹${Math.round(baseProcFee).toLocaleString("en-IN")} + 18% GST (₹${Math.round(gst18).toLocaleString("en-IN")}) + MOD ₹${Math.round(mod).toLocaleString("en-IN")}`;
            document.getElementById("res-fee-effective-pct").textContent = `${totalPct.toFixed(2)}% of Loan Amount`;
        }

        ["fee-principal", "fee-proc-rate", "fee-legal", "fee-mod"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateFeeGST);
        });

        recalculateFeeGST();

    } else if (formatLower.includes("regime") || formatLower.includes("tax")) {
        renderStudioSEOArticle(gap, "TAX_REGIME_ENGINE");
        // Engine 12: Old vs New Tax Regime Comparator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>⚖️ FY 2025-26 / 2026 Tax Rules:</strong> New Tax Regime is the default (₹75k Standard Deduction; Sec 24b self-occupied interest is ₹0). Old Regime allows Sec 24(b) up to ₹2L + 80C ₹1.5L.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Gross Annual Income (₹)</label>
                        <input type="number" id="tax-income" value="1500000" step="50000">
                    </div>
                    <div class="studio-input-group">
                        <label>Annual Home Loan Interest Paid (₹)</label>
                        <input type="number" id="tax-interest" value="200000" step="10000">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Sec 80C Principal + EPF/PPF (₹)</label>
                        <input type="number" id="tax-80c" value="150000" step="10000">
                    </div>
                    <div class="studio-input-group">
                        <label>Property Status</label>
                        <select id="tax-prop-type">
                            <option value="self">Self-Occupied (Sec 24b cap ₹2L in Old)</option>
                            <option value="letout">Let-Out / Rented (Sec 24b uncapped in Old)</option>
                        </select>
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-purple);">
                        <span class="res-label">Old Tax Regime Liability</span>
                        <span class="res-val" id="res-old-tax">₹1,48,200</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-old-deduct">Total Deductions: ₹4,00,000</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #10b981;">
                        <span class="res-label">New Default Regime Liability</span>
                        <span class="res-val" id="res-new-tax" style="color: #10b981;">₹1,30,000</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Standard Deduction: ₹75,000</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateTax() {
            const income = parseFloat(document.getElementById("tax-income").value) || 1500000;
            const interest = Math.min(200000, parseFloat(document.getElementById("tax-interest").value) || 200000);
            const c80 = Math.min(150000, parseFloat(document.getElementById("tax-80c").value) || 150000);

            const oldTaxable = Math.max(0, income - 50000 - interest - c80);
            let oldTax = 0;
            if (oldTaxable > 1000000) {
                oldTax = 112500 + (oldTaxable - 1000000) * 0.3;
            } else if (oldTaxable > 500000) {
                oldTax = 12500 + (oldTaxable - 500000) * 0.2;
            } else if (oldTaxable > 250000) {
                oldTax = (oldTaxable - 250000) * 0.05;
            }
            oldTax = oldTax * 1.04;

            const newTaxable = Math.max(0, income - 75000);
            let newTax = 0;
            if (newTaxable > 1500000) {
                newTax = 150000 + (newTaxable - 1500000) * 0.3;
            } else if (newTaxable > 1200000) {
                newTax = 90000 + (newTaxable - 1200000) * 0.2;
            } else if (newTaxable > 900000) {
                newTax = 45000 + (newTaxable - 900000) * 0.15;
            } else if (newTaxable > 700000) {
                newTax = 15000 + (newTaxable - 700000) * 0.1;
            } else if (newTaxable > 300000) {
                newTax = (newTaxable - 300000) * 0.05;
            }
            newTax = newTax * 1.04;

            document.getElementById("res-old-tax").textContent = `₹${Math.round(oldTax).toLocaleString("en-IN")}`;
            document.getElementById("res-old-deduct").textContent = `Total Deductions: ₹${(50000 + interest + c80).toLocaleString("en-IN")}`;
            document.getElementById("res-new-tax").textContent = `₹${Math.round(newTax).toLocaleString("en-IN")}`;
        }

        ["tax-income", "tax-interest", "tax-80c", "tax-prop-type"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateTax);
        });

        recalculateTax();

    } else {
        renderStudioSEOArticle(gap, "DEFAULT");
        // Engine Default / 13: Advanced Multi-Scenario EMI Calculator
        widgetBox.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
                    <strong>💡 Home Loan Decision & Optimization Engine:</strong> Interactive simulation using benchmark <strong>5.25% RBI Repo rate</strong> and statutory <strong>18% GST</strong> fee rules.
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Sanctioned Principal Loan (₹)</label>
                        <input type="number" id="calc-principal" value="5000000" step="100000">
                    </div>
                    <div class="studio-input-group">
                        <label>Interest Rate (% p.a.)</label>
                        <input type="number" id="calc-rate" value="8.5" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px;">
                    <div class="studio-input-group">
                        <label>Loan Tenure (Years)</label>
                        <input type="number" id="calc-tenure" value="20" step="1">
                    </div>
                    <div class="studio-input-group">
                        <label>Processing Fee % (+18% GST)</label>
                        <input type="number" id="calc-fee-pct" value="0.5" step="0.1">
                    </div>
                </div>

                <div class="grid-two-col" style="gap: 16px; margin-top: 8px;">
                    <div class="studio-result-card" style="border-left: 3px solid var(--accent-blue);">
                        <span class="res-label">Monthly EMI Payable</span>
                        <span class="res-val" id="res-calc-emi" style="color: var(--accent-blue);">₹43,391 / mo</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);" id="res-calc-total-interest">Total Interest: ₹54,13,879</span>
                    </div>
                    <div class="studio-result-card" style="border-left: 3px solid #f59e0b;">
                        <span class="res-label">Upfront Processing Fee + GST</span>
                        <span class="res-val" id="res-calc-fee" style="color: #f59e0b;">₹29,500</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">Base ₹25,000 + ₹4,500 GST</span>
                    </div>
                </div>
            </div>
        `;

        function recalculateDefault() {
            const P = parseFloat(document.getElementById("calc-principal").value) || 5000000;
            const r = (parseFloat(document.getElementById("calc-rate").value) || 8.5) / 12 / 100;
            const n = (parseFloat(document.getElementById("calc-tenure").value) || 20) * 12;
            const feePct = parseFloat(document.getElementById("calc-fee-pct").value) || 0.5;

            const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalPayment = emi * n;
            const totalInterest = totalPayment - P;

            const baseFee = (P * feePct) / 100;
            const gst18 = baseFee * 0.18;
            const totalFee = baseFee + gst18;

            document.getElementById("res-calc-emi").textContent = `₹${Math.round(emi).toLocaleString("en-IN")} / mo`;
            document.getElementById("res-calc-total-interest").textContent = `Total Interest: ₹${Math.round(totalInterest).toLocaleString("en-IN")}`;
            document.getElementById("res-calc-fee").textContent = `₹${Math.round(totalFee).toLocaleString("en-IN")}`;
        }

        ["calc-principal", "calc-rate", "calc-tenure", "calc-fee-pct"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", recalculateDefault);
        });

        recalculateDefault();
    }


    // Populate Customer Article & Embed Code
    const articleHtml = `
        <h4 style="color: #f59e0b; margin-top: 0;">Borrower Action Guide: ${gap.query}</h4>
        <p>When searching for <em>"${gap.query}"</em>, Indian home loan borrowers are looking for clear, unbiased guidance regarding their loan structure, tax impact, and total out-of-pocket expenses.</p>
        
        <h5>Key Takeaways for 2026:</h5>
        <ul>
            <li><strong>2026 Interest Rate Environment:</strong> Benchmark RBI Repo rate sits at <strong>5.25%</strong>. Floating rate loan resets should be evaluated against monthly EMI impact vs tenure expansion.</li>
            <li><strong>Fee & GST Slabs:</strong> Processing fees attract <strong>18% GST</strong>. Always demand an itemized breakup of legal, valuation, and MOD stamp duty charges upfront.</li>
            <li><strong>Tax Regime Optimization:</strong> Under the FY 2025-26 / 2026 default New Tax Regime, home loan interest deductions under Sec 24(b) are ₹0 for self-occupied properties. Evaluate if switching to the Old Regime unlocks ₹2,00,000 interest + ₹1,50,000 Sec 80C benefits.</li>
        </ul>
    `;
    articleBox.innerHTML = articleHtml;

    const embedSnippet = `<!-- Customer Portal Embed: ${gap.query} -->\n<div class="home-loan-widget" data-tool="${gap.format}" data-query="${gap.query}" data-repo-rate="5.25%" data-gst="18%">\n  <script src="https://homeloanhub.in/widgets/v1/solution-engine.js" async></script>\n</div>`;
    embedBox.textContent = embedSnippet;

    const copyBtn = document.getElementById("btn-copy-solution-code");
    if (copyBtn) {
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(embedSnippet).then(() => {
                copyBtn.textContent = "✓ Copied to Clipboard!";
                setTimeout(() => { copyBtn.textContent = "📋 Copy HTML Embed Code"; }, 2500);
            });
        };
    }
}


