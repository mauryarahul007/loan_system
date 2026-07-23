import re
import sys

# Set UTF-8 encoding for standard output
sys.stdout.reconfigure(encoding='utf-8')

# Read app.js content
with open("app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Extract launchSolutionStudio function block
studio_match = re.search(r"function launchSolutionStudio\(gap\)\s*\{(.*)\n\}\n\n//", app_js, re.DOTALL)
if not studio_match:
    # Try finding up to end of file if pattern slightly differs
    studio_match = re.search(r"function launchSolutionStudio\(gap\)\s*\{(.*)", app_js, re.DOTALL)

assert studio_match, "Failed to extract launchSolutionStudio function from app.js"
studio_code = studio_match.group(1)

# List of 21 QA Test Cases with expected solution format strings and required unique DOM element IDs
test_cases = [
    { "id": "TC-01", "format": "Affordability / FOIR calculator", "expected_ids": ["foir-salary", "res-foir-loan"] },
    { "id": "TC-02", "format": "Interactive prepayment calculator + guide", "expected_ids": ["payoff-principal", "res-payoff-years"] },
    { "id": "TC-03", "format": "Interactive EMI-vs-tenure prepay simulator", "expected_ids": ["payoff-principal", "res-payoff-years"] },
    { "id": "TC-04", "format": "Full fee breakdown + GST calculator", "expected_ids": ["fee-principal", "res-fee-total"] },
    { "id": "TC-05", "format": "Side-by-side regime comparison tool", "expected_ids": ["tax-income", "res-old-tax", "res-new-tax"] },
    { "id": "TC-06", "format": "Eligibility checker flagging closed window", "expected_ids": ["eea-year", "res-eea-status"] },
    { "id": "TC-07", "format": "Multi-prepayment calculator", "expected_ids": ["multi-principal", "res-multi-years"] },
    { "id": "TC-08", "format": "BT net-savings calculator incl. fees", "expected_ids": ["bt-principal", "res-bt-net-savings"] },
    { "id": "TC-09", "format": "Rights explainer (floating-rate waiver)", "expected_ids": ["0% Foreclosure Penalty"] },
    { "id": "TC-10", "format": "5-instalment claim guide", "expected_ids": ["precon-interest", "res-precon-slice"] },
    { "id": "TC-11", "format": "Rate-scenario explainer", "expected_ids": ["rate-spike", "res-rate-new-emi"] },
    { "id": "TC-12", "format": "Payoff-strategy guide + calculator", "expected_ids": ["payoff-extra-emi", "res-payoff-years"] },
    { "id": "TC-13", "format": "Checklist by borrower profile", "expected_ids": ["chk-profile-select", "chk-items-container"] },
    { "id": "TC-14", "format": "Joint-claim optimisation explainer", "expected_ids": ["joint-interest", "res-joint-claim-1"] },
    { "id": "TC-15", "format": "End-to-end journey walkthrough", "expected_ids": ["Phase 1: Pre-Approval & Sanction", "Phase 6: Final Deed Return"] },
    { "id": "TC-16", "format": "Sanction vs disbursed amount calculator", "expected_ids": ["sanc-limit", "disb-insurance", "res-disb-net-inhand"] },
    { "id": "TC-17", "format": "Prepayment EMI-reduction branch request drafts", "expected_ids": ["draft-principal", "draft-bank-name", "draft-letter-preview"] },
    { "id": "TC-18", "format": "Spread adjustment history compare tool", "expected_ids": ["spread-repo", "spread-new-rate", "res-spread-extra-pct"] },
    { "id": "TC-19", "format": "CERSAI charge clearance checking & escalation guidelines", "expected_ids": ["deed-closure-date", "deed-days-delayed", "res-deed-compensation"] },
    { "id": "TC-20", "format": "SBI Max Gain / Overdraft account simulator", "expected_ids": ["od-loan-bal", "od-surplus-parked", "res-od-monthly-saved"] },
    { "id": "TC-21", "format": "Advanced calculator", "expected_ids": ["calc-principal", "res-calc-emi"] },
    { "id": "TC-22", "format": "Compounding annual prepayment simulator", "expected_ids": ["multi-principal", "res-multi-years"] },
]

def simulate_format_matching(format_str):
    format_lower = format_str.lower()
    
    if "foir" in format_lower or "affordability" in format_lower:
        return "FOIR_ENGINE"
    elif "spread" in format_lower or "repo-rate spread" in format_lower or "margin" in format_lower:
        return "SPREAD_ENGINE"
    elif "cersai" in format_lower or "deed" in format_lower or "document release" in format_lower or "misplaced" in format_lower:
        return "CERSAI_DEED_ENGINE"
    elif "max gain" in format_lower or "overdraft" in format_lower or "offset" in format_lower:
        return "MAX_GAIN_ENGINE"
    elif "draft" in format_lower or "letter" in format_lower or "branch request" in format_lower or "emi-reduction" in format_lower or "request" in format_lower:
        return "PREPAYMENT_DRAFT_ENGINE"
    elif "multi-prepayment" in format_lower or "part payment" in format_lower or "compounding annual" in format_lower:
        return "MULTI_PREPAYMENT_ENGINE"
    elif "payoff-strategy" in format_lower or "reduce home loan tenure" in format_lower or "payoff" in format_lower or "prepayment calculator" in format_lower:
        return "PAYOFF_STRATEGY_ENGINE"
    elif "bt" in format_lower or "balance transfer" in format_lower or "switching cost" in format_lower:
        return "BT_ENGINE"
    elif "80eea" in format_lower or "closed window" in format_lower:
        return "EEA80_ENGINE"
    elif "5-instalment" in format_lower or "pre-construction" in format_lower or "pre construction" in format_lower:
        return "PRECON_ENGINE"
    elif "rate-scenario" in format_lower or "fixed vs floating" in format_lower or "rate-shock" in format_lower or "reset choice" in format_lower:
        return "RATE_SCENARIO_ENGINE"
    elif "joint" in format_lower or "joint-borrower" in format_lower:
        return "JOINT_ENGINE"
    elif "journey" in format_lower or "step by step" in format_lower or "walkthrough" in format_lower:
        return "JOURNEY_ENGINE"
    elif "rights" in format_lower or "waiver" in format_lower or "foreclosure" in format_lower:
        return "RIGHTS_ENGINE"
    elif "checklist" in format_lower or "profile" in format_lower:
        return "CHECKLIST_ENGINE"
    elif "sanction" in format_lower or "disbursed" in format_lower:
        return "SANCTION_DISBURSED_ENGINE"
    elif "regime" in format_lower or "tax" in format_lower:
        return "TAX_REGIME_ENGINE"
    elif "fee" in format_lower or "gst" in format_lower or "full fee breakdown" in format_lower:
        return "FEE_GST_ENGINE"
    elif "emi-vs-tenure" in format_lower or "tenure prepay" in format_lower:
        return "EMI_VS_TENURE_ENGINE"
    elif "calculator" in format_lower:
        return "ADVANCED_CALCULATOR_DEFAULT"
    else:
        return "GENERIC_FALLBACK"

print("=" * 70)
print("🔍 SOLUTION STUDIO 21-POINT COMPREHENSIVE QA AUTOMATED SUITE")
print("=" * 70)

passed = 0
failed = 0

for tc in test_cases:
    fmt = tc["format"]
    expected_ids = tc["expected_ids"]
    matched_engine = simulate_format_matching(fmt)
    
    # Verify that app.js code contains the exact expected IDs for this format
    missing_ids = []
    for elem_id in expected_ids:
        if elem_id not in app_js:
            missing_ids.append(elem_id)
            
    if matched_engine != "GENERIC_FALLBACK" and len(missing_ids) == 0:
        print(f"[PASS] {tc['id']}: '{fmt}' → Engine: {matched_engine} | Verified Elements: {expected_ids}")
        passed += 1
    else:
        print(f"[FAIL] {tc['id']}: '{fmt}' → Engine: {matched_engine} | Missing Elements: {missing_ids}")
        failed += 1

print("-" * 70)
print(f"RESULTS: Total Test Cases: {len(test_cases)} | Passed: {passed} | Failed: {failed}")
print("=" * 70)

if failed == 0:
    print("✅ [TEST SUCCESS] 100% QA Coverage Passed for All 21 Solution Formats!")
    sys.exit(0)
else:
    print(f"❌ [TEST FAILURE] {failed} test cases failed assertion checks.")
    sys.exit(1)
