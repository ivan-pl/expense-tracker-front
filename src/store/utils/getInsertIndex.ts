import { DayTransactions } from "../../types/transactions.type";

export default function getInsertIndex(
  transactionsHistory: DayTransactions[],
  date: string
): number {
  for (const [ind, { date: curDate }] of Object.entries(transactionsHistory)) {
    if (curDate < date) {
      return +ind;
    }
  }
  return transactionsHistory.length;
}
