import { RootState } from "./store";

export const selectUserCredentials = (state: RootState) => state.user;
