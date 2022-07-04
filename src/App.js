import logo from './logo.svg';
import './App.css';
import POS from './views/POS';
import Navbar from './components/navbar/navbar';
import Product from './admin/views/Product';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatagory } from './Redux/Actions/Catagory.Action';
import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Orders from './admin/views/orders/order';
import Home from './admin/views/home/Home';
import OrderProcess from './admin/views/orderprocess/orderprocess';
import Index from './views/home-page';
import Login from './components/home-page-components/login';
import Signup from './components/home-page-components/signup';
import Navbar2 from './components/home-page-components/navbar2';
import User from './admin/views/users/User';
import { fetchClients } from './Redux/Actions/Client.Action';
import OrderPlace from './views/home-page/orderplace/OrderPlace';
import UserHome from './user-panel/views/user-home';
import UserProfile from './user-panel/views/user-profile/UserProfile';
import UserOrder from './user-panel/views/user-order/UserOrder';
import EditUserProfile from './user-panel/views/edituserprofile/EditUserProfile';
import OrderDetails from './user-panel/views/userorderdetails/OrderDetails';
function App() {
  const dispatch=useDispatch();
  const client=useSelector(state=>state.Client);
  const [userStatus,setUserStatus]=useState(false);
  const userRecord=JSON.parse(window.localStorage.getItem('clientCredentials'));
  useEffect(()=>{
    dispatch(getCatagory());
    dispatch(fetchClients());
    userRecord && setUserStatus(true);
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/navbar' element={<Navbar2/>} />
          <Route exact path='/' element={<Index isLogedIn={client.isLogedIn}/>} />
          <Route exact path='/order-place' element={<OrderPlace isLogedIn={client.isLogedIn}/>}/>
          <Route exact path='/user-login' element={client.isLogedIn ? <Navigate to={'/'}/> : <Login/>}/>
          <Route exact path='/user-signup' element={client.isRegistered ? <Navigate to={'/user-login'}/> : <Signup/>} />
          <Route exact path={'/user-home'} element={ userStatus ? <UserHome userStatus={userStatus} userRecord={userRecord} /> : <Login/>}/>
          <Route exact path={'/user-profile'} element={userStatus ? <UserProfile userStatus={userStatus} userRecord={userRecord}/> : <Navigate to='/user-login'/>}/>
          <Route exact path={'/user-order'} element={userStatus ? <UserOrder userStatus={userStatus} userRecord={userRecord}/> : <Login/>}/>
          <Route exact path={'/edit-user-profile'} element={userStatus ? <EditUserProfile userStatus={userStatus} userRecord={userRecord}/> : <Login/>}/>
          <Route exact path={'/user-order-detail/:orderid'} element={userStatus ? <OrderDetails userStatus={userStatus} userRecord={userRecord} /> : <Login/>}/>
          <Route exact path='/admin-home' element={<Home/>}/>
          <Route exact path='/pos' element={<POS/>}/>
          <Route exact path='/products' element={<Product/>}/>
          <Route exact path='/users' element={<User/>} />
          <Route exact path='/orders' element={<Orders/>}/>
          <Route exact path='/orderprocess/:orderid' element={<OrderProcess/>}/>
        </Routes>
      </Router>
      {/* <POS/> */}
      {/* <Product/> */}
    </div>
  );
}

export default App;
