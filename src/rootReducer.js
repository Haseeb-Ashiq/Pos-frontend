import { CatagoryReducer } from "./Redux/Reducers/CatagoryReducer"
import ProductReducer from "./Redux/Reducers/ProductReducer"
import CartReducer from './Redux/Reducers/CartReducer';
import ClientReducer from "./Redux/Reducers/ClientReducer";
export default {
    Catagory:CatagoryReducer,
    Product:ProductReducer,
    Cart:CartReducer,
    Client:ClientReducer
}