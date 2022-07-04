import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import HomeLayout from '../../../components/home-page-components/homelayout/HomeLayout';
import Navbar from '../../../components/home-page-components/navbar';
import OrderProceesBox from '../../../components/home-page-components/orderproceedcomp';
import { OrderProceedContainer } from '../../../components/home-page-components/orderproceedcomp/orderProceedElement';
import './style.css';
function OrderPlace({isLogedIn}) {
    const navigate=useNavigate();
   
  return (
    <>
    <HomeLayout isLogedIn={isLogedIn}>
      <div className="order-proceed-container">
          <OrderProceesBox/>
     </div> 
   
    </HomeLayout>
    </>
  )
}

export default OrderPlace