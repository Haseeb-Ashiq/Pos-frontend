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
function Sidebar({isOpen,toggle}) {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={()=>toggle()}>
        <Icon>
            <CloseIcon>

            </CloseIcon>
        </Icon>
        <SidebarMenu>
            <SidebarLink to={'/products'}>Pizza</SidebarLink>
            <SidebarLink to={'/products'}>Burger</SidebarLink>
            <SidebarLink to={'/products'}>Shawarma</SidebarLink>
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