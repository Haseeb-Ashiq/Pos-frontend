import {TableRow,TableCell} from '@mui/material';
import React, { useEffect } from 'react';

const ProductTableData=(props)=>{
    useEffect(()=>{
        console.log(props._product)
    },[])
    return (<>
         <TableRow>
                              <TableCell>{props._index}</TableCell>
                              <TableCell><img src={`http://localhost:5000/public/${props._product.productPictures[0].img}`} style={{height:"50px",width:"50px"}}/></TableCell>
                              <TableCell>{props._product.name}</TableCell>
                              <TableCell>{props._product.qty}</TableCell>
                              <TableCell>{props._product.price}</TableCell>
                              <TableCell>{" "}</TableCell>
                          </TableRow>
    </>)
}
export default ProductTableData;