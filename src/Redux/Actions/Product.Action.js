import { DELETE_PRODUCT, FETCH_PRODUCTS, GET_PRODUCT, SAVE_PRODUCT, UPDATE_PRODUCT } from "../Action.Types/constant.type";

export const fetchProducts=()=>{
    return{
        type:FETCH_PRODUCTS,
        payload:''
    }
}
export const getProducts=(id)=>({
    type:GET_PRODUCT,
    payload:id
});
export const saveProduct=(product)=>{
    return {
        type:SAVE_PRODUCT,
        payload:product
    }
}
export const deleteProduct=(id)=>{
    return {
        type:DELETE_PRODUCT,
        payload:id
    }
}
export const updateProduct=(obj)=>{
    return {
        type:UPDATE_PRODUCT,
        payload:obj
    }
}