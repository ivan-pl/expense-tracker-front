import { DayTransactions, PayMethod, Tag } from "../types/transactions.type";
import setTransactionsHistory from "./setTransactionsHistory";
import { STORAGE_PREFIX } from "./variables";

describe("setTransactionsHistory()", () => {
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

  it("sets historyTransactions", async () => {
    const transactionsHistory = [trans1, trans2];
    await setTransactionsHistory(transactionsHistory);

    transactionsHistory.forEach((transaction) => {
      expect(
        JSON.parse(localStorage.getItem(STORAGE_PREFIX + transaction.date)!)
      ).toEqual(transaction);
    });
  });

  it("clears storage before adding", async () => {
    await setTransactionsHistory([trans1]);
    expect(localStorage.getItem(STORAGE_PREFIX + trans1.date)).not.toBeNull();

    await setTransactionsHistory([trans2]);
    expect(localStorage.getItem(STORAGE_PREFIX + trans1.date)).toBeNull();
    expect(localStorage.getItem(STORAGE_PREFIX + trans2.date)).not.toBeNull();
  });
});
