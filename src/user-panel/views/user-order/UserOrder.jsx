import React, { useEffect } from 'react'
import OrderTable from '../../components/ordertable'
import UserLayout from '../../components/userlayout'

function UserOrder() {
    useEffect(()=>{
     
    },[])
  return (
   <>
   <UserLayout>
   <div style={{minHeight:'100vh',maxWidth:'95%',border:'1px solid black',margin:'20px auto'}}>
      <OrderTable/>
       </div>
   </UserLayout>
   </>
  )
}

export default UserOrder;