import {
  Transaction,
  DayTransactions,
  TransactionsHistory,
} from "../../types/transactions.type";

export default function addTransactionToHistory(
  transactionsHistory: TransactionsHistory,
  date: string,
  transaction: Transaction
): void {
  const ind = transactionsHistory.findIndex(
    (_) => new Date(_.date) <= new Date(date)
  );

  if (ind === -1) {
    transactionsHistory.push({
      date,
      transactionList: [transaction],
    } as DayTransactions);
    return;
  }

  if (transactionsHistory[ind].date === date) {
    transactionsHistory[ind].transactionList.push(transaction);
  } else {
    transactionsHistory.splice(ind, 0, {
      date,
      transactionList: [transaction],
    } as DayTransactions);
  }
}
