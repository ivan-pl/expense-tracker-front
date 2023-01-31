import { URL_METADATA } from "./variables";

export default async function isCredentialsValid(
  uid: string,
  token: string
): Promise<boolean> {
  const url =
    URL_METADATA + `${uid}.json?` + new URLSearchParams({ auth: token });

  const response = await fetch(url);

  return response.ok;
}
