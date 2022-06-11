import { Table,Button, TableBody, TableCell, TableContainer,
    Typography, TableHead, TableRow } from '@mui/material';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Redux/Actions/Cart.Action';
import Layout from '../../components/layout/Layout';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {Link} from 'react-router-dom';
import './order.css';

const Orders=()=>{
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.Cart);
    useEffect(()=>{
          dispatch(getOrders());
    },[])
    return (<>
    <Layout>

    <div className="order-container">
               <TableContainer>
                   <Table>
                       <TableHead>
                           <TableRow>
                               <TableCell>Sr.no</TableCell>
                               <TableCell>Customer</TableCell>
                               <TableCell>Order No</TableCell>
                               <TableCell>Status</TableCell>
                               <TableCell>Action</TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           {
                               cart.orders && cart.orders.map((order,index)=>(<>
                               <TableRow>
                                   <TableCell>{++index}</TableCell>
                                   <TableCell>{order.customer}</TableCell>
                                   <TableCell>{order.orderNo}</TableCell>
                                   <TableCell><Typography color={'error'}>pending</Typography></TableCell>
                                   <TableCell> 
                                       <Button component={Link} to={`/orderprocess/${order.orderNo}`} variant='contained' size='small' 
                                       aria-label="small button group"
                                        style={{borderRadius:'5%'}}>
                                            <VisibilityOutlinedIcon/>
                                            </Button>

                                            <Button component={Link} color={'secondary'}
                                             to={`/orderprocess/${order.orderNo}`} 
                                             variant='contained' size='small' 
                                       aria-label="small button group"
                                        style={{borderRadius:'5%',margin:'0 2px'}}>
                                            {/* <VisibilityOutlinedIcon/> */}
                                           Accept
                                            </Button>
                                            </TableCell>
                               </TableRow>
                               </>))
                           }
                       </TableBody>
                   </Table>
               </TableContainer>
         </div>

    </Layout>
        
    </>)
}
export default Orders;