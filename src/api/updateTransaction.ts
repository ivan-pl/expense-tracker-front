import { URL_USERS } from "./variables";
import { Transaction } from "../types/transactions.type";
import checkResponse from "./utils/checkResponse";

export default async function updateTransaction(
  transaction: Transaction,
  date: string,
  uid: string,
  token: string
): Promise<Transaction> {
  const url =
    URL_USERS +
    `${uid}/transactions/${date}.json?` +
    new URLSearchParams({ auth: token });
  const { id, ...data } = transaction;

  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({ [id]: data }),
  });
  checkResponse(response);

  const updatedTransaction = (await response.json())[id] as Omit<
    Transaction,
    "id"
  >;

  return { ...updatedTransaction, id };
}
