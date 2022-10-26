import React from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

export function renderRoutes() {
  return (
    <Routes>
      {ROUTES.map((route) => {
        return (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={route.element}
          />
        );
      })}
    </Routes>
  );
}