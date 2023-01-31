import React, { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import Navigation from "../Navigation/Navigation";
import loadUser from "../../storageController/loadUser";
import isCredentialsValid from "../../api/isCredentialsValid";
import { add as addUserCredentials, signOut } from "../../store/userSlice";
import "./Layout.scss";

const Layout: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userCredentials = loadUser();

  useEffect(() => {
    if (!userCredentials) {
      navigate("/auth");
      return;
    }

    const { uid, token } = userCredentials!;
    isCredentialsValid(uid, token)
      .then((isValid) => {
        if (isValid) {
          dispatch(addUserCredentials({ uid, token }));
        } else {
          throw new Error("Checking credentials was failed");
        }
      })
      .catch(() => {
        dispatch(signOut());
        navigate("/auth");
      });
  }, []);

  return (
    <div className="layout">
      <Navigation />

      <main className="main" data-testid="main">
        <Outlet />
      </main>

      <footer className="footer">© 2022 All Rights Reserved</footer>
    </div>
  );
};

export default Layout;
