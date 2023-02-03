import addTransaction from "./addTransaction";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import { PayMethod, Tag, Transaction } from "../types/transactions.type";

enableFetchMocks();

const testTransaction: Omit<Transaction, "id"> = {
  amount: "123",
  comment: "comment",
  payMethod: PayMethod.Cash,
  tag: Tag.Food,
};

describe("addTransaction", () => {
  it("returns id-string", async () => {
    const expectedId = "id-string";
    fetchMock.mockResponse(JSON.stringify({ name: expectedId }));
    expect(await addTransaction("", "", testTransaction, "")).toBe(expectedId);
  });

  it("throws Error", async () => {
    const errMsg = "some error";
    fetchMock.mockReject(new Error(errMsg));
    await expect(addTransaction("", "", testTransaction, "")).rejects.toThrow(
      errMsg
    );
  });

  it("throws Error", async () => {
    const errMsg = "Some error";
    fetchMock.mockResponse("", { status: 404, statusText: errMsg });
    await expect(addTransaction("", "", testTransaction, "")).rejects.toThrow(
      errMsg
    );
  });
});
