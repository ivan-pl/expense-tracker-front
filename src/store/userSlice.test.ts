import userReducer, {
  initialState,
  add,
  reset,
  UserState,
  addToStorageAndStore,
  signOut,
} from "./userSlice";
import addUser from "../storageController/addUser";
import { reset as resetTransactions } from "./transactionsSlice";

jest.mock("../storageController/addUser");

describe("users reducer", () => {
  const user: UserState = { token: "zxcsa", uid: "qwpeojl" };

  it("should handle initialState", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle add", () => {
    expect(userReducer(undefined, add(user))).toEqual(user);
  });

  it("should handle reset", () => {
    expect(userReducer(undefined, reset())).toEqual({ token: "", uid: "" });
  });

  it("addToStorageAndStore()", () => {
    const dispatch = jest.fn();
    addToStorageAndStore(user)(dispatch, jest.fn(), undefined);
    expect(dispatch.mock.lastCall[0]).toEqual(add(user));
    expect(addUser).toBeCalledWith(user);
  });

  it("signOut()", () => {
    const dispatch = jest.fn();
    const mockedClearStorage = jest.spyOn(
      Object.getPrototypeOf(window.localStorage),
      "clear"
    );

    signOut()(dispatch, jest.fn(), undefined);
    expect(mockedClearStorage).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toEqual(reset());
    expect(dispatch.mock.calls[1][0]).toEqual(resetTransactions());
  });
});
