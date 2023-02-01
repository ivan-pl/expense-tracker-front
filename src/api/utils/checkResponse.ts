export default function checkResponse(response: Response): void {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}
