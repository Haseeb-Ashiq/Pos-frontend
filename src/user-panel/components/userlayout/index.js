import React from 'react'
import UserSideBar from '../userasid';
import UserNavbar from '../usernavbar';
import { UserAsideBarSection, UserLayoutContainer, UserPanelContentBody } from './userLayoutComponent';

function UserLayout({children}) {
  return (
   <>
    <UserNavbar/>
   <UserLayoutContainer>

   <UserAsideBarSection>
     <UserSideBar/>
   </UserAsideBarSection>
   <UserPanelContentBody>
   {children}
   </UserPanelContentBody>
   </UserLayoutContainer>
  
   
   </>
  )
}

export default UserLayout;