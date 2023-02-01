export default function checkResponse(response: Response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return true;
}
