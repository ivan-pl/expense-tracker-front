import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction, DayTransactions } from "../types/transactions.type";
import addTransactionToHistory from "./utils/addTransactionToHistory";
import formatDate from "../utils/formatDate";

export interface TransactionsState {
  transactionsHistory: DayTransactions[];
  filter: {
    expensesPage: {
      pattern: string;
      dateFrom: string;
      dateTo: string;
    };

    analyticsPage: {
      dateFrom: string;
      dateTo: string;
    };
  };
}

export const initialState: TransactionsState = {
  transactionsHistory: [],
  filter: {
    expensesPage: {
      pattern: "",
      dateFrom: "",
      dateTo: formatDate(new Date()),
    },

    analyticsPage: {
      dateFrom: "",
      dateTo: formatDate(new Date()),
    },
  },
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setNewTransactions: (
      state,
      { payload: transactionsHistory }: PayloadAction<DayTransactions[]>
    ) => {
      state.transactionsHistory = transactionsHistory;
    },

    add: (
      state,
      {
        payload: { transaction, date },
      }: PayloadAction<{ transaction: Transaction; date: string }>
    ) => {
      if (state.transactionsHistory.length === 0) {
        state.transactionsHistory.push({
          date,
          transactionList: [transaction],
        });
        return state;
      }

      addTransactionToHistory(state.transactionsHistory, date, transaction);
    },

    filterExpenses: (
      { filter },
      { payload }: PayloadAction<TransactionsState["filter"]["expensesPage"]>
    ) => {
      filter.expensesPage = payload;
    },
  },
});

export default transactionsSlice.reducer;

export const { setNewTransactions, add, filterExpenses } =
  transactionsSlice.actions;
