import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction, DayTransactions } from "../types/transactions.type";
import addTransactionToHistory from "./utils/addTransactionToHistory";
import formatDate from "../utils/formatDate";
import { AppThunk } from "./store";
import updateDayTransactionsInStorage from "../storageController/updateDayTransactions";
import {
  selectDayTransactions,
  selectTransactionsHistory,
} from "./transactionsSelectors";
import loadTransactionsHistory from "../storageController/loadTransactionsHistory";
import { stringify } from "querystring";

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

    deleteTransaction: (
      state,
      {
        payload: { id, date },
      }: PayloadAction<{
        id: string;
        date: string;
      }>
    ) => {
      const dayTransactions = state.transactionsHistory.find(
        (_) => _.date === date
      );
      if (!dayTransactions) {
        return;
      }

      const ind = dayTransactions?.transactionList.findIndex(
        (_) => _.id === id
      );
      if (ind !== -1) {
        dayTransactions.transactionList.splice(ind, 1);
      }
    },

    // update: (
    //   state,
    //   {
    //     payload: { transaction, date },
    //   }: PayloadAction<{ transaction: Transaction; date: string }>
    // ) => {
    //   const dayTransactions = state.transactionsHistory.find(
    //     (_) => _.date === date
    //   );
    //   if (!dayTransactions) {
    //     return;
    //   }

    //   const ind = dayTransactions.transactionList.findIndex(
    //     (_) => _.id === transaction.id
    //   );
    //   if (ind !== -1) {
    //     dayTransactions.transactionList[ind] = transaction;
    //   }
    // },

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
    const dayTransactions = selectDayTransactions(date)(getState());
    if (dayTransactions) {
      updateDayTransactionsInStorage(dayTransactions);
    }
  };

export const deleteFromStorageAndStore =
  (id: string, date: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(deleteTransaction({ id, date }));
    const dayTransactions = selectDayTransactions(date)(getState());
    if (dayTransactions) {
      updateDayTransactionsInStorage(dayTransactions);
    }
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
//     dispatch(update({ date, transaction }));
//     updateTransactionInStorage(date, transaction);
//   };

export const {
  setNewTransactions,
  add,
  filterExpenses,
  filterAnalytics,
  reset,
  deleteTransaction,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
