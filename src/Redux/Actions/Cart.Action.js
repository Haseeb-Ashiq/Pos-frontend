import { ADD_CART, INCREAMENT_ITEM, REMOVE_ITEM, 
    DECREAMENT_ITEM, REMOVE_CART,ADD_ORDER, GET_ORDER, ORDER_STATUS } from "../Action.Types/constant.type";

export const addToCart=(product)=>({
    type:ADD_CART,
    payload:product
})
export const removeCartItem=(id)=>({
    type:REMOVE_ITEM,
    payload:id
})
export const increamentItem=(obj)=>({
    type:INCREAMENT_ITEM,
    payload:obj
})
export const decreamentItem=(obj)=>({
    type:DECREAMENT_ITEM,
    payload:obj
})
export const removedCart=()=>{
    return {
        type:REMOVE_CART,
        payload:''
    }
}
export const addOrder=(order)=>({
type:ADD_ORDER,
payload:order
})
export const getOrders=()=>{
    return {
        type:GET_ORDER,
        payload:''
    }
}
export const orderStatus=(obj)=>{
return {
    type:ORDER_STATUS,
    payload:obj
}
}