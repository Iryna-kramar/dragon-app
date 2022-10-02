import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { DragonProvider } from "../src/context/context";
import Main from "./pages/Main/Main";
// import Gallery from "../src/container/Gallery/Gallery";
import {Gallery} from "./pages";
import "./App.css";
import { Navbar } from "./components";
import Info from "./pages/Info/Info";

const App = () => {
  
  return (
    <div>
      <DragonProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/:id" element={<Info />} />
            <Route path="/:id/details" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </DragonProvider>
    </div>
  );
};

export default App;
