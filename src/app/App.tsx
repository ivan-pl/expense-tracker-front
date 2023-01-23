import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import About from "../pages/About";
import Analytics from "../pages/Analytics";
import Expenses from "../pages/Expenses";

const App: FC = () => {
  return (
    <Routes>
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
