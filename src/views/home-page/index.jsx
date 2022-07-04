import React, { useState } from 'react'
import HeroSection from '../../components/home-page-components/HeroSection/Hero'
import Navbar from '../../components/home-page-components/navbar';
import Products from '../../components/home-page-components/products'
// import Signup from '../../components/home-page-components/signuplogin'
import './home-page.css';
function Index({isLogedIn}) {
  return (
    <>
    <div className="index-container">
    <HeroSection isLogedIn={isLogedIn}/>
    <Products isLogedIn={isLogedIn}/>
    </div>
    </>
  )
}

export default Index