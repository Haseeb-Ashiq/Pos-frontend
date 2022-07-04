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
const DeleteProduct=async (id) => {
    return await axios.get(`http://localhost:5000/api/product/delete/${id}`)
    .then(res=>res.data);
}
const ProductUpdate= async ({form,id}) => {
    console.log({form,id})
    return await axios.patch(`http://localhost:5000/api/product/productupdate/${id}`,form)
    .then(res=>res.data);
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
const OrderStatusUpdate=async ({id,status}) => {
return await axios.patch(`http://localhost:5000/api/cart/orderstatusupdate/${id}`,{status})
.then(res=>res.data)
}
// user clinet

const ClientSignup=async (data)=>{
    return await axios.post('http://localhost:5000/api/client/register',data)
    .then(res=>res.data)
}
const ClientLogin=async (user)=>{
    return await axios.post('http://localhost:5000/api/client/login',user)
    .then(res=>res.data);
}
const FetchAllClient=async (token) =>{
      return await axios.get('http://localhost:5000/api/client/getclients',
      {headers:
        {
            "Content-type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    })
}
const ClientStatusUpdate=async ({data,id}) => {
    console.log({data,id})
    return await axios.patch(`http://localhost:5000/api/client/activestatusupdate/${id}`,{active:data})
    .then(res=>res.data);
}
const ClientProfileUpdate=async ({data,id})=>{
    return await axios.patch(`http://localhost:5000/api/client/clientprofileupdate/${id}`,data)
    .then(res=>res.data);
}
return {
    GetAllCatagory,
    GetAllProducts,
    FetchAllProducts,
    SaveProduct,
    DeleteProduct,
    ProductUpdate,
    AddOrder,
    GetOrders,
    GetOrder,
    OrderStatusUpdate,
    ClientSignup,
    ClientLogin,
    FetchAllClient,
    ClientStatusUpdate,
    ClientProfileUpdate
    
}
}
export default apiInstance();