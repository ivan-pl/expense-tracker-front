import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/expenses"}>Expenses</Link>
            </li>
            <li>
              <Link to={"/analytics"}>Analytics</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}
