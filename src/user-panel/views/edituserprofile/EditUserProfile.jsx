import React from 'react'
import EditUserProfileSection from '../../components/usereditpro'
import UserLayout from '../../components/userlayout'

function EditUserProfile({userRecord}) {
  return (
   <>
   <UserLayout>
   <div style={{minHeight:'100vh',maxWidth:'95%',border:'1px solid black',margin:'20px auto',boxShadow:'-2px -2px 0 0 rgba(0,0,0,0.5)'}}>
      <EditUserProfileSection userRecord={userRecord}/>
   </div>
   </UserLayout>
   </>
  )
}

export default EditUserProfile