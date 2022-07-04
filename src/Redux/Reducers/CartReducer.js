import { ADD_CART_SUCCESS, ADD_ORDER_SUCCESS, DECREAMENT_ITEM_SUCCESS, GET_ORDER_SUCCESS, INCREAMENT_ITEM, INCREAMENT_ITEM_SUCCESS, ORDER_STATUS_SUCCESS, REMOVE_CART, REMOVE_ITEM_SUCCESS } from "../Action.Types/constant.type"

const initial={
    cart:[],
    totalPrice:0,
    isOrderSaved:false,
    orders:[],
    isQtyHigh:false,
    isOrderUpdated:false
}

const CartReducer=(state=initial,action)=>{
switch(action.type)
{
    case ADD_CART_SUCCESS:
        const productIndex=state.cart.findIndex(item=>item._id==action.payload.payload._id);
        if(productIndex >= 0)
        {
            state.cart[productIndex].qtys+=1;
        }
        else{
           
            const temp={...action.payload.payload,qtys:1}
            return {
                ...state,
                cart:[...state.cart,temp],
            }
             
        } 
        case REMOVE_ITEM_SUCCESS:
           console.log('from cart item reducer=',action.payload)
            return{
                ...state,
                cart:state.cart.filter(item=>item._id!==action.payload),
            }
            case INCREAMENT_ITEM_SUCCESS:
                const Item_Index=state.cart.findIndex(_index=>_index._id==action.payload._id);
               let newArray=[];
               for (const c in state.cart) {
                   if(state.cart[c]._id===action.payload._id)
                   {
                       newArray.push(state.cart[c]={...action.payload,qtys:action.payload.qtys+=1});
                   }
                   else{
                       newArray.push(state.cart[c]);
                   }
               }
                return{
                        ...state,
                        cart:newArray
                 }
                case DECREAMENT_ITEM_SUCCESS:
                    const dec_ItemIndex=state.cart.findIndex(item=>item._id==action.payload._id);
                    let dec_array=[];
                    for (const c in state.cart) {
                       if(state.cart[c]._id===action.payload._id)
                       {
                           dec_array.push(state.cart[c]={...action.payload,qtys:action.payload.qtys-1});
                       }
                       else{
                           dec_array.push(state.cart[c]);
                       }
                    }
                    return {
                             ...state,
                              cart:dec_array[dec_ItemIndex].qtys < 1 ? dec_array.filter(i=>i._id!==action.payload._id) : dec_array
                    }
                    case REMOVE_CART:
                        return {
                            ...state,
                            cart:[]
                        }
                        case ADD_ORDER_SUCCESS:
                            return Object.assign({},{
                                ...state,
                                isOrderSaved:true
                            })
                            case GET_ORDER_SUCCESS:
                                return {
                                    ...state,
                                    orders:[...action.payload]
                                }
                                case ORDER_STATUS_SUCCESS:
                                    let newOrderArr=[];
                                    console.log('from order status',action.payload)
                                    const order_index=state.orders.findIndex(i=>i._id===action.payload._id);
                                    for (const o in state.orders) {
                                        if(state.orders[o]._id===action.payload._id)
                                        {
                                            newOrderArr.push(state.orders[o]={...action.payload,status:action.payload.status})
                                        }
                                        else{
                                            newOrderArr.push(state.orders[o]);
                                        }
                                    }
                                    return {
                                        ...state,
                                        orders:newOrderArr,
                                        isOrderUpdated:true
                                    }

    default:
        return state;
}
}
export default CartReducer;