import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watcherSaga';

export default function* startForman() {
  yield fork(watchUserAuthentication);
}