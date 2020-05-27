import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watcherSaga';

export default function* startForman() {
  console.log("ghgguu");


    yield fork(watchUserAuthentication);
  
  
}