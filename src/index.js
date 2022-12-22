import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout";
import Upload from "./pages/Upload";
import Analysis from "./pages/Analysis";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

import reportWebVitals from "./reportWebVitals";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Analysis" element={<Analysis />} />
          <Route path="Upload" element={<Upload />} />
          <Route path="Aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div
    style={{
      backgroundImage: "url(/background5.png)",
      backgroundSize: "100% 100%",
      height: "100vh",
      width: "100vw",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <App />
  </div>
);
reportWebVitals();
