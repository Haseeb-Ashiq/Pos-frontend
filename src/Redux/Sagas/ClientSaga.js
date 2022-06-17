import {takeEvery,put,call,fork,all} from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, SIGNUP, SIGNUP_SUCCESS } from '../Action.Types/constant.type';
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

export default function* CleintSaga()
{
    yield all(
        [
            fork(SignUp),
            fork(Login)
        ]
    )
}