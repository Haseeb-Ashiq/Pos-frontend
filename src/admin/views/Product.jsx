import { Button, Dialog,DialogContent, DialogTitle,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
     TextField } from '@mui/material';
     import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import React, { useEffect, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { deleteProduct, fetchProducts} from '../../Redux/Actions/Product.Action';
import './adminStyle.css';
import GridOnIcon from '@mui/icons-material/GridOn';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import ProductCard from '../components/productscard/productcard';
import ProductTableData from '../components/producttable/ProductTable';
import Layout from '../components/layout/Layout';
import ProductSave from '../components/productscard/ProductSave';
import ProductEdit from '../components/productscard/ProductEdit';
// import ProductTableData from '../components/producttable/ProductTableData';
const Product=()=>{
    const dispatch=useDispatch();
const product=useSelector(state=>state.Product);
const [gridView,setGridView]=useState(true);
const [openForm,setOpenForm]=useState(false);
const [formMode,setFormMode]=useState(true);
const [editData,setEditData]=useState('');
const [val,setVal] = useState('');
const [pro,setPro] = useState([]);
useEffect(()=>{
  dispatch(fetchProducts());
},[])

const handleProductSearch=e=>{
    setVal(e.target.value);
    if(val!=='')
    {
    const searchedList=product.products.filter(p=>{
        return Object.values(p)
        .join(" ")
        .toLowerCase()
        .includes(val.toLowerCase())
    })
    setPro(searchedList);
}
else{
    setPro(product.products);
}
    
}

const addOpenDialogue=()=>{
    setFormMode(true);
    setOpenForm(true);
}

const deleteProducts=(id)=>{
    dispatch(deleteProduct(id));
}

const _editProducts=(id)=>{
   setEditData(product.products.find((pro,_index)=>pro._id===id));
  setFormMode(false);
  setOpenForm(true);
}

const dialogueFormClose=()=>{
    setOpenForm(false)
}

    return (<>
<Layout>
<div className="product-container">
    <div className="product-header">
         <div className="product-search">
             <TextField value={val} onChange={handleProductSearch} variant="standard" className='search--product' label="Search products"/>
         </div>
         <div className="product-view">
             <div className="action-btn-group">
             <Button
             onClick={addOpenDialogue}
              variant="contained" 
             color="primary"><AddBoxOutlinedIcon/> Add Product</Button>
             </div>
             <div className="icon-btn">
             <GridOnIcon 
             style={{cursor:"pointer"}}
              onClick={()=>setGridView(true)}/>
              
               <TocOutlinedIcon 
               style={{cursor:"pointer"}}
                onClick={()=>setGridView(false)}/>
             </div>
            
         </div>
    </div>
    <div className="product-body">
        {
            gridView ? 
            <div className="admin-product-cards">
        {
            pro.length > 0 ? pro.map(_pro=> <ProductCard _product={_pro} deleteProducts={deleteProducts} _editProducts={_editProducts}/>)
            :
            product.products && product.products.map(pro=> <ProductCard _product={pro} deleteProducts={deleteProducts} _editProducts={_editProducts}/>)
        }
        </div>
        :
        
        
          <TableContainer style={{width:'90%',margin:'10px auto',background:'white',border:'1px solid black'}}>
          <Table>
                  <TableHead>
                      <TableRow color="primary">
                                <TableCell>Sr.no</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price($)</TableCell>
                                <TableCell>Catagory</TableCell>
                                
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {
                          product.products && product.products.map((_product,_index)=>(<>
                         <ProductTableData _product={_product} _index={_index}/>
                          </>))
                      }
                  </TableBody>
          </Table>
          </TableContainer>

        }
    

        

    </div>
</div>

<Dialog open={openForm} onClose={dialogueFormClose} maxWidth={'md'}>
<DialogTitle style={{display:'flex',justifyContent:'space-between'}}><><p>{formMode ? <>Add Product Form</> : <>Edit Product Form</>}</p> <Button style={{height:'40px'}} size={'small'} variant={'contained'} color={'error'} onClick={()=>setOpenForm(false)}>X</Button></></DialogTitle>
    <DialogContent dividers>
        {
            formMode ?  <ProductSave/> : <ProductEdit _editData={editData} dialogueFormClose={dialogueFormClose}/>
        }
     
    </DialogContent>
</Dialog>
</Layout>

        
    </>)
}
export default Product;