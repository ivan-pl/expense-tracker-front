import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../../../store/store";

type Params = "dateFrom" | "dateTo" | "pattern";

export default function setStateBySearchParams<
  T extends ActionCreatorWithPayload<{ [P in Params]?: string }>
>(
  dispatch: AppDispatch,
  actionCreator: T,
  searchParams: URLSearchParams,
  parseParams: Params[]
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
