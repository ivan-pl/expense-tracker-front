import { UserState } from "../store/userSlice";

export default function addUser(user: UserState): void {
  localStorage.setItem("user", JSON.stringify(user));
}
