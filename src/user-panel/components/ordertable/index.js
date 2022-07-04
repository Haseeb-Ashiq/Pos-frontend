import { Table,TableBody, TableContainer, TableHead, TableRow ,TableCell,Button ,Typography} from '@mui/material'
import React, { useEffect } from 'react'
import { OrderTableContainer} from './orderTableElement'
import {FaCheck,FaShippingFast,
    FaShoppingBag,FaHandsWash,
    FaPrint,FaFileInvoiceDollar,FaRegEdit,FaUser,FaHourglassEnd,FaHashtag,FaTools,FaEye} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getOrders } from '../../../Redux/Actions/Cart.Action';
function OrderTable() {
    const dispatch=useDispatch();
   const cart=useSelector(state=>state.Cart);
   useEffect(()=>{
       dispatch(getOrders());
   },[console.table(cart.orders)])
   return (
    <OrderTableContainer>
       <TableContainer>
           <Table>
               <TableHead>
                   <TableRow>
                   <TableCell align={'left'}><FaHashtag/>&#160;Sr.no</TableCell>
                               <TableCell align={'center'}><FaUser/>&#160;Customer</TableCell>
                               <TableCell align={'center'}><FaRegEdit/>&#160;Order No</TableCell>
                               <TableCell align={'center'}><FaFileInvoiceDollar/>&#160;Payment Method</TableCell>
                               <TableCell align={'center'}><FaHourglassEnd/>&#160;Status</TableCell>
                               <TableCell align={'right'}><FaTools/>&#160;Action</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                           {
                               cart.orders && cart.orders.map((order,index)=>(<>
                               <TableRow key={index}>
                                   <TableCell align={'left'}>{++index}</TableCell>
                                   <TableCell align={'center'}>{order.customerName}</TableCell>
                                   <TableCell align={'center'}>{order.orderNo}</TableCell>
                                   <TableCell align={'center'}>{order.paymentMethod ==='1' ? <>On Delivery</> : <>JazzCash</>}</TableCell>
                                   <TableCell align={'center'}>
                                       {
                                            order.status ==='pending' && 
                                            <Typography color={'error'}>
                                            {order.status}
                                                </Typography> 
                                       }
                                       {
                                           order.status==='accepted' &&
                                               <Typography color={'warning'} style={{color:'green'}}>
                                               {order.status}
                                                   </Typography> 
                                       }
                                       {
                                            order.status ==='in process' && 
                                            <Typography color={'info'}>
                                            {order.status}
                                                </Typography> 
                                       }
                                       {
                                            order.status ==='shipping' && 
                                            <Typography color={'violet'}>
                                           <span><FaShippingFast/></span> {order.status}
                                                </Typography> 
                                       }
                                       {
                                            order.status ==='delivered' && 
                                            <Typography color={'primary'}>
                                            <FaShoppingBag/> {order.status}
                                                </Typography> 
                                       }
                                       {
                                            order.status ==='completed' && 
                                            <Typography color={'primary'}>
                                           <FaHandsWash/> {order.status}
                                                </Typography> 
                                       }
                                     </TableCell>
                                   <TableCell align={'right'}> 
                                       <Button component={Link} to={`/user-order-detail/${order._id}`} variant='contained' size='small' 
                                       aria-label="small button group"
                                        style={{borderRadius:'5%'}}>
                                            <FaEye/>
                                            </Button>                
                                           
                                            </TableCell>
                               </TableRow>
                               </>))
                           }
                       </TableBody>
           </Table>
       </TableContainer>
    </OrderTableContainer>
  )
}

export default OrderTable