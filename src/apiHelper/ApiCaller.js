import axios from 'axios';

const apiInstance=()=>{
    const SaveProduct= async (product) => {
     return await axios.post('http://localhost:5000/api/product/register',product)
     .then(res=>res.data)
    }
   const GetAllCatagory=async ()=>{
        return await axios.get('http://localhost:5000/api/catagory/getcatagories')
        .then(res=>res.data);
}
const GetAllProducts=async (id) => {
    
    return await axios.get(`http://localhost:5000/api/product/getproductbyid/${id}`)
    .then(res=>res.data)
}
const FetchAllProducts= async ()=>{
    return await axios.get('http://localhost:5000/api/product/getproducts')
    .then(res=>res.data)
}
const AddOrder=async (data)=>{
    return await axios.post('http://localhost:5000/api/cart/addtocart',data)
    .then(res=>res.data)
}
const GetOrders=async ()=>{
  return await axios.get('http://localhost:5000/api/cart/getorders')
  .then(res=>res.data);
}
const GetOrder=async (order_no)=>{
    return await axios.get(`http://localhost:5000/api/cart/getorder/${order_no}`)
    .then(res=>res.data);
}
return {
    GetAllCatagory,
    GetAllProducts,
    FetchAllProducts,
    SaveProduct,
    AddOrder,
    GetOrders,
    GetOrder
    
}
}
export default apiInstance();