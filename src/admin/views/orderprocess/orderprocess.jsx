import { Button, Step, StepIcon, StepLabel, Stepper,
    TableContainer,Table,TableBody
    ,TableHead,TableRow,TableCell
} from "@mui/material";
import React, { useState } from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {Link} from 'react-router-dom';
import './orderprocess.css';
import CustomBarChart from "../../components/customchart/barchart";
import CustomLineChart from "../../components/customchart/linechart";
const OrderProcess=()=>{
    const [activeStep,setActiveStep]=useState(0);
    const steps = [
       {
           stp:'In Progress'
       },
       {
           stp:'Shipping'
       },
       {
           stp:'delivered'
       }
    ]
    const nextStep=()=>{
        setActiveStep((current)=>current+1);
    }
    return (<>
 
 <div className="order-process-container">
     <Button component={Link} to={'/orders'}
      variant={'contained'} 
      color={'primary'}
      className='btn-back-order'
      >
          Back to orders
      </Button>
    <div className="order-process-panel">
             <div className="order-process-header">
                 <div className="date-recieve-info">
                 <div className="date">
                 <CalendarMonthOutlinedIcon/> <span>2018, 11, 24, 10, 33, 30, 0</span>
                 </div>
                 <div className="order-id">
                     order id:12344555
                 </div>
                 </div>
             </div>
             <div className="order-process-body-panel">
                   <div className="order-process-body-panel-box">
                       <div className="order-info">
                             
                       </div>
                       <div className="order-info">

                       </div>
                       <div className="order-info">

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
                             <TableBody>
                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>

                                 <TableRow>
                                     <TableCell>1</TableCell>
                                     <TableCell></TableCell>
                                     <TableCell>Apple</TableCell>
                                     <TableCell>2</TableCell>
                                     <TableCell>200</TableCell>
                                     <TableCell>400</TableCell>
                                 </TableRow>
                             </TableBody>
                         </Table>
                     </TableContainer>
                 </div>
                 <div className="delivered-btn-box">
                       <div className="order-btn-box">
                           <Button variant={'contained'} id='mark-deliver-btn' color={'info'}>Mark Deliver</Button>
                       </div>
                 </div>
             </div>
    </div>

 </div>

<CustomBarChart/>
<CustomLineChart/>
    <Stepper activeStep={activeStep}>
       {
           steps.map(lbl=> (<><Step><StepLabel>{lbl.stp}</StepLabel></Step></>))
       }
    </Stepper>
    <Button variant={'contained'} onClick={nextStep}>Next</Button>
    </>)
}
export default OrderProcess;