import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Layout.scss";

export default function Layout() {
  return (
    <div className="layout">
      <Navigation />

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}
