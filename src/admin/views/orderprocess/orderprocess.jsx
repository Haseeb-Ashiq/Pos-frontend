import { Button, Step, StepIcon, StepLabel, Stepper,
    TableContainer,Table,TableBody
    ,TableHead,TableRow,TableCell, TableFooter
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {Link, useParams} from 'react-router-dom';
import './orderprocess.css';
import {useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import {FaShippingFast,FaUserEdit,FaEnvelope,FaPhoneAlt,FaUserAlt,FaHourglassStart,FaHome} from 'react-icons/fa';
import {orderStatus} from '../../../Redux/Actions/Cart.Action';
const OrderProcess=()=>{
    const cart=useSelector(state=>state.Cart);
    const dispatch=useDispatch();
    const params=useParams();
    const [order,setOrder]=useState();
    const [markComplete,setMarkComplete]=useState(true);
    const [itemLength,setItemLength]=useState(0);
    let [totalPrice,setTotalPrice]=useState(0)
    const [activeStep,setActiveStep]=useState(0);
    const [orderState,setOrderState]=useState();
    const stepChild=document.querySelector('.step-one-child');
    const stepChildTwo=document.querySelector('.step-two-child');
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
            setMarkComplete(false);
            stepChild.classList.add('step-one-width');
            stepChildTwo.classList.add('step-two-width');
        }
        if(status==='completed')
        {
            stepChild.classList.add('step-one-width');
            stepChildTwo.classList.add('step-two-width');
        }
       }
    const orderStatusUpdateHandler=(status)=>{
        if(status=='in process')
        {
            
            dispatch(orderStatus({id:order._id,status:status}))
        }
        if(status=='shipping')
        {
            stepChild.classList.add('step-one-width');
            dispatch(orderStatus({id:order._id,status:status}))
        }
        if(status=='delivered')
        {
            setMarkComplete(false);
            stepChildTwo.classList.add('step-two-width');
            dispatch(orderStatus({id:order._id,status:status}))
        }
        // if(status==='completed')
        // {
            
        // }
    }
const combineHigerOrder=(a,b)=>{
    a(orderStatus({id:order?._id,status:'completed'}));
    b(true);
}
    const statusHandler=e=>{
        console.log(e)
        orderStatusUpdateHandler(e);
    }
    return (<>
 <Layout>
 <div className="order-process-container">

   <div className="step-container">
      
         <div className="step-one">
             <div className="step-icon">
             <FaHourglassStart/>
             </div>
         <div className="step-one-child"></div>
         </div>
         <div className="step-two">
             <div className="step-icon">
                 <FaShippingFast style={{fontSize:'x-large'}}/>
             </div>
             <div className="step-two-child"></div>
         </div>
         <div className="step-three">
             <div className="step-icon">
             <FaHome/>
             </div>
         </div>
   </div>


    <div className="order-process-panel">
          
             <div className="order-process-header">
                 <div className="date-recieve-info">
                 <div className="date">
                 <CalendarMonthOutlinedIcon/> <span>2018, 11, 24, 10, 33, 30, 0</span>
                 </div>
                 <div className="order-id">
                     order id:{order?._id}
                 </div>
                 </div>

                 <div className="order-process-header-actions">
                    <div className="order-header-action-btn-group"></div>
                    <div className="order-header-action-order-mark-btn">
                       <Button variant={'contained'} onClick={()=>combineHigerOrder(dispatch,setMarkComplete)} disabled={markComplete}>Mark Complete</Button>
                    </div>
                    <div className="order-header-action-state">
                     <p>State:</p>
                     <select name='orderstate' onChange={(e)=>statusHandler(e.target.value)}>
                         <option value="">select</option>
                         <option value="in process">in process</option>
                         <option value="shipping">shipping</option>
                         <option value="delivered">delivered</option>
                        </select>
                    </div>
                 </div>

             </div>

             <div className="order-process-body-panel">
                   <div className="order-process-body-panel-box">
                       <div className="order-info">
                           <div className="order-info-client-img">
                           <div className="order-info-img-box">
                               <img src={`http://localhost:5000/public/${order?.client?.empPic}`}/>
                           </div>
                            <h3>{order?.client.fullname}</h3> 
                           </div>
                           
                       </div>
                       <div className="order-info">
                              <div className="order-info-client-info">
                                  <h3><span><FaUserAlt/></span> Client Info</h3>
                                  <p><span><FaUserEdit/></span> {order?.client?.fullname}</p>
                                  <p><span><FaEnvelope/></span> {order?.client?.email}</p>
                                  <p><span><FaPhoneAlt/></span> {order?.client?.phone}</p>
                              </div>
                       </div>
                       <div className="order-info">
                           <div className="order-info-client-shipping">
                              <h3><span> <FaShippingFast/></span> Shipping</h3>
                              <p>{order?.deliveryAddress}</p>
                           </div>
                             
                       </div>
                   </div>
             </div>

             <div className="order-process-item-panel">
                 <div className="order-process-items">
                     <TableContainer>
                         <Table>
                             <TableHead style={{position:'sticky'}}>
                                 <TableRow style={{background:'#570A57'}}>
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
                                     <TableCell><img src={`http://localhost:5000/public/${item.product_img}`} style={{height:'50px',width:'50px'}}/></TableCell>
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
                 </div>
             </div>
    </div>

 </div>

 </Layout>
 
    </>)
}
export default OrderProcess;