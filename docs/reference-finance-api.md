# Financial Calculation API & Schema Reference (`lib/finance/`)

This reference document details the pure TypeScript financial computation API for home loan calculations, amortisation schedules, prepayments, balance transfers, and Indian tax deductions.

---

## 1. EMI & Amortisation Module (`lib/finance/emi.ts`)

### `calculateEMI(params: EMIParams): EMIResult`

Calculates monthly EMI and generates full amortisation schedule.

#### Parameters
| Parameter | Type | Constraints | Description |
|---|---|---|---|
| `principal` | `number` | `> 0` | Loan principal amount in INR (₹) |
| `annualInterestRate` | `number` | `>= 0` | Annual interest rate percentage (e.g. `8.5`) |
| `tenureYears` | `number` | `> 0, <= 30` | Loan tenure in years |

#### Returns (`EMIResult`)
```typescript
interface EMIResult {
  emi: number;                  // Monthly EMI in INR (rounded to nearest integer)
  totalPayment: number;         // Total payment over loan duration
  totalInterest: number;        // Total interest portion paid
  schedule: AmortisationRow[];  // Monthly breakdown array
}

interface AmortisationRow {
  month: number;
  payment: number;
  principalComponent: number;
  interestComponent: number;
  remainingPrincipal: number;
}
```

#### Formula
$$\text{EMI} = P \cdot r \cdot \frac{(1+r)^n}{(1+r)^n - 1}$$
Where $P = \text{principal}$, $r = \frac{\text{annualInterestRate}}{12 \cdot 100}$, $n = \text{tenureYears} \cdot 12$.

#### Edge-Case Guards
- **Zero Interest (`annualInterestRate === 0`)**: Falls back to simple linear division ($\text{EMI} = \frac{P}{n}$).

---

## 2. Prepayment Simulator Module (`lib/finance/prepayment.ts`)

### `simulatePrepayment(params: PrepaymentParams): PrepaymentResult`

Simulates dual prepayment outcomes (EMI Reduction vs Tenure Reduction).

#### Parameters
| Parameter | Type | Constraints | Description |
|---|---|---|---|
| `principal` | `number` | `> 0` | Initial loan principal |
| `annualInterestRate` | `number` | `> 0` | Interest rate percentage |
| `tenureYears` | `number` | `> 0` | Total tenure in years |
| `prepaymentAmount` | `number` | `> 0` | Lump-sum partial payment in INR |
| `prepaymentMonth` | `number` | `1 <= m < n` | Month index when prepayment occurs |

#### Returns (`PrepaymentResult`)
```typescript
interface PrepaymentResult {
  tenureReduction: {
    newTenureMonths: number;
    monthsSaved: number;
    interestSaved: number;
  };
  emiReduction: {
    newEMI: number;
    monthlySavings: number;
    interestSaved: number;
  };
}
```

#### Edge-Case Guards
- **Overpayment Guard**: If `prepaymentAmount >= remainingPrincipal`, loan status transitions to fully closed (`tenureRemaining = 0`, `interestSaved = remainingInterest`).

---

## 3. All-In Costs Module (`lib/finance/costs.ts`)

### `calculateAllInCosts(params: CostParams): CostBreakdown`

Computes total upfront costs incorporating state stamp duty rules and 18% GST on processing fees.

#### State Tax Rule Table (`config/taxRules.ts`)
```typescript
export const STATE_STAMP_DUTY_RULES: Record<string, { stampDutyPct: number; modPct: number; modCapINR?: number }> = {
  Maharashtra: { stampDutyPct: 0.10, modPct: 0.20, modCapINR: 10000 },
  Karnataka:   { stampDutyPct: 0.10, modPct: 0.50, modCapINR: 25000 },
  Delhi:       { stampDutyPct: 0.50, modPct: 0.25, modCapINR: 20000 },
  Telangana:   { stampDutyPct: 0.50, modPct: 0.50 }, // Uncapped
};
```

---

## 4. Tax Regime Deduction Module (`lib/finance/tax.ts`)

### `calculateTaxSavings(params: TaxParams): TaxSavingsResult`

Calculates income tax deductions under Section 24(b) and Section 80C for Old vs New Income Tax Regimes.

#### Statutory Caps
- **Section 24(b) (Home Loan Interest)**: Capped at **₹2,00,000/year** (Self-occupied property under Old Regime). **₹0 deduction under New Tax Regime**.
- **Section 80C (Principal Repayment)**: Capped at **₹1,50,000/year** (Combined 80C umbrella under Old Regime). **₹0 deduction under New Tax Regime**.
- **Section 80EEA**: Additional ₹1,50,000 for loans sanctioned between **April 1, 2019 and March 31, 2022** (flags loan sanction date threshold).
