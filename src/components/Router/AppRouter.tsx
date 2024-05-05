import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "@app/contants/pages";
import BikesPage from "@app/pages/Bikes";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages.home} index element={<BikesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
