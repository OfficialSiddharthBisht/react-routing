import './App.css';
import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import Products from './components/Product'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path = '/Product' element = {<Products/>}></Route>
        <Route path = './Product/:id' element = {<ProductPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
