import addUser from "./addUser";
import { UserState } from "../store/userSlice";
import loadUser from "./loadUser";

describe("addUser()", () => {
  it("adds user", () => {
    const user: UserState = { token: "asd", uid: "lkhjdlkjs" };
    addUser(user);
    expect("user" in localStorage).toBeTruthy();
    expect(loadUser()).toEqual(user);
  });
});
