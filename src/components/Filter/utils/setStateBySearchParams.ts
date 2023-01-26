import {
  ActionCreatorWithNonInferrablePayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import { AppDispatch } from "../../../store/store";

export default function setStateBySearchParams<
  T extends ActionCreatorWithPayload<any, any>
>(
  dispatch: AppDispatch,
  actionCreator: T,
  searchParams: URLSearchParams,
  parseParams: string[]
): void {
  const payload: { [P: string]: string } = {};
  for (const param of parseParams) {
    const val = searchParams.get(param);
    if (val) {
      payload[param] = val;
    }
  }

  dispatch(actionCreator(payload));
}
