import filterTransactionsHistory from "./filterTransactions";
import loadMockedTransactionsHistory from "./loadMockedTransactions";
import { PayMethod, Tag } from "../types/transactions.type";

const transactionsHistory = loadMockedTransactionsHistory();
const expectedTransactionsHistory = [
  {
    date: "2022-10-15",
    transactionList: [
      {
        id: "20",
        tag: Tag.Clothing,
        payMethod: PayMethod.Credit,
        comment: "Some comment",
        amount: "865",
      },
      {
        id: "23",
        tag: Tag.Clothing,
        payMethod: PayMethod.Credit,
        comment: "Some comment",
        amount: "865",
      },
      {
        id: "25",
        tag: Tag.Clothing,
        payMethod: PayMethod.Credit,
        comment: "Some comment",
        amount: "865",
      },
    ],
  },

  {
    date: "2022-09-13",
    transactionList: [
      {
        id: "26",
        tag: Tag.Clothing,
        payMethod: PayMethod.Credit,
        comment: "Some comment",
        amount: "865",
      },
      {
        id: "29",
        tag: Tag.Clothing,
        payMethod: PayMethod.Credit,
        comment: "Some comment",
        amount: "865",
      },
      {
        id: "31",
        tag: Tag.Clothing,
        payMethod: PayMethod.Credit,
        comment: "Some comment",
        amount: "865",
      },
    ],
  },
];

describe("filterTransactionsHistory()", () => {
  it("returns new filtered instance", () => {
    const filteredTransactionsHistory = filterTransactionsHistory(
      transactionsHistory,
      { dateFrom: "2022-09-13", dateTo: "2022-10-15", pattern: "cloth" }
    );
    expect(filteredTransactionsHistory).not.toBe(transactionsHistory);
    expect(filteredTransactionsHistory).toEqual(expectedTransactionsHistory);
  });
});
