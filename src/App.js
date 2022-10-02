import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { DragonProvider } from "../src/context/context";
import { Gallery, Main, Info } from "./pages";
import { Navbar, Login, Register } from "./components";

import "./App.css";

const App = () => {
  return (
    <div>
      <DragonProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:id" element={<Info />} />
            <Route path="/:id/details" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </DragonProvider>
    </div>
  );
};

export default App;
