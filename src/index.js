import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./pages/Layout";
import About from "./pages/About";
import Flashcard from "./pages/Flashcard";
import Home from "./pages/Home";
import Translate from "./pages/Translate";


import reportWebVitals from './reportWebVitals';



const App = () => {
  return (
    <div style={{
      backgroundImage: "url(/background5.png)",
      backgroundSize: '1800px', 
      height: '810px',
      width:'1400px', 
      textAlign: 'center'
  }}>
<h1 style= {{ fontSize: '50px', color: 'white', textAlign: 'center'}}> Line 對話分析</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="Flashcard" element={<Flashcard />} />
          <Route path="About" element={<About />} />
          <Route path="Translate" element={<Translate />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <div>
   {App()}
  </div>
);
reportWebVitals();
