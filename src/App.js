import logo from './logo.svg';
import './App.css';
import POS from './views/POS';
import Navbar from './components/navbar/navbar';
import Product from './admin/views/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatagory } from './Redux/Actions/Catagory.Action';
import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Orders from './admin/views/orders/order';
import Home from './admin/views/home/Home';
import OrderProcess from './admin/views/orderprocess/orderprocess';
import Index from './views/home-page';
import Login from './components/home-page-components/login';
import Signup from './components/home-page-components/signup';
function App() {
  const dispatch=useDispatch();
  const client=useSelector(state=>state.Client);
  useEffect(()=>{
    dispatch(getCatagory());
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Index isLogedIn={client.isLogedIn}/>} />
          <Route exact path='/user-login' element={client.isLogedIn ? <Navigate to={'/'}/> : <Login/>}/>
          <Route exact path='/user-signup' element={client.isRegistered ? <Navigate to={'/user-login'}/> : <Signup/>} />
          <Route exact path='/admin-home' element={<Home/>}/>
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
