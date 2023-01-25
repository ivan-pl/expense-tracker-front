import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionsInfo, Transaction } from "../types/transactions.type";
import addTransactionToHistory from "./utils/addTransactionToHistory";
import setTotal from "./utils/setTotal";

const initialState: TransactionsInfo = {
  total: { day: "0", week: "0", month: "0" },
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

    add: (
      state,
      {
        payload: { transaction, date },
      }: PayloadAction<{ transaction: Transaction; date: string }>
    ) => {
      setTotal(state.total, date, transaction);

      if (state.transactionHistory.length === 0) {
        state.transactionHistory.push({
          date,
          transactionList: [transaction],
        });
        return state;
      }

      addTransactionToHistory(state.transactionHistory, date, transaction);
    },
  },
});

export default transactionsSlice.reducer;

export const { setNewTransactions, add } = transactionsSlice.actions;
