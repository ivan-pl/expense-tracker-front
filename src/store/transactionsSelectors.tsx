import { RootState } from "./store";

export const selectTotal = (state: RootState) => state.transactions.total;

export const selectTransactionHistory = (state: RootState) =>
  state.transactions.transactionHistory;
