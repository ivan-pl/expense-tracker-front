import differenceInDays from "date-fns/differenceInDays";
import currency from "currency.js";

import { Transaction, TransactionsInfo } from "../../types/transactions.type";

export default function setTotal(
  total: TransactionsInfo["total"],
  date: string,
  transaction: Transaction
): void {
  const diffInDays = differenceInDays(new Date(), new Date(date));
  if (diffInDays < 0) {
    return;
  }

  if (diffInDays <= 1) {
    total.day = currency(total.day).add(transaction.amount).toString();
  }

  if (diffInDays <= 7) {
    total.week = currency(total.week).add(transaction.amount).toString();
  }

  if (diffInDays <= 30) {
    total.month = currency(total.month).add(transaction.amount).toString();
  }
}
