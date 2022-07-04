import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../../../Redux/Actions/Cart.Action';
import { CalculationSection, CalTable, 
    CartFormSection,HomeCancelBtn, 
    HomeCartForm, HomeCartInput, HomeCartItemImage, HomeCartLabel, HomeConfirmBtn, HomeOrderConfirm, HomeOrderConfirmPayment, HomeOrderPayment, HomeRadiaBtn, InnerOrderTableBox, OrderCalculation, OrderIntoCart, OrderProceedContainer } from './orderProceedElement'

function OrderProceesBox() {
const cart=useSelector(state=>state.Cart);
const dispatch=useDispatch();
const [clientCredential,setClientCredential]=useState(JSON.parse(window.localStorage.getItem('clientCredentials')));
const [customerId,setCustomerId]=useState(clientCredential._id);
const [customerName,setCustomerName]=useState(clientCredential.fullname);
const [orderno,setOrderNo]=useState(clientCredential._id);
const [deliveryAddress,setDeliveryAddress]=useState('');
const [paymentMethodOne,setPaymentMethodOne]=useState(false);
const [paymentMethodTwo,setPaymentMethodTwo]=useState('');
useEffect(()=>{
  console.log(clientCredential)
},[])
const saveOrder=()=>{
    console.log({paymentMethodTwo})
    const cartData={
        customerName,
        orderNo:orderno,
        customer_id:customerId,
        deliveryAddress,
        paymentMethod: paymentMethodTwo,
        cartItems:cart.cart.map(item=>{
            return {_id:item._id,name:item.name,img:item.productPictures[0].img,qtys:item.qtys,price:item.price}
        })
    }
    console.log(cartData)
    cartData && dispatch(addOrder(cartData))
}
const radioHandler=e=>{
    setPaymentMethodTwo(e.target.value)
}
return (
   <>
   <OrderProceedContainer>
       <OrderIntoCart>
           <InnerOrderTableBox>
               <TableContainer>
               <Table>
                   <TableHead>
                       <TableRow style={{background:'white'}}>
                       <TableCell colSpan={6} align={'left'} style={{color:'black',fontSize:'20px'}}>Item Cart</TableCell>
                       </TableRow>
                       <TableRow style={{background:'white'}}>
                           <TableCell align={'left'} style={{color:'black'}}>Sr.no</TableCell>
                           <TableCell align={'center'} style={{color:'black'}}>Image</TableCell>
                           <TableCell align={'center'} style={{color:'black'}}>Name</TableCell>
                           <TableCell align={'center'} style={{color:'black'}}>Qty</TableCell>
                           <TableCell align={'center'} style={{color:'black'}}>Price ($)</TableCell>
                           <TableCell align={'right'} style={{color:'black'}}>T.I.Price ($)</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {
                           cart.cart.map((item,index)=>(
                               <>
                               <TableRow>
                           <TableCell align={'left'} style={{color:'white'}}>{++index}</TableCell>
                           <TableCell align={'center'} style={{color:'white'}}><HomeCartItemImage src={`http://localhost:5000/public/${item.productPictures[0].img}`}/></TableCell>
                           <TableCell align={'center'} style={{color:'white'}}>{item.name}</TableCell>
                           <TableCell align={'center'} style={{color:'white'}}>{item.qtys}</TableCell>
                           <TableCell align={'center'} style={{color:'white'}}>{item.price}</TableCell>
                           <TableCell align={'right'} style={{color:'white'}}>{(item.price * item.qtys).toFixed(2)}</TableCell>
                       </TableRow>
                               </>
                           ))
                       }
                   
                   </TableBody>
               </Table>
               </TableContainer>
           </InnerOrderTableBox>
       </OrderIntoCart>
       <OrderCalculation>
           <CalculationSection>
               <CalTable>
                   <TableContainer>
                       <Table>
                       <TableHead>
                           <TableRow style={{background:'white'}}>
                             <TableCell align={'left'} style={{color:'black'}}>Items</TableCell>
                             <TableCell align={'center'} style={{color:'black'}}>Tax ($)</TableCell>
                             <TableCell align={'right'} style={{color:'black'}}>Total Price ($)</TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                       <TableRow>
                           <TableCell align={'left'} style={{color:'white'}}>{cart.cart.length}</TableCell>
                           <TableCell align={'center'} style={{color:'white'}}>5</TableCell>
                           <TableCell align={'right'} style={{color:'white'}}>{
                               cart.cart.reduce((prev,current)=>{
                                   return prev + current.price*current.qtys
                               },0)
                           }</TableCell>
                       </TableRow>
                       </TableBody>
                       </Table>
                   </TableContainer>
               </CalTable>
           </CalculationSection>

            <CartFormSection>
               <HomeCartForm>
                   <HomeCartLabel>Order Id</HomeCartLabel>
                   <HomeCartInput type={'text'} value={clientCredential._id} readOnly/>
                   <HomeCartLabel>C.Name</HomeCartLabel>
                   <HomeCartInput type={'text'} value={clientCredential.fullname} readOnly/>
                   <HomeCartLabel>Deliver Address</HomeCartLabel>
                   <HomeCartInput type={'text'} value={deliveryAddress} onChange={(e)=>setDeliveryAddress(e.target.value)} multiple/>
               </HomeCartForm>
            </CartFormSection>

            <HomeOrderConfirmPayment>
                <HomeOrderPayment>
                   <p>Payment Method.</p>
                   <div>
                    <HomeRadiaBtn type={'radio'} checked value='1' onClick={radioHandler} name='payment'/> On Delivery
                    <HomeRadiaBtn type={'radio'} value='2' onClick={radioHandler} name='payment'/> Jazz Cash
                    </div>
                </HomeOrderPayment>
                <HomeOrderConfirm>
                    <HomeConfirmBtn onClick={saveOrder}>Confirm Order</HomeConfirmBtn>
                    <HomeCancelBtn>Cancel Order</HomeCancelBtn>
                </HomeOrderConfirm>
            </HomeOrderConfirmPayment>

       </OrderCalculation>
   </OrderProceedContainer>
   </>
  )
}

export default OrderProceesBox