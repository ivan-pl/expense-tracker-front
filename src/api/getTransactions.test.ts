import getTransactions from "./getTransactions";
import fetchMock from "jest-fetch-mock";

describe("getTransactions()", () => {
  it("returns array of transactions", async () => {
    const response = {
      "2022-12-07": {
        "-NNB0F0t5YQdFa5tUHBD": {
          amount: "111",
          comment: "hmm",
          payMethod: "Cash",
          tag: "Housing",
        },
      },
      "2023-01-29": {
        "-NNAj0vfkY7Y_d8u0IcG": {
          amount: "12",
          comment: "as",
          payMethod: "Cash",
          tag: "Food",
        },
      },
    };

    fetchMock.mockResponse(JSON.stringify(response));
    await expect(getTransactions("", "")).resolves.toEqual([
      {
        date: "2023-01-29",
        transactionList: [
          {
            id: "-NNAj0vfkY7Y_d8u0IcG",
            amount: "12",
            comment: "as",
            payMethod: "Cash",
            tag: "Food",
          },
        ],
      },
      {
        date: "2022-12-07",
        transactionList: [
          {
            id: "-NNB0F0t5YQdFa5tUHBD",
            amount: "111",
            comment: "hmm",
            payMethod: "Cash",
            tag: "Housing",
          },
        ],
      },
    ]);
  });

  it("returns []", async () => {
    fetchMock.mockResponse("{}");
    await expect(getTransactions("", "")).resolves.toEqual([]);
  });

  it("throws Error", async () => {
    fetchMock.mockResponse("", { status: 403 });
    await expect(getTransactions("", "")).rejects.toThrow();
  });
});
