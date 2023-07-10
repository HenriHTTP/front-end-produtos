import React from 'react';
import './index.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router,Route,Routes}from "react-router-dom";
import Productid from './components/products/product_id';
import Productname from './components/Product_name';
import Home from './components/home';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/item/:id' element={<Productid/>} />
          <Route  path='/name/:name' element={<Productname/>} />
        </Routes>


    </Router>
   

  )
}

export default App;