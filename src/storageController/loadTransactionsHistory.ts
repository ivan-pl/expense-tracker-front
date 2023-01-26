import { TransactionsHistory } from "../types/transactions.type";
import { STORAGE_PREFIX } from "./variables";

export default function loadTransactionsHistory(): TransactionsHistory {
  const transactionsHistory: TransactionsHistory = [];

  for (const key of Object.keys(localStorage)) {
    if (key.startsWith(STORAGE_PREFIX)) {
      transactionsHistory.push(JSON.parse(localStorage.getItem(key)!));
    }
  }

  transactionsHistory.sort(({ date: date1 }, { date: date2 }) => {
    return Number(date1 < date2);
  });

  return transactionsHistory;
}
