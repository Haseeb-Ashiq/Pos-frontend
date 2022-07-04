import React, { useEffect } from 'react'
import UserLayout from '../../components/userlayout'

function UserHome() {
  useEffect(()=>{

  },[])
  return (
   <>
   <UserLayout>
       <div style={{minHeight:'100vh',maxWidth:'95%',border:'1px solid black',margin:'20px auto'}}>
       From home 
       </div>
   </UserLayout>
   </>
  )
}

export default UserHome