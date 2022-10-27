import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to={"/expenses"}>Expenses</Link>
      <Link to={"/analytics"}>Analytics</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
}
