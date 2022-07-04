import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';
import { FaPizzaSlice ,FaShoppingCart ,FaUserCircle} from 'react-icons/fa';
function Sidebar({isOpen,toggle}) {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={()=>toggle()}>
        <Icon>
            <CloseIcon>

            </CloseIcon>
        </Icon>
        <SidebarMenu>
            <SidebarLink to={'/products'}>&#127829; Pizza</SidebarLink>
            <SidebarLink to={'/products'}>&#127828; Burger</SidebarLink>
            <SidebarLink to={'/products'}>&#127790; Shawarma</SidebarLink>
            <SidebarLink to={'/products'}>&#127839; Fries</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to={'/admin-home'}>Order now</SidebarRoute>
            <SidebarRoute to={'/user-login'}>Signup/SignIn</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
    </>
  )
}

export default Sidebar