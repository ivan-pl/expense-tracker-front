import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Layout.scss";

const Layout: FC = () => {
  return (
    <div className="layout">
      <Navigation />

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">© 2022 All Rights Reserved</footer>
    </div>
  );
};

export default Layout;
