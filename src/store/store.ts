import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer,
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
