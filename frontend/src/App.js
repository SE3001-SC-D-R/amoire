import React from 'react'
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Bar from './Pages/Bar';
import ProductCatalog from './Pages/ProductCatalog';
import AddProduct from './Pages/AddProduct';
import DeleteProduct from './Pages/DeleteProduct';

function App() {
  return (
    <div className="App" >
      <Bar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="adding" element={<AddProduct />} />
          <Route path="delete" element={<DeleteProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
