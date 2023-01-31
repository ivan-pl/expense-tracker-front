import { Transaction } from "../types/transactions.type";
import { URL_USERS } from "./variables";

export default async function addTransaction(
  uid: string,
  token: string,
  transaction: Omit<Transaction, "id">,
  date: string
): Promise<string> {
  const url =
    URL_USERS + `${uid}/${date}.json?` + new URLSearchParams({ auth: token });

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(transaction),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json())["name"];
}
