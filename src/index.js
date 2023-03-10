import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ALL_ROUTE from "@Utils/Routes";
import * as LAYOUT from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LAYOUT.PageWrapper>
      <Routes>
        {ALL_ROUTE.map((route, index) => (
          <Route
            exact
            key={index}
            path={route.pathname}
            element={route.element}
          />
        ))}
      </Routes>
    </LAYOUT.PageWrapper>
  </BrowserRouter>
);
