import {takeEvery,all,put,fork, call} from 'redux-saga/effects';
import { ADD_CART, ADD_CART_SUCCESS, REMOVE_ITEM, 
    REMOVE_ITEM_SUCCESS, INCREAMENT_ITEM, INCREAMENT_ITEM_SUCCESS,
     DECREAMENT_ITEM, DECREAMENT_ITEM_SUCCESS, REMOVE_CART, 
     REMOVE_CART_SUCCESS, ADD_ORDER,ADD_ORDER_SUCCESS, GET_ORDER, GET_ORDER_SUCCESS, ORDER_STATUS, ORDER_STATUS_SUCCESS } from '../Action.Types/constant.type';
import apiInstance from '../../apiHelper/ApiCaller';
function* AddToCart()
{
    yield takeEvery(ADD_CART,function*(payload){
        yield put({type:ADD_CART_SUCCESS,payload:payload})
    })
}
function* RemoveCartItem()
{
    yield takeEvery(REMOVE_ITEM,function*(payload){
        yield put({type:REMOVE_ITEM_SUCCESS,payload:payload.payload})
    })
}
function* IncreamentItem()
{
    yield takeEvery(INCREAMENT_ITEM,function*(payload){
        yield put({type:INCREAMENT_ITEM_SUCCESS,payload:payload.payload})
    })
}
function* DecreamentItem()
{
    yield takeEvery(DECREAMENT_ITEM,function*(payload){
        yield put({type:DECREAMENT_ITEM_SUCCESS,payload:payload.payload});
    })
}
function* RemoveCart()
{
    yield takeEvery(REMOVE_CART,function*(){
        yield put({type:REMOVE_CART_SUCCESS,payload:''});
    })
}
function* AddOrder()
{
    yield takeEvery(ADD_ORDER,function*(payload){
        console.log('from saga cart=',payload.payload)
        yield call(apiInstance.AddOrder,payload.payload);
        yield put({type:ADD_ORDER_SUCCESS,payload:payload.payload})
    })
}
function* GetOrders(){
    yield takeEvery(GET_ORDER,function*(){
        const orders = yield call(apiInstance.GetOrders)
        console.log(orders._order)
        yield put({type:GET_ORDER_SUCCESS,payload:orders._order})
    })
}
function* OrderStatus(){
    yield takeEvery(ORDER_STATUS,function*(payload){
        const {id,status}=payload.payload;
        console.log({id,status})
        const data=yield call(apiInstance.OrderStatusUpdate,{id,status})
        // console.log('fetch updated order',data);
        yield put({type:ORDER_STATUS_SUCCESS,payload:data._updatedOrder})
    })
}
export default function* CartSaga(){
    yield all([
        fork(AddToCart),
        fork(RemoveCartItem),
        fork(IncreamentItem),
        fork(DecreamentItem),
        fork(RemoveCart),
        fork(AddOrder),
        fork(GetOrders),
        fork(OrderStatus)
    ])
}