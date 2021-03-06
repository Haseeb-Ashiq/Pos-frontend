import React from 'react';
import './productcard.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const ProductCard=(props)=>{
    return (<>
     <div className="admin-product-card">
                  <div className="card-head">
                      <div className="btn-operation" style={{position:"absolute",right:'0'}}>
                      <ModeEditOutlineOutlinedIcon
                      onClick={()=>props._editProducts(props._product._id)} 
                      style={{cursor:"pointer"}} 
                      color='primary'/> 

                      <DeleteOutlineOutlinedIcon 
                      onClick={()=>props.deleteProducts(props._product._id)}
                      style={{cursor:"pointer"}}
                       color='error'/>
                      </div>
                  
                  </div>
                  <div className="card-body">
                      <img src={`https://food-deliver-apis.herokuapp.com/public/${props._product.productPictures[0].img}`} alt="" />
                  </div>
                  <div className="card-footer">
                      <p>Name: <span>{props._product.name}</span></p>
                      <p>Status:<span style={{color:'green'}}>Active</span></p>
                  </div>
             </div>
    </>)
}
export default ProductCard;