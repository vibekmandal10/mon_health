import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./component/Navbar";
import MainContent from "./component/MainContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logs from "./component/Logs";
import Redis_data from "./component/Redis_data";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Logs />} />
            <Route path="log" element={<Logs />} />
            <Route path="redis" element={<Redis_data />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
