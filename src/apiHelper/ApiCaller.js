import axios from 'axios';

const apiInstance=()=>{
  const apiBaseLink='https://food-deliver-apis.herokuapp.com/api/';
    const SaveProduct= async (product) => {
     return await axios.post(`${apiBaseLink}product/register`,product)
     .then(res=>res.data)
    }
   const GetAllCatagory=async ()=>{
        return await axios.get(`${apiBaseLink}/catagory/getcatagories`)
        .then(res=>res.data);
}
const GetAllProducts=async (id) => {
    
    return await axios.get(`${apiBaseLink}product/getproductbyid/${id}`)
    .then(res=>res.data)
}
const FetchAllProducts= async ()=>{
    return await axios.get(`${apiBaseLink}product/getproducts`)
    .then(res=>res.data)
}
const DeleteProduct=async (id) => {
    return await axios.get(`${apiBaseLink}product/delete/${id}`)
    .then(res=>res.data);
}
const ProductUpdate= async ({form,id}) => {
    console.log({form,id})
    return await axios.patch(`${apiBaseLink}product/productupdate/${id}`,form)
    .then(res=>res.data);
}
const AddOrder=async (data)=>{
    return await axios.post(`${apiBaseLink}cart/addtocart`,data)
    .then(res=>res.data)
}
const GetOrders=async ()=>{
  return await axios.get(`${apiBaseLink}cart/getorders`)
  .then(res=>res.data);
}
const GetOrder=async (order_no)=>{
    return await axios.get(`${apiBaseLink}cart/getorder/${order_no}`)
    .then(res=>res.data);
}
const OrderStatusUpdate=async ({id,status}) => {
return await axios.patch(`${apiBaseLink}cart/orderstatusupdate/${id}`,{status})
.then(res=>res.data)
}
// user clinet

const ClientSignup=async (data)=>{
    return await axios.post(`${apiBaseLink}client/register`,data)
    .then(res=>res.data)
}
const ClientLogin=async (user)=>{
    return await axios.post(`${apiBaseLink}client/login`,user)
    .then(res=>res.data);
}
const FetchAllClient=async (token) =>{
      return await axios.get(`${apiBaseLink}client/getclients`,
      {headers:
        {
            "Content-type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    })
}
const ClientStatusUpdate=async ({data,id}) => {
    console.log({data,id})
    return await axios.patch(`${apiBaseLink}client/activestatusupdate/${id}`,{active:data})
    .then(res=>res.data);
}
const ClientProfileUpdate=async ({data,id})=>{
    return await axios.patch(`${apiBaseLink}client/clientprofileupdate/${id}`,data)
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