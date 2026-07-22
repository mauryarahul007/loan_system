# Tutorial: Simulating Home Loan Prepayment & Amortisation

This tutorial takes you step-by-step through setting up and running your first home loan prepayment simulation using the Home Loan Knowledge Hub financial engine.

By the end of this tutorial, you will understand how partial prepayments affect your loan tenure versus monthly EMI, and how to model interest savings.

---

## What You'll Need

- Node.js 18+ or Bun 1.1+ (for TypeScript client-side modules) or Python 3.10+ (for backend integration)
- Basic understanding of principal, annual interest rate, and loan tenure

---

## Step 1: Initialize Base Amortisation Schedule

To model a loan, start with your core loan parameters:
- **Loan Principal**: ₹50,00,000 (₹50 Lakhs)
- **Annual Interest Rate**: 8.5%
- **Tenure**: 20 Years (240 Months)

Call `calculateEMI()` to compute your baseline monthly payment:

```typescript
import { calculateEMI } from './lib/finance/emi';

const baseline = calculateEMI({
  principal: 5000000,
  annualInterestRate: 8.5,
  tenureYears: 20,
});

console.log(`Monthly EMI: ₹${baseline.emi.toLocaleString('en-IN')}`);
console.log(`Total Interest Payable: ₹${baseline.totalInterest.toLocaleString('en-IN')}`);
```

**Output:**
```text
Monthly EMI: ₹43,391
Total Interest Payable: ₹54,13,879
```

---

## Step 2: Simulate a Part-Prepayment

Suppose you make a lump-sum part-payment of **₹5,00,000 (₹5 Lakhs)** at Month 24 (Year 2).

You have two choices for how the bank applies this prepayment:
1. **Reduce Tenure (Keep EMI constant)**: Drastically reduces total interest paid.
2. **Reduce EMI (Keep Tenure constant)**: Lowers monthly cashflow burden.

Run the prepayment simulator for both choices:

```typescript
import { simulatePrepayment } from './lib/finance/prepayment';

const result = simulatePrepayment({
  principal: 5000000,
  annualInterestRate: 8.5,
  tenureYears: 20,
  prepaymentAmount: 500000,
  prepaymentMonth: 24,
});

console.log('Tenure Reduction Outcome:', result.tenureReduction);
console.log('EMI Reduction Outcome:', result.emiReduction);
```

---

## Step 3: Compare Results Side-by-Side

Observe the impact of ₹5 Lakh prepayment at Year 2:

| Metric | Baseline | Tenure Reduction | EMI Reduction |
|---|---|---|---|
| **Monthly EMI** | ₹43,391 | ₹43,391 | **₹38,720** |
| **New Remaining Tenure** | 216 months | **162 months** | 216 months |
| **Tenure Saved** | 0 months | **54 months (4.5 yrs)** | 0 months |
| **Interest Saved** | ₹0 | **₹18,42,100** | **₹10,08,980** |

---

## What You Built

You modeled a real-world Indian home loan prepayment and proved that:
- **Tenure reduction saves ₹18.42 Lakhs in interest** (8.25x the prepayment amount!).
- **EMI reduction saves ₹10.08 Lakhs in interest** while freeing up **₹4,671 monthly cashflow**.

Next steps: Explore [How to Calculate All-In Loan Costs](./howto-calculate-all-in-loan-costs.md) or read the [Financial API Reference](./reference-finance-api.md).
