import React from 'react'
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Bar from './Pages/Bar';
import ProductCatalog from './Pages/ProductCatalog';
import Adding from './Pages/Adding';

function App() {
  return (
    <div className="App" >
      <Bar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="adding" element={<Adding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
