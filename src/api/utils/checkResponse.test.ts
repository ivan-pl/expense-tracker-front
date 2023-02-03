import checkResponse from "./checkResponse";

require("isomorphic-fetch");

describe("checkResponse()", () => {
  it("returns undefined", () => {
    const response = new Response(null, { status: 200 });
    expect(checkResponse(response)).toBeUndefined();
  });

  it("throws Error", () => {
    const statusText = "Some exception";
    const response = new Response(null, { status: 404, statusText });
    expect(() => checkResponse(response)).toThrowError(statusText);
  });
});
