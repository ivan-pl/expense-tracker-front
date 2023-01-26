import loadTransactionsHistory from "./loadTransactionsHistory";
import {
  DayTransactions,
  Tag,
  PayMethod,
  TransactionsHistory,
} from "../types/transactions.type";
import setTransactionsHistory from "./setTransactionsHistory";

describe("loadTransactionsHistory()", () => {
  const trans1: DayTransactions = {
    date: "2022-02-14",
    transactionList: [
      {
        id: "1",
        amount: "123.00",
        comment: "Comment",
        payMethod: PayMethod.Cash,
        tag: Tag.Clothing,
      },
    ],
  };

  const trans2: DayTransactions = {
    date: "2022-03-15",
    transactionList: [
      {
        id: "2",
        amount: "321.00",
        comment: "Comment2",
        payMethod: PayMethod.Credit,
        tag: Tag.Food,
      },
    ],
  };

  afterEach(() => {
    localStorage.clear();
  });

  it("loads transactionsHistory", () => {
    const transactionsHistory: TransactionsHistory = [trans1, trans2];
    setTransactionsHistory(transactionsHistory);

    const loadedTransactionsHistory = loadTransactionsHistory();
    expect(loadedTransactionsHistory).toEqual(transactionsHistory);
  });
});
