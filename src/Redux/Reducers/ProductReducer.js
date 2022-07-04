import Constant, { DELETE_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS,
     GET_PRODUCT_SUCCESS, SAVE_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS } from "../Action.Types/constant.type";

const initial={
    product:[],
    products:[],
    isLoading:true,
    isSaved:false,
    isUpdated:false,
}
const ProductReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case SAVE_PRODUCT_SUCCESS:
            console.log("from reducers save",action.payload)
            return {
                ...state,
                products:[...state.products,action.payload],
                isSaved:true
            }
            case FETCH_PRODUCTS_SUCCESS:
                console.log('from reducer fetching productd=',action.payload)
                return {
                    ...state,
                    products:[...action.payload._pro].reverse(),
                }
       case GET_PRODUCT_SUCCESS:
           console.log(action.payload._pro)
           return Object.assign({
               ...state,
               product:[...action.payload._pro],
               isLoading:false,
           })
           case DELETE_PRODUCT_SUCCESS:
               return {
                   ...state,
                   products:state.products.filter(p=>p._id!=action.payload)
               }
               case UPDATE_PRODUCT_SUCCESS:
                   let renew=[];
                   for (let p in state.products) {
                        if(state.products[p]._id===action.payload._id)
                        {
                            renew.push(state.products[action.payload._id]=action.payload);
                        }
                        else{
                            renew.push(state.products[p])
                        }
                   }
                    console.log("from update reducer ",renew)
                   return {
                       ...state,
                       isUpdated:true,
                       products:renew
                   }
           default:
               return state;
    }
}
export default ProductReducer;