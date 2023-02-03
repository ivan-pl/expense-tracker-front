import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import addUser from "../storageController/addUser";
import { reset as resetTransactions } from "./transactionsSlice";
import { AppThunk } from "./store";

export interface UserState {
  uid: string;
  token: string;
}

export const initialState: UserState = {
  token: "",
  uid: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, { payload: { uid, token } }: PayloadAction<UserState>) => {
      (state.uid = uid), (state.token = token);
    },
    reset: (state) => {
      (state.token = ""), (state.uid = "");
    },
  },
});

export const addToStorageAndStore =
  (user: UserState): AppThunk =>
  (dispatch) => {
    addUser(user);
    dispatch(add(user));
  };

export const signOut = (): AppThunk => (dispatch) => {
  dispatch(reset());
  dispatch(resetTransactions());
  localStorage.clear();
};

export const { add, reset } = userSlice.actions;

export default userSlice.reducer;
