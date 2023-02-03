import isCredentialsValid from "./isCredentialsValid";
import fetchMock from "jest-fetch-mock";

describe("isCredentialsValid()", () => {
  it("returns true", async () => {
    fetchMock.mockResponse("");
    await expect(isCredentialsValid("", "")).resolves.toBeTruthy();
  });

  it("returns false", async () => {
    fetchMock.mockResponse("", { status: 401 });
    await expect(isCredentialsValid("", "")).resolves.toBeFalsy();
  });
});
