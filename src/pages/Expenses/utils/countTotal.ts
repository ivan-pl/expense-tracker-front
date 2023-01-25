import differenceInDays from "date-fns/differenceInDays";
import currency from "currency.js";

import {
  Transaction,
  TransactionsHistory,
} from "../../../types/transactions.type";
import formatDate from "../../../utils/formatDate";

export interface Total {
  day: string;
  week: string;
  month: string;
}

export default function countTotal(
  transactionsHistory: TransactionsHistory
): Total {
  const total: Total = {
    day: "0.00",
    week: "0.00",
    month: "0.00",
  };

  if (transactionsHistory.length === 0) {
    return total;
  }

  const curDate = formatDate(new Date());
  for (const { date, transactionList } of transactionsHistory) {
    const diffInDays = differenceInDays(new Date(curDate), new Date(date));

    if (diffInDays > 30) {
      return total;
    }

    const amount = transactionList.reduce(
      (prevAmount: string, transaction: Transaction) =>
        currency(prevAmount).add(transaction.amount).toString(),
      "0.00"
    );

    if (diffInDays <= 1) {
      total.day = currency(total.day).add(amount).toString();
    }

    if (diffInDays <= 7) {
      total.week = currency(total.week).add(amount).toString();
    }

    if (diffInDays <= 30) {
      total.month = currency(total.month).add(amount).toString();
    }
  }

  return total;
}
