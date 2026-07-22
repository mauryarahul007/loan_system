# How to Calculate All-In Home Loan Processing Costs & Stamp Duty

This task-oriented guide shows how to calculate the true all-in cost of securing an Indian home loan, including processing fees, 18% GST, state-level stamp duty, and Memorandum of Deposit of Title Deeds (MOD).

---

## Prerequisites

- Home loan sanction amount (e.g., ₹75,00,000)
- Property state location (Maharashtra, Karnataka, Delhi, Telangana, or Tamil Nadu)
- Bank processing fee structure (e.g., 0.50% of loan amount, capped at ₹10,000 + GST)

---

## Steps

### Step 1: Calculate Bank Processing Fee & 18% GST

Bank processing fees are subject to 18% Goods and Services Tax (GST) under Indian tax regulations.

```typescript
import { calculateBankFees } from './lib/finance/costs';

const bankFees = calculateBankFees({
  loanAmount: 7500000,
  processingFeePercent: 0.5,
  maxCap: 10000,
});

// Output: { baseFee: 10000, gst: 1800, totalBankFee: 11800 }
```

### Step 2: Determine State Stamp Duty & MOD Charges

Stamp duty and MOD (Memorandum of Deposit of Title Deeds) rates vary significantly by state:

| State | Stamp Duty % | MOD % | MOD Cap |
|---|---|---|---|
| **Maharashtra** | 0.10% | 0.20% | ₹10,000 |
| **Karnataka** | 0.10% | 0.50% | ₹25,000 |
| **Delhi** | 0.50% | 0.25% | Capped |
| **Telangana** | 0.50% | 0.50% | No Cap |

```typescript
import { calculateStateGovernmentFees } from './lib/finance/costs';

const stateFees = calculateStateGovernmentFees({
  loanAmount: 7500000,
  state: 'Maharashtra',
});

// Output: { stampDuty: 7500, mod: 10000, totalGovtFees: 17500 }
```

### Step 3: Compute Total Out-of-Pocket Cash Required

Combine bank fees, GST, government duties, property valuation fees, and legal verification charges:

```typescript
import { calculateAllInCosts } from './lib/finance/costs';

const allInCosts = calculateAllInCosts({
  loanAmount: 7500000,
  processingFeePercent: 0.5,
  maxCap: 10000,
  state: 'Maharashtra',
  valuationFee: 3000,
  legalFee: 5000,
});
```

---

## Verification

Verify your total out-of-pocket costs before loan disbursement:

- **Base Processing Fee**: ₹10,000
- **18% GST on Fee**: ₹1,800
- **Maharashtra Stamp Duty (0.10%)**: ₹7,500
- **Maharashtra MOD (Capped)**: ₹10,000
- **Valuation & Legal**: ₹8,000
- **TOTAL OUT-OF-POCKET**: **₹37,300**

---

## Troubleshooting

| Issue | Cause | Fix |
|---|---|---|
| GST calculated on Stamp Duty | Stamp Duty is a state levy, not a taxable service | Ensure 18% GST applies strictly to Bank Processing Fees & Legal/Valuation charges. |
| MOD fee unexpectedly high | Selected state without fee capping (e.g., Telangana) | Check state-specific regulatory cap rules in `config/taxRules.ts`. |
