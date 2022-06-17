import React from 'react'
import { AddToCartIcon, Bars, CartCounter, Nav, NavIcon, NavLink, UserLoginIcon } from './NavbarElement';

function Navbar({toggle}) {
  return (
    <>
         <Nav>
             {/* <NavLink to={'/'}>Signup/Signin <UserLoginIcon/></NavLink> */}
             <NavLink to={'/'}><AddToCartIcon/> <CartCounter>2</CartCounter></NavLink>
               <NavIcon onClick={()=>toggle()}>
                   <p>Menu</p>
                   <Bars/>
               </NavIcon>
             
         </Nav>
    </>
  )
}

export default Navbar;