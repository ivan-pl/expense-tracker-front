import { STORAGE_PREFIX } from "./variables";
import { TransactionsHistory } from "../types/transactions.type";
import addDayTransactions from "./updateDayTransactions";

export default async function setTransactionsHistory(
  transactionsHistory: TransactionsHistory
) {
  // clear storage
  for (const key of Object.keys(localStorage)) {
    if (key.startsWith(STORAGE_PREFIX)) {
      localStorage.removeItem(key);
    }
  }

  transactionsHistory.forEach((_) => addDayTransactions(_));
}
