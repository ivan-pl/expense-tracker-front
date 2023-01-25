import {
  PayMethod,
  Tag,
  Transaction,
  TransactionsInfo,
} from "../types/transactions.type";
import formatDate from "../utils/formatDate";
import loadMockedTransactionSection from "../utils/loadMockedTransactions";
import transactionsReducer, {
  setNewTransactions,
  add,
} from "./transactionsSlice";

const CURRENT_DATE = "2022-11-25";
jest.useFakeTimers().setSystemTime(new Date(CURRENT_DATE));

const mockedTransactionHistory = loadMockedTransactionSection();

describe("transactions reducer", () => {
  const initialState: TransactionsInfo = {
    total: { day: "0", week: "0", month: "0" },
    transactionHistory: [],
  };

  it("should handle initial state", () => {
    expect(transactionsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle setNewTransactions", () => {
    expect(
      transactionsReducer(
        initialState,
        setNewTransactions(mockedTransactionHistory)
      )
    ).toEqual(mockedTransactionHistory);
  });

  it("should handle add", () => {
    let actualState = initialState;
    const transaction: Transaction = {
      amount: "123.00",
      comment: "comment",
      id: "1232",
      payMethod: PayMethod.Cash,
      tag: Tag.Clothing,
    };

    actualState = transactionsReducer(
      actualState,
      add({ transaction, date: formatDate(new Date(CURRENT_DATE)) })
    );
    expect(actualState).toEqual({
      total: {
        day: "123.00",
        week: "123.00",
        month: "123.00",
      },
      transactionHistory: [
        { date: CURRENT_DATE, transactionList: [transaction] },
      ],
    } as TransactionsInfo);

    actualState = transactionsReducer(
      actualState,
      add({ transaction, date: formatDate(new Date(CURRENT_DATE)) })
    );
    expect(actualState).toEqual({
      total: {
        day: "246.00",
        week: "246.00",
        month: "246.00",
      },
      transactionHistory: [
        { date: CURRENT_DATE, transactionList: [transaction, transaction] },
      ],
    } as TransactionsInfo);
  });
});
