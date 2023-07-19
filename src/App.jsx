import React from 'react';
import './index.css';
import Navbar from './components/layout/layout.navbar';
import {BrowserRouter as Router,Route,Routes}from "react-router-dom";
import Productid from './pages/page.product.id';
import Productname from './components/layout/layout.product.name';
import Home from './pages/page.home';

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