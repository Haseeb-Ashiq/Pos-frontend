import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AddToCartIcon, Bars, CartCounter,
   LeftContainer, Nav, 
   NavbarInnerContainer, 
   NavbarLink, 
   NavbarLinkContainer, NavIcon, NavLink, 
   RightContainer,OpenNavbarLink, LogoImg,
    UserIcon, UserProfilePicLogo, SubMenu, SubMenuInner, MenuItemLink, 
    CartItemMenu, CartItemMenuOne, CartItemMenuTwo, CartItems, CartProcessBtn, NavCart } from './NavbarElement';
import CartItemCard from '../cartitem';
import { useNavigate } from 'react-router-dom';
function Navbar({toggle,isLogedIn}) {
  const navigate=useNavigate();
const client = useSelector(state=>state.Client);
const cart=useSelector(state=>state.Cart);
const [isMenuOpen,setIsMenuOpen]=useState(false);
const [isCartOpen,setIsCartOpen]=useState(false);
const combineMethodCall=(a,b)=>{
  a(!isCartOpen);
  b(false);
}
const combineMethodCall2=(a,b)=>{
  a(false);
  b(!isMenuOpen);
}
  return (
    <>
        <Nav>
           <NavbarInnerContainer>
             <LeftContainer>
               <LogoImg src={'https://seeklogo.com/images/F/fastfood-logo-D673849A4C-seeklogo.com.png'}/>
             </LeftContainer>
             <RightContainer>
                 <NavbarLinkContainer>
                 <NavbarLink to={''}> 
                 {/* <NavCart> */}
                   <AddToCartIcon onClick={()=>combineMethodCall(setIsCartOpen,setIsMenuOpen)}/>
                  <CartItemMenu isCartOpen={isCartOpen}>
                   <CartItemMenuOne>
                     <CartItems>
                       {
                         cart.cart.map((_item,index)=>(
                           <>
                            <CartItemCard _item={_item} index={index}/>

                           </>
                         ))
                       }
 
                     </CartItems>
                   </CartItemMenuOne>
                   <CartItemMenuTwo>
                     <CartProcessBtn to={'/order-place'}>Order Proceed</CartProcessBtn>
                   </CartItemMenuTwo>
                 </CartItemMenu>
                 <CartCounter>{cart.cart.length > 0 ? <>{cart.cart.length}</> : <>0</>}</CartCounter> </NavbarLink> 
                   {
                     isLogedIn ?<>
                     <UserProfilePicLogo
                      src={`https://food-deliver-apis.herokuapp.com/public/${client.client.empPic}`} 
                      onClick={()=>combineMethodCall2(setIsCartOpen,setIsMenuOpen)}/>
                       <SubMenu isMenuOpen={isMenuOpen}>
                          <SubMenuInner>
                          <MenuItemLink to={'/user-home'}>User Panel</MenuItemLink>
                            <MenuItemLink to={'/user-admin'}><UserIcon/>Profile</MenuItemLink>
                            <MenuItemLink to={'/user-admin'}>Logout</MenuItemLink>
                            </SubMenuInner> 
                          </SubMenu></> 
                          :
                           <NavbarLink 
                           to={'/user-admin'}>
                             <UserIcon/>
                             </NavbarLink>
                   }
                   <OpenNavbarLink onClick={()=>toggle()}>&#8801;</OpenNavbarLink>
                 </NavbarLinkContainer>
             </RightContainer>
           </NavbarInnerContainer>
         </Nav>
    </>
  )
}

export default Navbar;