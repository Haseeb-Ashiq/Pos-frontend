import {takeEvery,put,call,fork,all} from 'redux-saga/effects';
import { CLIENT_PROFILE_UPDATE, CLIENT_PROFILE_UPDATE_SUCCESS, GET_CLIENT, GET_CLIENT_SUCCESS, LOGIN, LOGIN_SUCCESS, SIGNUP, SIGNUP_SUCCESS, STATUS_UPDATE, STATUS_UPDATE_SUCCESS } from '../Action.Types/constant.type';
import apiIntance from '../../apiHelper/ApiCaller';
function* SignUp()
{
  yield takeEvery(SIGNUP,function*(payload){
      console.log(payload)
      const client=yield call(apiIntance.ClientSignup,payload.payload)
      console.log(client)
      yield put({type:SIGNUP_SUCCESS,payload:client})
  })
}
function* Login()
{
    yield takeEvery(LOGIN,function*(payload){
       const client=yield call(apiIntance.ClientLogin,payload.payload)
       yield put({type:LOGIN_SUCCESS,payload:client._client});
    })
}
function* FetchClient(){
    yield takeEvery(GET_CLIENT,function*(){
        const clients=yield call(apiIntance.FetchAllClient);
        yield put({type:GET_CLIENT_SUCCESS,payload:clients.data._client})
    })
}
function* ActiveStatusUpdate()
{
    yield takeEvery(STATUS_UPDATE,function*(payload){
        const {data,id}=payload.payload;
        const _updatedClient=yield call(apiIntance.ClientStatusUpdate,{data,id})
        yield put({type:STATUS_UPDATE_SUCCESS,payload:_updatedClient._updatedClient})
        console.log(_updatedClient._updatedClient)
    })
}
function* ClientProfileUpdate(){
    yield takeEvery(CLIENT_PROFILE_UPDATE,function*(payload){
        const {data,id}=payload.payload;
        console.log({data,id})
        const _updatedData=yield call(apiIntance.ClientProfileUpdate,{data,id})
        yield put({type:CLIENT_PROFILE_UPDATE_SUCCESS,payload:_updatedData._updatedClient})

    })
}
export default function* CleintSaga()
{
    yield all(
        [
            fork(SignUp),
            fork(Login),
            fork(FetchClient),
            fork(ActiveStatusUpdate),
            fork(ClientProfileUpdate)
        ]
    )
}