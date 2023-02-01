import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../types/transactions.type";

export interface ExpensesPageState {
  transaction: Transaction | null;
  date: string | null;
  isEditWindowOpened: boolean;
}

export const initialState: ExpensesPageState = {
  transaction: null,
  date: null,
  isEditWindowOpened: false,
};

export const expensesPageSlice = createSlice({
  name: "expensesPage",
  initialState,
  reducers: {
    openEditWindow: (
      state,
      {
        payload: { date, transaction },
      }: PayloadAction<{ transaction: Transaction; date: string }>
    ) => {
      (state.isEditWindowOpened = true),
        (state.transaction = transaction),
        (state.date = date);
    },

    closeEditWindow: (state) => {
      (state.isEditWindowOpened = false),
        (state.date = null),
        (state.transaction = null);
    },
  },
});

export const { closeEditWindow, openEditWindow } = expensesPageSlice.actions;

export default expensesPageSlice.reducer;
