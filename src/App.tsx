import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Header } from "./pages/Header";
import { Nav } from "./pages/Nav";
import { Home } from "./Home";

export function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
