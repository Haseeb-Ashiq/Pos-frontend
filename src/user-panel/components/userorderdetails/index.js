import React,{useEffect,useState} from 'react'
import { OrderDetailsContainer, StepContainer, StepOneIcon,StepTwoIcon,StepThreeIcon, StepOne, StepOneChild, StepThree, StepTwo, StepTwoChild, OrderProcessHeader, OrderRecieveInfo, Date, OrderId, OrderStatusSection, StatusLabel, OrderProcessItems } from './ordersdetailsElement'
import {FaHourglassStart,FaShippingFast,FaHome,FaRegCalendarAlt} from 'react-icons/fa';
import './style.css';
import { TableContainer,Table,TableHead,TableFooter,TableRow,TableCell,TableBody } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function UserOrderDetails() {
   const params=useParams();
   const [order,setOrder]=useState(); 
   const [itemLength,setItemLength]=useState(0);
    let [totalPrice,setTotalPrice]=useState(0);
    const [markComplete,setMarkComplete]=useState(false);
    const stepChild=document.querySelector('.step-one-child');
    const stepChildTwo=document.querySelector('.step-two-child');
   const cart=useSelector(state=>state.Cart);
    useEffect(()=>{
        const newarr=cart.orders.find(o=>o._id===params.orderid)
        setOrder(newarr);
        setItemLength(newarr.cartItems.length);
        setTotalPrice(newarr?.cartItems.reduce((prev,current)=>{
         return prev + current.price*current.qty
     },0));
    },[params.orderid,order])

    useEffect(()=>{
    },setTimeout(() => {
        fetchState(order?.status) 
    }, 500))
    const fetchState=(status)=>{
        // alert(status)
        if(status==='shipping')
        {
           
            stepChild.classList.add('step-one-width');
        }
        if(status==='delivered')
        {
            // setMarkComplete(false);
            stepChild.classList.add('step-one-width');
            stepChildTwo.classList.add('step-two-width');
        }
        if(status==='completed')
        {
            setMarkComplete(true)
            stepChild.classList.add('step-one-width');
            stepChildTwo.classList.add('step-two-width');
        }
       }
    return (
    <OrderDetailsContainer>
        <StepContainer>
            <StepOne>
                <StepOneIcon>
                <FaHourglassStart/>
                </StepOneIcon>
                <StepOneChild className='step-one-child'></StepOneChild>
            </StepOne>
            <StepTwo>
                <StepTwoIcon>
                    <FaShippingFast style={{fontSize:'x-large'}}/>
                </StepTwoIcon>
                <StepTwoChild className='step-two-child'></StepTwoChild>
            </StepTwo>
            <StepThree>
                <StepThreeIcon>
                    <FaHome/>
                </StepThreeIcon>
            </StepThree>
        </StepContainer>

        <OrderProcessHeader>
            <OrderRecieveInfo>
                <Date>
                   <FaRegCalendarAlt/> <span>2018, 11, 24, 10, 33, 30, 0</span>
                </Date>
                <OrderId>
            order id:{order?._id}
            </OrderId>
            </OrderRecieveInfo>

            <OrderStatusSection>
                <StatusLabel>
                    {markComplete ? <span style={{color:'red',fontSize:'x-large'}}>Order Completed!</span> : <>{order?.status}</>}
                </StatusLabel>
            </OrderStatusSection>
        </OrderProcessHeader>

        <OrderProcessItems>
        <TableContainer>
                         <Table>
                             <TableHead style={{position:'sticky'}}>
                                 <TableRow style={{background:'whitesmoke'}}>
                                 <TableCell>Sr.no</TableCell>
                                 <TableCell>Image</TableCell>
                                 <TableCell>Name</TableCell>
                                 <TableCell>Qty</TableCell>
                                 <TableCell>Price ($)</TableCell>
                                 <TableCell>T.Price</TableCell>
                                 </TableRow>
                             </TableHead>
                             <TableBody id="tableBody">
                                 {
                                     order?.cartItems?.map((item,index)=>(
                                         <>
                                          <TableRow>
                                     <TableCell>{++index}</TableCell>
                                     <TableCell><img src={`https://food-deliver-apis.herokuapp.com/public/${item.product_img}`} style={{height:'50px',width:'50px'}}/></TableCell>
                                     <TableCell>{item.name}</TableCell>
                                     <TableCell>{item.qty}</TableCell>
                                     <TableCell>${item.price}</TableCell>
                                     <TableCell>${item.price * item.qty}</TableCell>
                                 </TableRow>
                                         </>
                                     ))
                                 }
                             </TableBody>
                             <TableFooter>
                                 <TableHead>
                                     <TableRow>
                                         <TableCell colSpan={3}>Total Items : {itemLength}</TableCell>
                                         <TableCell colSpan={3}>Total Prices :$ {totalPrice} 
                                         </TableCell>
                                     </TableRow>
                                 </TableHead>
                             </TableFooter>
                         </Table>
                     </TableContainer>
        </OrderProcessItems>


    </OrderDetailsContainer>
  )
}

export default UserOrderDetails