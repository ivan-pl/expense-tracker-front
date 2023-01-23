import { createSlice } from "@reduxjs/toolkit";
import { TransactionsInfo } from "../types/transactions.type";

const initialState: TransactionsInfo = {
  total: { day: 0, week: 0, month: 0 },
  transactionHistory: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
});

export default transactionSlice.reducer;
