import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import userReducer from "./userSlice";
import expensesPageReducer from "./expensesPageSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer,
    expensesPage: expensesPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
