import { PayMethod, Tag, TransactionsInfo } from "../types/transactions.type";

function loadMockedTransactionSection(): TransactionsInfo {
  return {
    total: { day: 12450, week: 23540, month: 124980 },
    transactionHistory: [
      {
        date: new Date(2022, 11, 7).toISOString(),
        transactionList: [
          {
            id: "1",
            tag: Tag.Food,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "438 RUB",
          },
          {
            id: "2",
            tag: Tag.Housing,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "6540 RUB",
          },
          {
            id: "3",
            tag: Tag.Food,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "4328 RUB",
          },
          {
            id: "4",
            tag: Tag.Housing,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "65410 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 11, 5).toISOString(),
        transactionList: [
          {
            id: "6",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "7",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 11, 3).toISOString(),
        transactionList: [
          {
            id: "8",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "9",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "10",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "11",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "12",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "13",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 10, 1).toISOString(),
        transactionList: [
          {
            id: "14",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "15",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "16",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "17",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "18",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "19",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 9, 15).toISOString(),
        transactionList: [
          {
            id: "20",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "21",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "22",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "23",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "24",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "25",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 8, 13).toISOString(),
        transactionList: [
          {
            id: "26",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "27",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "28",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "29",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "30",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "31",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 8, 5).toISOString(),
        transactionList: [
          {
            id: "32",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "33",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "34",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "35",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: "36",
            tag: Tag.Transportation,
            payMethod: PayMethod.Debit,
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: "37",
            tag: Tag.Clothing,
            payMethod: PayMethod.Credit,
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },
    ],
  };
}

export default loadMockedTransactionSection;
