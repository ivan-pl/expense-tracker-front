import { Link } from "react-router-dom";

import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link className="link link-expenses" to={"/expenses"}>
        <span className="link-text">Expenses</span>
      </Link>
      <Link className="link link-analytics" to={"/analytics"}>
        <span className="link-text">Analytics</span>
      </Link>
      <Link className="link link-about" to={"/about"}>
        <span className="link-text">About</span>
      </Link>
      <Link className="link link-logout" to={"/auth"}>
        <span className="link-text">Sign out</span>
      </Link>
    </nav>
  );
}
