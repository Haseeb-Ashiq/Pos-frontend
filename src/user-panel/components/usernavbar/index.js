import React from 'react'
import { NavContainer, UserLogoImg, UserNavLeftSide, UserNavRightSide, UserNavWrap } from './usernavbarElements'

function UserNavbar() {
  return (
   <>
   <NavContainer>
       <UserNavWrap>
       <UserNavLeftSide>
           <UserLogoImg src={'https://seeklogo.com/images/F/fastfood-logo-D673849A4C-seeklogo.com.png'}/>
       </UserNavLeftSide>
       <UserNavRightSide>
       </UserNavRightSide>
       </UserNavWrap>
      
   </NavContainer>
   </>
  )
}

export default UserNavbar