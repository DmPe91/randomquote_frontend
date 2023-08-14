import "./App.css";
import React from "react";
import { Home } from "./pages/Home.js";
import { AddQuote } from "./pages/addQuote.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-quote" element={<AddQuote />} />
      </Routes>
    </>
  );
}

export default App;
