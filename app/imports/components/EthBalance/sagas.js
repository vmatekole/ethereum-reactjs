import { take, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from './EthBalance.actions';
import { getEthbase } from './EthBalance.selectors';
import Store from '../../store';

function* fetchBalance(ethbase) {
  try {
    yield delay(1000);
    yield put(actions.setEthBalance(ethbase));
  } catch (e) {
    console.log(e);
    // yield put(actions.ethNetworkReqFailed(e.message));
  }
}

function* watchPollData() {
  while (true) {
    yield take(actions.SET_ETHBASE);
    yield fetchBalance(getEthbase(Store.getState()));
  }
}

// Daemonize tasks in parallel
export default function* root() {
  yield [
    fork(watchPollData),
  // other watchers here
  ];
}