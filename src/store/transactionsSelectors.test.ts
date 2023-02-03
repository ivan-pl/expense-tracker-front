import loadMockedTransactionsHistory from "../utils/loadMockedTransactions";
import { RootState } from "./store";
import {
  selectTransactionsHistory,
  selectFilterAnalytics,
  selectDayTransactions,
  selectFilterExpenses,
} from "./transactionsSelectors";

const state: Pick<RootState, "transactions"> = {
  transactions: {
    filter: {
      analyticsPage: { dateFrom: "2022-03-11", dateTo: "2023-04-23" },
      expensesPage: {
        dateFrom: "2022-09-14",
        dateTo: "2023-06-15",
        pattern: "some pattern",
      },
    },
    transactionsHistory: loadMockedTransactionsHistory(),
  },
};

describe("selectTransactionsHistory()", () => {
  it("returns TransactionsHistory", () => {
    expect(selectTransactionsHistory(state as RootState)).toEqual(
      state.transactions.transactionsHistory
    );
  });

  it("returns selectFilterAnalytics", () => {
    expect(selectFilterAnalytics(state as RootState)).toEqual(
      state.transactions.filter.analyticsPage
    );
  });

  it("returns selectDayTransactions", () => {
    expect(selectDayTransactions("2022-12-07")(state as RootState)).toEqual(
      state.transactions.transactionsHistory[0]
    );
  });

  it("returns selectFilterExpenses", () => {
    expect(selectFilterExpenses(state as RootState)).toEqual(
      state.transactions.filter.expensesPage
    );
  });
});
