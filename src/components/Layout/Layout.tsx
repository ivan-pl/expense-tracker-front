import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import { setNewTransactions } from "../../store/transactionsSlice";
import { useAppDispatch } from "../../app/hooks";
import loadMockedTransactionSection from "../../utils/loadMockedTransactions";
import "./Layout.scss";

const Layout: FC = () => {
  const dispatch = useAppDispatch();
  const mockedTransactionsInfo = loadMockedTransactionSection();
  dispatch(setNewTransactions(mockedTransactionsInfo));

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
