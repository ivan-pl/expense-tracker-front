import {
  DayTransactions,
  TransactionsHistory,
} from "../types/transactions.type";

export interface Filter {
  dateFrom: string;
  dateTo: string;
  pattern: string;
}

export default function filterTransactionsHistory(
  transactionsHistory: TransactionsHistory,
  { dateFrom, dateTo, pattern }: Filter
): TransactionsHistory {
  const filteredTransactionsHistory: TransactionsHistory = [];

  for (const { date, transactionList } of transactionsHistory) {
    if (dateFrom && dateFrom > date) continue;
    if (dateTo < date) continue;

    const dayTransactions: DayTransactions = {
      date,
      transactionList: transactionList,
    };

    if (pattern) {
      const regex = new RegExp(pattern, "i");
      dayTransactions.transactionList = dayTransactions.transactionList.filter(
        ({ amount, comment, payMethod, tag }) =>
          regex.test(tag) ||
          regex.test(payMethod) ||
          regex.test(comment) ||
          regex.test(amount)
      );
    }

    if (dayTransactions.transactionList.length > 0) {
      filteredTransactionsHistory.push(dayTransactions);
    }
  }

  return filteredTransactionsHistory;
}
