import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionsInfo } from "../types/transactions.type";

const initialState: TransactionsInfo = {
  total: { day: 0, week: 0, month: 0 },
  transactionHistory: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setNewTransactions: (
      state,
      {
        payload: { total, transactionHistory },
      }: PayloadAction<TransactionsInfo>
    ) => {
      state.total = total;
      state.transactionHistory = transactionHistory;
    },
  },
});

export default transactionsSlice.reducer;

export const { setNewTransactions } = transactionsSlice.actions;
