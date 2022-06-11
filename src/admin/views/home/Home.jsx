import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Redux/Actions/Cart.Action';
import { fetchProducts } from '../../../Redux/Actions/Product.Action';
import Layout from '../../components/layout/Layout';
import './home.css';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import BarChart from '../../components/barchart/barchart';
import PieChart from '../../components/piechart/piechart';
import LineChart from '../../components/linechart/linechart';
import { Button, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {Link} from 'react-router-dom';
const Home=()=>{
const dispatch=useDispatch();
const product=useSelector(state=>state.Product);
const cart=useSelector(state=>state.Cart);
useEffect(()=>{
dispatch(fetchProducts())
dispatch(getOrders())
},[])
// useEffect(()=>{
//       const d = new Date(2018, 11, 24, 10, 33, 30, 0).getFullYear();
//       // const 
// console.log(d)
// },[])
return (<>
    <Layout>
         <div className='home-container'>
              <div className='panel'>
                  {/* <div className='margin-auto'> */}
                  <div className='panel-tabs color-primary'>
                          <div className="icon-box">
                             <GroupOutlinedIcon className='icon-size'/>
                          </div>
                          <div className="text-box">
                                <p>Active Users</p>
                                <p>23</p>
                          </div>
                  </div>
                  <div className='panel-tabs color-scandary'>
                  <div className="icon-box">
                             <Inventory2OutlinedIcon className='icon-size'/>
                          </div>
                          <div className="text-box">
                                <p>Products</p>
                                <p>{product.products.length}</p>
                          </div>
                      </div>
                      <div className='panel-tabs color-primary'>
                      <div className="icon-box">
                             <BrokenImageOutlinedIcon className='icon-size'/>
                          </div>
                          <div className="text-box">
                                <p>Active Orders</p>
                                <p>{cart.orders.length}</p>
                          </div>
                      </div>
                      {/* </div>    */}
              </div>

              {/* Charts Sections */}
              <div className="charts">
                    <div className="bar-chart">
                          {/* <BarChart/> */}
                          <LineChart/>
                    </div>
                    <div className="pie-chart">
                          <PieChart/>
                    </div>
              </div>

              {/* Orders sections */}
              <div className="order-section">
              <TableContainer>
                   <Table>
                       <TableHead>
                           <TableRow style={{background:'blueviolet'}}>
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
                               {/* <TableRow>
                                   <TableCell align='center' colSpan={3}>
                                       Items Details
                                   </TableCell>
                               </TableRow> */}
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
export default Home;