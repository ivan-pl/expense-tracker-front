import {
  TransactionsHistory,
  Tag,
  PayMethod,
} from "../../../types/transactions.type";
import countTotal, { Total } from "./countTotal";

describe("countTotal()", () => {
  it("returns {day: 100.00, week: 200.00, month: 300.00", () => {
    const transactionsHistory: TransactionsHistory = [
      {
        date: "2022-12-24",
        transactionList: [
          {
            id: "1",
            tag: Tag.Food,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "40",
          },
          {
            id: "2",
            tag: Tag.Housing,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "60",
          },
        ],
      },

      {
        date: "2022-12-21",
        transactionList: [
          {
            id: "6",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "20",
          },
          {
            id: "7",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "30",
          },
        ],
      },

      {
        date: "2022-12-20",
        transactionList: [
          {
            id: "6",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "50",
          },
        ],
      },

      {
        date: "2022-11-29",
        transactionList: [
          {
            id: "8",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "100",
          },
        ],
      },

      {
        date: "2022-11-13",
        transactionList: [
          {
            id: "14",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "100",
          },
        ],
      },
    ];

    expect(countTotal(transactionsHistory)).toEqual({
      day: "100.00",
      week: "200.00",
      month: "300.00",
    } as Total);
  });
});
