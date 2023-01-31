import { UserState } from "../store/userSlice";

export default function loadUser(): UserState | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
