import React from 'react'
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import ProductCatalog from './Pages/ProductCatalog';
import Adding from './Pages/Adding';

function App() {
  return (
    <div className="App" >
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
