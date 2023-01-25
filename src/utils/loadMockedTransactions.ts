import { DayTransactions, PayMethod, Tag } from "../types/transactions.type";

function loadMockedTransactionsHistory(): DayTransactions[] {
  return [
    {
      date: "2022-12-07",
      transactionList: [
        {
          id: "1",
          tag: Tag.Food,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "438",
        },
        {
          id: "2",
          tag: Tag.Housing,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "6540",
        },
        {
          id: "3",
          tag: Tag.Food,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "4328",
        },
        {
          id: "4",
          tag: Tag.Housing,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "65410",
        },
      ],
    },

    {
      date: "2022-12-05",
      transactionList: [
        {
          id: "6",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "7",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
      ],
    },

    {
      date: "2022-12-03",
      transactionList: [
        {
          id: "8",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "9",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "10",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "11",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "12",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "13",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
      ],
    },

    {
      date: "2022-11-01",
      transactionList: [
        {
          id: "14",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "15",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "16",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "17",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "18",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "19",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
      ],
    },

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
          id: "21",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "22",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "23",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "24",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
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
          id: "27",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "28",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "29",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "30",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
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

    {
      date: "2022-09-05",
      transactionList: [
        {
          id: "32",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "33",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "34",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "35",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
        {
          id: "36",
          tag: Tag.Transportation,
          payMethod: PayMethod.Debit,
          comment: "Another comment",
          amount: "4320",
        },
        {
          id: "37",
          tag: Tag.Clothing,
          payMethod: PayMethod.Credit,
          comment: "Some comment",
          amount: "865",
        },
      ],
    },
  ];
}

export default loadMockedTransactionsHistory;
