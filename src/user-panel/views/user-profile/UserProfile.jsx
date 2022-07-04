import React, { useEffect } from 'react'
import UserLayout from '../../components/userlayout'
import {Link} from 'react-router-dom';
import UserProfileSection from '../../components/userprofilecomp';
function UserProfile({userStatus,userRecord}) {
  useEffect(()=>{

  },[])
    return (
   <>
   <UserLayout>
   <div style={{minHeight:'100vh',maxWidth:'95%',border:'1px solid black',margin:'20px auto',boxShadow:'-2px -2px 0 0 rgba(0,0,0,0.5)'}}>
       <UserProfileSection userRecord={userRecord}/>
       </div>
   </UserLayout>
   </>
  )
}

export default UserProfile