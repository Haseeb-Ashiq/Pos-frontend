import React, { useState } from 'react'
import { ExtendedContainer, LeftContainer, 
    NabbarInnerContainer, NavbarContainer,
     NavbarLink, NavbarExtendedLink , NavbarLinkContainer,
      OpenNavbarLink, RightContainer } from './Navbar2Elements'
import {FaPizzaSlice,FaShoppingCart} from 'react-icons/fa';
function Navbar2() {
    const [open,setOpen]=useState(false);
  return (
      <>
      <NavbarContainer open={open}>
          <NabbarInnerContainer>
          <LeftContainer>
              <NavbarLinkContainer>
                  <NavbarLink to={'/'}><FaPizzaSlice/> Home</NavbarLink>
                  <NavbarLink to={'/'}><FaPizzaSlice/> Product</NavbarLink>
                  <NavbarLink to={'/'}><FaPizzaSlice/> About</NavbarLink>
                  <OpenNavbarLink onClick={()=>setOpen(!open)}>
                      {
                          open ? <>&#10005;</> : <> &#8801;</>
                      }
                      </OpenNavbarLink>
              </NavbarLinkContainer>
          </LeftContainer>

          <RightContainer>

         
          </RightContainer>
          </NabbarInnerContainer>

          <ExtendedContainer>
              {
                  open && (
                    <NavbarLinkContainer>
                    <NavbarExtendedLink to={'/'}><FaPizzaSlice/> Home</NavbarExtendedLink>
                    <NavbarExtendedLink to={'/'}><FaPizzaSlice/> Product</NavbarExtendedLink>
                    <NavbarExtendedLink to={'/'}><FaShoppingCart/></NavbarExtendedLink>
                    <NavbarExtendedLink to={'/'}><FaPizzaSlice/> Menu </NavbarExtendedLink>
                </NavbarLinkContainer>
                  )
              }
         
          </ExtendedContainer>
      </NavbarContainer>
<div>Navbar2</div>

      </>
        )
}

export default Navbar2