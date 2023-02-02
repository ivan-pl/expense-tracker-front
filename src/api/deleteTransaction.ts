import checkResponse from "./utils/checkResponse";
import { URL_USERS } from "./variables";

export default async function deleteTransaction(
  id: string,
  date: string,
  uid: string,
  token: string
) {
  const url =
    URL_USERS +
    `${uid}/transactions/${date}/${id}.json?` +
    new URLSearchParams({ auth: token });

  const response = await fetch(url, { method: "DELETE" });
  checkResponse(response);
}
