import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction, DayTransactions } from "../types/transactions.type";
import addTransactionToHistory from "./utils/addTransactionToHistory";
import formatDate from "../utils/formatDate";
import { AppThunk } from "./store";
import addDayTransactionsToStorage from "../storageController/addDayTransactions";
import { selectTransactionsHistory } from "./transactionsSelectors";
import loadTransactionsHistory from "../storageController/loadTransactionsHistory";

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
  transactionsHistory: loadTransactionsHistory(),
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
      {
        payload,
      }: PayloadAction<Partial<TransactionsState["filter"]["expensesPage"]>>
    ) => {
      filter.expensesPage = { ...filter.expensesPage, ...payload };
    },

    filterAnalytics: (
      { filter },
      {
        payload,
      }: PayloadAction<Partial<TransactionsState["filter"]["analyticsPage"]>>
    ) => {
      filter.analyticsPage = { ...filter.analyticsPage, ...payload };
    },

    reset: () => ({ ...initialState, transactionsHistory: [] }),
  },
});

export const addToStorageAndStore =
  ({
    transaction,
    date,
  }: {
    transaction: Transaction;
    date: string;
  }): AppThunk =>
  (dispatch, getState) => {
    dispatch(add({ date, transaction }));
    addDayTransactionsToStorage(
      selectTransactionsHistory(getState()).find((_) => _.date === date)!
    );
  };

// export const updateInStorageAndStore =
//   ({
//     transaction,
//     date,
//   }: {
//     transaction: Transaction;
//     date: string;
//   }): AppThunk =>
//   (dispatch, getState) => {
//     dispatch(update({date, transaction}));
//     updateTransactionInStorage(date, transaction);
//   };

export const {
  setNewTransactions,
  add,
  filterExpenses,
  filterAnalytics,
  reset,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
