import { takeLatest,takeEvery } from 'redux-saga/effects';
import {  loginSaga,registerSaga } from '../sagas/loginWorkerSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  //yield takeLatest(types.REGISTER_USER, registerSaga);
  console.log("n jn")
 
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);

}