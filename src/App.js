import logo from './logo.svg';
import './App.css';
import POS from './views/POS';
import Navbar from './components/navbar/navbar';
import Product from './admin/views/Product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCatagory } from './Redux/Actions/Catagory.Action';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Orders from './admin/views/orders/order';
import Home from './admin/views/home/Home';
import OrderProcess from './admin/views/orderprocess/orderprocess';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCatagory());
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/pos' element={<POS/>}/>
          <Route exact path='/products' element={<Product/>}/>
          <Route exact path='/orders' element={<Orders/>}/>
          <Route exact path='/orderprocess/:orderno' element={<OrderProcess/>}/>
        </Routes>
      </Router>
      {/* <POS/> */}
      {/* <Product/> */}
    </div>
  );
}

export default App;
