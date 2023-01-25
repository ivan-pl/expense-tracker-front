import { RootState } from "./store";

export const selectTransactionsHistory = (state: RootState) =>
  state.transactions.transactionsHistory;
