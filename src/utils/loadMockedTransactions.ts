import { TransactionSection } from "../types/transactions.type";

function loadMockedTransactionSection(): TransactionSection {
  return {
    total: { day: 12450, week: 23540, month: 124980 },
    transactionHistory: [
      {
        date: new Date(2022, 11, 7),
        transactionList: [
          {
            id: 1,
            tag: "Food",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "438 RUB",
          },
          {
            id: 2,
            tag: "Housing",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "6540 RUB",
          },
          {
            id: 3,
            tag: "Food",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "4328 RUB",
          },
          {
            id: 4,
            tag: "Housing",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "65410 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 11, 5),
        transactionList: [
          {
            id: 6,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 7,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 11, 3),
        transactionList: [
          {
            id: 8,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 9,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 10,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 11,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 12,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 13,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 10, 1),
        transactionList: [
          {
            id: 14,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 15,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 16,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 17,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 18,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 19,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 9, 15),
        transactionList: [
          {
            id: 20,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 21,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 22,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 23,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 24,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 25,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 8, 13),
        transactionList: [
          {
            id: 26,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 27,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 28,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 29,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 30,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 31,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },

      {
        date: new Date(2022, 8, 5),
        transactionList: [
          {
            id: 32,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 33,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 34,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 35,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
          {
            id: 36,
            tag: "Transportation",
            payMethod: "Debit card",
            comment: "Another comment",
            amount: "4320 RUB",
          },
          {
            id: 37,
            tag: "Clothing",
            payMethod: "Creadit card",
            comment: "Some comment",
            amount: "865 RUB",
          },
        ],
      },
    ],
  };
}

export default loadMockedTransactionSection;
