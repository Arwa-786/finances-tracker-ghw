export type TransactionType = "income" | "expense";
// Example:
// const tType: TransactionType = "income";

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: TransactionType;
  accountId: string;
  currencyId: string;
  isProjected: false;
};
// Example:
// const txn: Transaction = {
//   id: "txn_001",
//   date: "2025-01-15",
//   description: "Monthly salary",
//   amount: 5000,
//   category: "Salary",
//   type: "income",
//   accountId: "acc_chk_01",
//   currencyId: "cur_usd",
//   isProjected: false,
// };

export type ProjectedTransaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: TransactionType;
  accountId: string;
  currencyId: string;
  isProjected: true;
  frequency?: "once" | "monthly" | "quarterly" | "yearly";
};
// Example:
// const projTxn: ProjectedTransaction = {
//   id: "ptxn_001",
//   date: "2025-02-01",
//   description: "Rent (projected)",
//   amount: 1200,
//   category: "Housing",
//   type: "expense",
//   accountId: "acc_chk_01",
//   currencyId: "cur_usd",
//   isProjected: true,
//   frequency: "monthly",
// };

export type AnyTransaction = Transaction | ProjectedTransaction;
// Example:
// const anyT: AnyTransaction = txn; // or projTxn

export type Currency = {
  id: string;
  code: string;
  symbol: string;
  name: string;
};
// Example:
// const usd: Currency = { id: "cur_usd", code: "USD", symbol: "$", name: "US Dollar" };

export type Institution = {
  id: string;
  name: string;
  type: string;
};
// Example:
// const bank: Institution = { id: "inst_01", name: "First Bank", type: "bank" };

export type AccountType = "credit_card" | "savings" | "investment" | "checking";
// Example:
// const aType: AccountType = "checking";

export type AccountSubType =
  | "credit_card_personal"
  | "credit_card_corporate"
  | "savings_emergency"
  | "savings_goal"
  | "investment_stocks"
  | "investment_crypto"
  | "investment_mutual_funds"
  | "checking_personal"
  | "checking_business";
// Example:
// const sub: AccountSubType = "checking_personal";

export type Account = {
  id: string;
  name: string;
  type: AccountType;
  subType: AccountSubType;
  institutionId: string;
  currencyId: string;
  balance?: number;
  createdAt: string;
};
// Example:
// const acc: Account = {
//   id: "acc_chk_01",
//   name: "Main Checking",
//   type: "checking",
//   subType: "checking_personal",
//   institutionId: "inst_01",
//   currencyId: "cur_usd",
//   balance: 3200.75,
//   createdAt: "2024-06-01T12:00:00Z",
// };

export type AccountSummary = {
  accountId: string;
  accountName: string;
  currencyId: string;
  balance: number;
  totalIncome: number;
  totalExpense: number;
  net: number;
};
// Example:
// const summary: AccountSummary = {
//   accountId: "acc_chk_01",
//   accountName: "Main Checking",
//   currencyId: "cur_usd",
//   balance: 3200.75,
//   totalIncome: 5000,
//   totalExpense: 1800,
//   net: 3200,
// };

export type Category = {
  id: string;
  name: string;
  type: TransactionType;
  parentId?: string;
  description?: string;
  keywords?: string[];
  icon?: string;
  color?: string;
};
// Example:
// const cat: Category = {
//   id: "cat_salary",
//   name: "Salary",
//   type: "income",
//   description: "Paychecks and bonuses",
//   keywords: ["pay", "salary", "wage"],
//   icon: "💼",
//   color: "#0a84ff",
// };

export type CategoryPattern = {
  id: string;
  categoryId: string;
  pattern: string;
  matchType: "regex" | "contains";
  confidence?: number;
};
// Example:
// const pattern: CategoryPattern = {
//   id: "pat_01",
//   categoryId: "cat_groceries",
//   pattern: "supermarket|grocery",
//   matchType: "regex",
//   confidence: 0.9,
// };

export type CategoryAggregate = {
  category: string;
  actualAmount: number;
  projectedAmount: number;
  percentage?: number;
};
// Example:
// const agg: CategoryAggregate = {
//   category: "Groceries",
//   actualAmount: 450,
//   projectedAmount: 500,
//   percentage: 90,
// };

export type Goal = {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount?: number;
  targetDate?: string;
  accountId?: string;
  createdAt: string;
};
// Example:
// const goal: Goal = {
//   id: "goal_001",
//   name: "Emergency Fund",
//   targetAmount: 10000,
//   currentAmount: 2500,
//   targetDate: "2026-12-31",
//   accountId: "acc_sav_01",
//   createdAt: "2024-01-01T00:00:00Z",
// };

export type MonthlyAggregate = {
  month: string;
  actualIncome: number;
  projectedIncome: number;
  actualExpense: number;
  projectedExpense: number;
};
// Example:
// const monthAgg: MonthlyAggregate = {
//   month: "2025-01",
//   actualIncome: 5000,
//   projectedIncome: 5200,
//   actualExpense: 1800,
//   projectedExpense: 2000,
// };
