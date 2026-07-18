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
    
    // Set current date
    const dateOpts = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").textContent = new Date().toLocaleDateString('en-US', dateOpts);
});

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
        payoff: ["Loan Payoff Planner", "Interactive acceleration strategies (Avalanche vs. Snowball) with prepayment compounding."]
    };

    menuButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            
            // Toggle active menu button
            menuButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Toggle active tab pane
            tabPanes.forEach(pane => pane.classList.remove("active"));
            document.getElementById(`tab-${tabId}`).classList.add("active");
            
            // Update titles
            if (titles[tabId]) {
                pageTitle.textContent = titles[tabId][0];
                pageSubtitle.textContent = titles[tabId][1];
            }
            
            // Specific tab initializations/animations
            if (tabId === "dashboard") {
                animateCharts();
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

// 3. Social listening log render & search filter
function initSocialLog() {
    const tableBody = document.getElementById("social-table-body");
    const searchInput = document.getElementById("social-search");
    const themeSelect = document.getElementById("social-filter-theme");
    const sentimentSelect = document.getElementById("social-filter-sentiment");
    
    // Populate theme dropdown options
    const uniqueThemes = [...new Set(socialLog.map(item => item.theme))].sort();
    uniqueThemes.forEach(theme => {
        const opt = document.createElement("option");
        opt.value = theme;
        opt.textContent = theme;
        themeSelect.appendChild(opt);
    });
    
    // Render logs
    function renderSocialLogs() {
        const searchVal = searchInput.value.toLowerCase();
        const themeVal = themeSelect.value;
        const sentimentVal = sentimentSelect.value;
        
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
            tableBody.innerHTML = `<tr><td colspan="8" class="text-center" style="text-align: center; padding: 40px; color: var(--text-muted);">No consumer statements found matching the filters.</td></tr>`;
            return;
        }
        
        filtered.forEach(item => {
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
            
            tr.innerHTML = `
                <td style="white-space: nowrap;">${item.date}</td>
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
            `;
            tableBody.appendChild(tr);
        });
    }
    
    // Attach event listeners
    searchInput.addEventListener("input", renderSocialLogs);
    themeSelect.addEventListener("change", renderSocialLogs);
    sentimentSelect.addEventListener("change", renderSocialLogs);
    
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

// 5. Search Intent Gaps list render & calculation
function initSearchGaps() {
    const tableBody = document.getElementById("search-table-body");
    const searchInput = document.getElementById("search-gap-search");
    
    function renderSearchGaps() {
        const searchVal = searchInput.value.toLowerCase();
        tableBody.innerHTML = "";
        
        // Map data, calculating Gap Score dynamically
        // Formula: Gap = VolumeWeight * (6 - answerQuality)
        // Let's normalize volume weight. In sheet, the Gap Score is calculated as Volume * (6 - answerQuality)
        // Since volumes are in thousands, we can display exactly how it is in the sheet, e.g. Volume * (6 - quality)
        const mappedGaps = searchIntentGaps.map(item => {
            const gapScore = item.volume * (6 - item.quality);
            return {
                ...item,
                gapScore: gapScore
            };
        }).sort((a, b) => b.gapScore - a.gapScore);
        
        const filtered = mappedGaps.filter(item => {
            return item.query.toLowerCase().includes(searchVal) || 
                   item.format.toLowerCase().includes(searchVal) ||
                   item.type.toLowerCase().includes(searchVal);
        });
        
        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" class="text-center" style="text-align: center; padding: 40px; color: var(--text-muted);">No search gaps found matching query.</td></tr>`;
            return;
        }
        
        filtered.forEach(item => {
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
            
            // Display formatted Gap Score (Volume weight representation)
            // If Gap score is high (e.g. > 30000), let's render it bold and color it purple/red
            let gapColor = "var(--text-primary)";
            let gapWeight = "600";
            if (item.gapScore >= 35000) {
                gapColor = "#f43f5e"; // hot red
                gapWeight = "700";
            } else if (item.gapScore >= 20000) {
                gapColor = "#fb923c"; // orange
            }
            
            tr.innerHTML = `
                <td style="font-weight: 500; color: var(--text-primary); font-size: 13.5px;"><em>"${item.query}"</em></td>
                <td class="number" style="font-weight: 600;">${item.volume.toLocaleString("en-IN")}</td>
                <td><span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">${item.type}</span></td>
                <td class="number" style="white-space: nowrap;">${qualityStars} <span style="font-size: 11px; color: var(--text-muted); margin-left: 4px;">(${item.quality}/5)</span></td>
                <td class="number" style="color: ${gapColor}; font-weight: ${gapWeight}; font-size: 14.5px;">${item.gapScore.toLocaleString("en-IN")}</td>
                <td style="font-weight: 500; color: var(--accent-purple);">${item.format}</td>
            `;
            tableBody.appendChild(tr);
        });
    }
    
    searchInput.addEventListener("input", renderSearchGaps);
    renderSearchGaps();
}

// 6. Opportunities RICE table sorter
let currentSortColumn = "rice";
let currentSortOrder = "desc";

function initOpportunities() {
    const tableBody = document.getElementById("opps-table-body");
    const headers = document.querySelectorAll("#opps-table th.sortable");
    
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
        
        processedOpps.forEach(opp => {
            const tr = document.createElement("tr");
            
            // Format priority badge
            const priorityClass = `badge ${opp.priority.toLowerCase()}`;
            
            tr.innerHTML = `
                <td style="font-weight: 600; color: var(--text-primary); font-size: 13.5px;">${opp.name}</td>
                <td class="number">${opp.reach}</td>
                <td class="number">${opp.impact}</td>
                <td class="number">${opp.confidence}</td>
                <td class="number" style="font-weight: 600;">${opp.effort}</td>
                <td class="number" style="font-weight: 700; color: var(--accent-purple); font-size: 15px;">${opp.rice.toFixed(1)}</td>
                <td style="text-align: center;"><span class="${priorityClass}">${opp.priority}</span></td>
                <td style="font-size: 12.5px; font-weight: 500; color: var(--text-secondary);">${opp.evidence}</td>
            `;
            tableBody.appendChild(tr);
        });
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
            const response = await fetch("/api/scan", {
                method: "POST"
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

function initPayoffPlanner() {
    const nameInput = document.getElementById("payoff-loan-name");
    const balanceInput = document.getElementById("payoff-loan-balance");
    const rateInput = document.getElementById("payoff-loan-rate");
    const emiInput = document.getElementById("payoff-loan-emi");
    const addBtn = document.getElementById("payoff-add-loan-btn");
    const calcBtn = document.getElementById("payoff-calculate-btn");
    
    // Add loan event listener
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const name = nameInput.value.trim();
            const balance = parseFloat(balanceInput.value);
            const rate = parseFloat(rateInput.value);
            const emi = parseFloat(emiInput.value);
            
            if (!name || isNaN(balance) || isNaN(rate) || isNaN(emi) || balance <= 0 || rate <= 0 || emi <= 0) {
                alert("Please enter valid positive values for all loan fields.");
                return;
            }
            
            plannerLoans.push({
                id: Date.now(),
                name: name,
                balance: balance,
                rate: rate,
                emi: emi
            });
            
            renderPlannerLoans();
            
            // Clear inputs
            nameInput.value = "";
            balanceInput.value = "";
            rateInput.value = "";
            emiInput.value = "";
        });
    }
    
    // Calculate payoff plan event listener
    if (calcBtn) {
        calcBtn.addEventListener("click", () => {
            if (plannerLoans.length === 0) {
                alert("Please add at least one loan before generating a payoff plan.");
                return;
            }
            
            const extraMonthly = parseFloat(document.getElementById("payoff-extra-monthly").value) || 0;
            const extraAnnual = parseFloat(document.getElementById("payoff-extra-annual").value) || 0;
            const strategy = document.getElementById("payoff-strategy").value;
            
            // Calculate total minimum EMI required
            const totalMinEMI = plannerLoans.reduce((sum, l) => sum + l.emi, 0);
            
            // Run simulations
            const prepayPlan = runPayoffSimulation(plannerLoans, extraMonthly, extraAnnual, strategy);
            const baselinePlan = runPayoffSimulation(plannerLoans, 0, 0, strategy); // Prepayments = 0
            
            // Calculate differences
            const interestSaved = Math.max(0, Math.round(baselinePlan.totalInterest - prepayPlan.totalInterest));
            const monthsSaved = Math.max(0, baselinePlan.months - prepayPlan.months);
            
            // Formatter helper
            const fmt = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
            
            // Populate KPI values
            document.getElementById("payoff-saved-interest").textContent = fmt(interestSaved);
            document.getElementById("payoff-saved-months").textContent = `${monthsSaved} Months`;
            document.getElementById("payoff-pay-duration").textContent = `${prepayPlan.months} Months (${(prepayPlan.months / 12).toFixed(1)} Years)`;
            
            // Calculate debt free target date
            const freeDate = new Date();
            freeDate.setMonth(freeDate.getMonth() + prepayPlan.months);
            const dateOpts = { year: 'numeric', month: 'long' };
            document.getElementById("payoff-debt-free-date").textContent = freeDate.toLocaleDateString('en-US', dateOpts);
            
            // Populate Step-by-Step Instructions
            const sortedLoans = [...plannerLoans];
            if (strategy === "avalanche") {
                sortedLoans.sort((a, b) => b.rate - a.rate);
            } else {
                sortedLoans.sort((a, b) => a.balance - b.balance);
            }
            
            const instrContainer = document.getElementById("payoff-instructions");
            instrContainer.innerHTML = "";
            
            let stepNum = 1;
            
            // General instruction
            let introDiv = document.createElement("div");
            introDiv.className = "payoff-instruction-step";
            let totalEMIStr = sortedLoans.map(x => `${x.name}: ${fmt(x.emi)}`).join(", ");
            introDiv.innerHTML = `
                <div class="payoff-step-num">${stepNum++}</div>
                <div>
                    <strong>Maintain Minimum Payments:</strong> Continue paying the required minimum EMI on all active loans monthly to avoid defaults (Total minimum payment: <strong>${fmt(totalMinEMI)}/mo</strong> - ${totalEMIStr}).
                </div>
            `;
            instrContainer.appendChild(introDiv);
            
            // Target prioritizing instruction
            let strategyText = strategy === "avalanche" ? "Highest Interest Rate First (Debt Avalanche)" : "Smallest Outstanding Balance First (Debt Snowball)";
            let priorityDiv = document.createElement("div");
            priorityDiv.className = "payoff-instruction-step";
            priorityDiv.innerHTML = `
                <div class="payoff-step-num">${stepNum++}</div>
                <div>
                    <strong>Prepay Target:</strong> Direct your extra <strong>${fmt(extraMonthly)}/mo</strong> prepayment savings (plus the optional annual bonus of <strong>${fmt(extraAnnual)}</strong>) entirely to <strong>${sortedLoans[0].name}</strong> (Interest Rate: ${sortedLoans[0].rate}%, Balance: ${fmt(sortedLoans[0].balance)}). This has been prioritized under the ${strategyText} strategy.
                </div>
            `;
            instrContainer.appendChild(priorityDiv);
            
            // Rolldown steps
            for (let i = 0; i < sortedLoans.length - 1; i++) {
                let rolloverDiv = document.createElement("div");
                rolloverDiv.className = "payoff-instruction-step";
                let cumulativeEMI = sortedLoans.slice(0, i + 1).reduce((sum, x) => sum + x.emi, 0);
                rolloverDiv.innerHTML = `
                    <div class="payoff-step-num">${stepNum++}</div>
                    <div>
                        <strong>Rollover paydown:</strong> Once <strong>${sortedLoans[i].name}</strong> is cleared, roll its entire monthly EMI of <strong>${fmt(sortedLoans[i].emi)}</strong> plus your extra prepayment cash of <strong>${fmt(extraMonthly)}</strong> into <strong>${sortedLoans[i+1].name}</strong> (total payment: <strong>${fmt(cumulativeEMI + extraMonthly + sortedLoans[i+1].emi)}/mo</strong>).
                    </div>
                `;
                instrContainer.appendChild(rolloverDiv);
            }
            
            // Final completion step
            let finalDiv = document.createElement("div");
            finalDiv.className = "payoff-instruction-step";
            finalDiv.innerHTML = `
                <div class="payoff-step-num">${stepNum}</div>
                <div>
                    <strong>Debt Free Milestone:</strong> Follow this payoff priority plan to clear all outstanding debt in <strong>${prepayPlan.months} months</strong>, saving a total of <strong>${fmt(interestSaved)}</strong> in compound interest!
                </div>
            `;
            instrContainer.appendChild(finalDiv);
            
            // Populate timeline schedule
            const scheduleTable = document.getElementById("payoff-timeline-body");
            scheduleTable.innerHTML = "";
            
            prepayPlan.timeline.forEach((item, index) => {
                // Show rows in timeline. Limit list to prevent DOM bloat if payoff takes many months
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
            <td style="text-align: right;">
                <button onclick="deletePlannerLoan(${loan.id})" class="plat-tag" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239,68,68,0.2); color: var(--accent-red); font-size: 11px; padding: 2px 8px; border-radius: 4px; cursor: pointer;">Delete</button>
            </td>
        `;
        listContainer.appendChild(tr);
    });
}

// Global scope delete handler for inline onclick
window.deletePlannerLoan = function(id) {
    plannerLoans = plannerLoans.filter(l => l.id !== id);
    renderPlannerLoans();
};

function runPayoffSimulation(loans, extraMonthly, extraAnnual, strategy) {
    // Deep clone loans
    let simLoans = loans.map(l => ({ ...l, currentBalance: l.balance }));
    
    // Sort strategy
    if (strategy === "avalanche") {
        simLoans.sort((a, b) => b.rate - a.rate);
    } else {
        simLoans.sort((a, b) => a.balance - b.balance);
    }
    
    let monthlyTimeline = [];
    let month = 0;
    let totalInterestPaid = 0;
    let totalEMIPaid = 0;
    let totalPrepayments = 0;
    
    while (simLoans.some(l => l.currentBalance > 0) && month < 360) {
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
        
        // 3. Prepayment budget
        let leftoverPrepaymentBudget = extraMonthly;
        if (extraAnnual > 0 && month % 12 === 0) {
            leftoverPrepaymentBudget += extraAnnual;
        }
        
        // 4. Pay extra toward target loan
        simLoans.forEach(loan => {
            if (loan.currentBalance > 0 && leftoverPrepaymentBudget > 0) {
                let prepayAmount = Math.min(leftoverPrepaymentBudget, loan.currentBalance);
                loan.currentBalance -= prepayAmount;
                monthPrepaymentPaid += prepayAmount;
                leftoverPrepaymentBudget -= prepayAmount;
            }
        });
        
        totalInterestPaid += monthInterest;
        totalEMIPaid += monthEMIPaid;
        totalPrepayments += monthPrepaymentPaid;
        
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
        totalPaid: totalEMIPaid + totalPrepayments,
        months: month
    };
};
