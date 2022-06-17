import React from 'react'
import { Navigate } from 'react-router-dom'
import HeroSection from '../../components/home-page-components/HeroSection/Hero'
import Login from '../../components/home-page-components/login'
// import Navbar from '../../components/home-page-components/navbar'
import Products from '../../components/home-page-components/products'
// import Signup from '../../components/home-page-components/signuplogin'

function Index({isLogedIn}) {
  return (
    <>
    <HeroSection/>
    <Products isLogedIn={isLogedIn}/>
   
    </>
  )
}

export default Index