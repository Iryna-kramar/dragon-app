import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { DragonProvider } from "../src/context/context";
import Home from "../src/pages/Home";
import Details from "../src/pages/Details";
import "./App.css";

function App() {
  return (
  <div>
    <DragonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </DragonProvider>
  </div>
);
}

export default App;
