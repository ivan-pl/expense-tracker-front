import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation: FC = () => {
  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="nav" data-testid="nav">
      <NavLink
        className="link link-expenses"
        to={"/expenses"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <span className="link-text">Expenses</span>
      </NavLink>
      <NavLink
        className="link link-analytics"
        to={"/analytics"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <span className="link-text">Analytics</span>
      </NavLink>
      <NavLink
        className="link link-about"
        to={"/about"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <span className="link-text">About</span>
      </NavLink>
      <NavLink className="link link-logout" to={"/auth"}>
        <span className="link-text">Sign out</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
