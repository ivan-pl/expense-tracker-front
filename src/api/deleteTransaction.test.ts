import deleteTransaction from "./deleteTransaction";
import fetchMock from "jest-fetch-mock";

describe("deleteTransaction()", () => {
  it("returns undefined", async () => {
    fetchMock.mockResponse("null", { status: 200 });
    await expect(
      deleteTransaction("some-id", "2022-11-13", "", "")
    ).resolves.toBeUndefined();
  });

  it("throws Error", async () => {
    const errMsg = "some error";
    fetchMock.mockResponse("", { status: 404, statusText: errMsg });
    await expect(
      deleteTransaction("some-id", "2022-11-13", "", "")
    ).rejects.toThrow(errMsg);
  });

  it("throws Error", async () => {
    fetchMock.mockAbort();
    await expect(
      deleteTransaction("some-id", "2022-11-13", "", "")
    ).rejects.toThrow();
  });
});
