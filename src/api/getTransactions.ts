import {
  DayTransactions,
  TransactionsHistory,
  Transaction,
} from "../types/transactions.type";
import checkResponse from "./utils/checkResponse";
import { URL_USERS } from "./variables";

interface ResponseType {
  [DateString: string]: { [id: string]: Omit<Transaction, "id"> };
}

export default async function getTransactions(
  uid: string,
  token: string
): Promise<TransactionsHistory> {
  const url =
    URL_USERS +
    `${uid}/transactions.json?` +
    new URLSearchParams({ auth: token });

  const response = await fetch(url);
  checkResponse(response);

  const responseTransactions = (await response.json()) as ResponseType;
  const transactionsHistory: TransactionsHistory = [];

  for (const [date, transactions] of Object.entries(responseTransactions)) {
    const transactionList = Object.entries(transactions).map(
      ([id, transaction]) => ({ ...transaction, id })
    );
    transactionsHistory.push({ date, transactionList });
  }

  return transactionsHistory.sort((a, b) => (a.date < b.date ? 1 : -1));
}
