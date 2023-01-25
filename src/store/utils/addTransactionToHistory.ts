import {
  Transaction,
  TransactionsInfo,
  DayTransactions,
} from "../../types/transactions.type";

export default function addTransactionToHistory(
  transactionHistory: TransactionsInfo["transactionHistory"],
  date: string,
  transaction: Transaction
): void {
  const ind = transactionHistory.findIndex(
    (_) => new Date(_.date) <= new Date(date)
  );

  if (ind === -1) {
    transactionHistory.push({
      date,
      transactionList: [transaction],
    } as DayTransactions);
    return;
  }

  if (transactionHistory[ind].date === date) {
    transactionHistory[ind].transactionList.push(transaction);
  } else {
    transactionHistory.splice(ind, 0, {
      date,
      transactionList: [transaction],
    } as DayTransactions);
  }
}
