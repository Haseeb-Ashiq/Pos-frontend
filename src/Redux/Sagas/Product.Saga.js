import {takeEvery,all,put,fork,call} from 'redux-saga/effects';
import  { DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, GET_PRODUCT, GET_PRODUCT_SUCCESS, SAVE_PRODUCT,SAVE_PRODUCT_SUCCESS, UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS } from '../Action.Types/constant.type';
import apiInstance from '../../apiHelper/ApiCaller';
function* FetchProducts(){
    yield takeEvery(FETCH_PRODUCTS,function*(){
            const product=yield call(apiInstance.FetchAllProducts)
            console.log("from saga fetching products=",product._pro)
            yield put({type:FETCH_PRODUCTS_SUCCESS,payload:product})        
    })
}
function* GetProducts()
{
   yield takeEvery(GET_PRODUCT,function*(payload){
       console.log(payload)
       const product= yield call(apiInstance.GetAllProducts,payload.payload);
       yield put({type:GET_PRODUCT_SUCCESS,payload:product})
   })
}
function* SaveProduct(){
    yield takeEvery(SAVE_PRODUCT,function*(payload){
        console.log(payload.payload);
        const data=yield call(apiInstance.SaveProduct,payload.payload)
        console.log(data)
        yield put({type:SAVE_PRODUCT_SUCCESS,payload:data._pro})
    })
}
function* DeleteProduct()
{
    yield takeEvery(DELETE_PRODUCT,function*(payload){
        const data=yield call(apiInstance.DeleteProduct,payload.payload)
        yield put({type:DELETE_PRODUCT_SUCCESS,payload:payload.payload})
    })
}
function* UpdateProduct()
{
    yield takeEvery(UPDATE_PRODUCT,function*(payload){
        const {form,id}=payload.payload
        // console.log(payload.payload.form)
        const data=yield call(apiInstance.ProductUpdate,{form,id});
        yield put({type:UPDATE_PRODUCT_SUCCESS,payload:data._updatedProduct})
    })
}

export default function* ProductSaga(){
    yield all([
        fork(GetProducts),
        fork(SaveProduct),
        fork(FetchProducts),
        fork(DeleteProduct),
        fork(UpdateProduct)
    ])
}