import { DayTransactions, PayMethod, Tag } from "../types/transactions.type";
import addDayTransactions from "./addDayTransactions";
import { STORAGE_PREFIX } from "./variables";

describe("addDayTransactions()", () => {
  const dayTransactions: DayTransactions = {
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

  afterEach(() => {
    localStorage.clear();
  });

  it("adds DayTransactions", async () => {
    await addDayTransactions(dayTransactions);
    expect(
      JSON.parse(localStorage.getItem(STORAGE_PREFIX + dayTransactions.date)!)
    ).toEqual(dayTransactions);
  });
});
