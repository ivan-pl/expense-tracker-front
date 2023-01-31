import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";

import { auth } from "../../app/firebase-config";
import { signOut as resetStore } from "../../store/userSlice";
import { useAppDispatch } from "../../app/hooks";
import "./Navigation.scss";

const Navigation: FC = () => {
  const activeStyle = {
    textDecoration: "underline",
  };

  const dispatch = useAppDispatch();

  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    signOut();
    dispatch(resetStore());
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
      <NavLink
        className="link link-logout"
        to={"/auth"}
        onClick={handleSignOut}
      >
        <span className="link-text">Sign out</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
