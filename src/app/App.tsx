import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import Layout from "../components/Layout";
import About from "../pages/About";
import Analytics from "../pages/Analytics";
import Expenses from "../pages/Expenses";
import firebaseConfig from "./firebase-config";
import Auth from "../pages/Auth";

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const auth = getAuth(app);

const App: FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Expenses />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
