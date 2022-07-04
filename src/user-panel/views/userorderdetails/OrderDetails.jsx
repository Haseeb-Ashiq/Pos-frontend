import React from 'react'
import UserOrderDetails from '../../components/userorderdetails'
import UserLayout from '../../components/userlayout/index';
function OrderDetails() {
  return (
   <UserLayout>
        <div style={{minHeight:'100vh',maxWidth:'95%',border:'1px solid black',margin:'20px auto'}}>
        <UserOrderDetails/>
        </div>
   </UserLayout>
  )
}

export default OrderDetails