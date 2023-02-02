import { RootState } from "./store";

export const selectTransactionsHistory = (state: RootState) =>
  state.transactions.transactionsHistory;

export const selectFilterExpenses = (state: RootState) =>
  state.transactions.filter.expensesPage;

export const selectFilterAnalytics = (state: RootState) =>
  state.transactions.filter.analyticsPage;

export const selectDayTransactions = (date: string) => (state: RootState) =>
  state.transactions.transactionsHistory.find((_) => _.date === date);
