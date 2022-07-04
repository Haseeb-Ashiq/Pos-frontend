import React, { useState } from 'react'
import {
CartItemCards, 
CartItemImg,
 CartItemDesc, 
 CartItemControll,
  CartItemImage, 
  CartItemTextBox, 
  CartItemPlus,
   CartItemMinus}
   from './CartCardElements';
   import { FaPlusCircle,FaMinusCircle} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { decreamentItem, increamentItem } from '../../../Redux/Actions/Cart.Action';
function CartItemCard(props) {
    const [Qty,setQty]=useState(props._item.qtys);
    const dispatch=useDispatch();
  return (
   <>
    <CartItemCards key={props.index}>
                         <CartItemImg>
                           <CartItemImage src={`http://localhost:5000/public/${props._item.productPictures[0].img}`}/>
                         </CartItemImg>
                         <CartItemDesc>
                           <p>{props._item.name}</p>
                           <span>{ `${props._item.price}x${props._item.qtys}= ${(props._item.price * props._item.qtys).toFixed(2)}` }</span>
                         </CartItemDesc>
                         <CartItemControll>
                         <CartItemMinus onClick={()=>dispatch(decreamentItem(props._item))}><FaMinusCircle/></CartItemMinus>
                          <CartItemTextBox type={'text'} minLength={1} maxLength={5} value={props._item.qtys} readOnly/>
                          <CartItemPlus onClick={()=>dispatch(increamentItem(props._item))}><FaPlusCircle/></CartItemPlus>
                         </CartItemControll>
                       </CartItemCards>
   </>
  )
}

export default CartItemCard