import { Table,Button, TableBody, TableCell, TableContainer,
    Typography, TableHead, TableRow } from '@mui/material';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, orderStatus } from '../../../Redux/Actions/Cart.Action';
import Layout from '../../components/layout/Layout';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {Link} from 'react-router-dom';
import './order.css';
import {FaCheck,FaShippingFast,
    FaShoppingBag,FaHandsWash,
    FaPrint,FaFileInvoiceDollar,FaRegEdit,FaUser,FaHourglassEnd,FaHashtag,FaTools} from 'react-icons/fa';
const Orders=()=>{
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.Cart);
    useEffect(()=>{
          dispatch(getOrders());
    },[])
    return (<>
    <Layout>

    <div className="order-container">
        <div className="inner-table-container">
               <TableContainer>
                   <Table>
                       <TableHead>
                           <TableRow style={{backgroundColor:'whitesmoke'}}>
                               <TableCell colSpan={6}>
                                   <Button variant={'contained'}><FaPrint/>&#160;Print</Button>
                               </TableCell>
                           </TableRow>
                           <TableRow style={{backgroundColor:'whitesmoke'}}>
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
                               <TableRow>
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
                                       <Button component={Link} to={`/orderprocess/${order._id}`} variant='contained' size='small' 
                                       aria-label="small button group"
                                        style={{borderRadius:'5%'}}>
                                            <VisibilityOutlinedIcon/>
                                            </Button>
                                              {cart.isOrderUpdated &&
                                             <Button color={'secondary'} 
                                             variant='contained' size='small' 
                                       aria-label="small button group"
                                        style={{borderRadius:'5%',margin:'0 2px'}}
                                        onClick={()=>dispatch(orderStatus({id:order._id,status:'accepted'}))}
                                        disabled
                                        >
                                           <FaCheck/> Accept
                                            </Button> 

                                            }                           
                                           
                                            </TableCell>
                               </TableRow>
                               </>))
                           }
                       </TableBody>
                   </Table>
               </TableContainer>
               </div>
         </div>

    </Layout>
        
    </>)
}
export default Orders;