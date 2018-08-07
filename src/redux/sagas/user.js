import { call, put, take, fork } from 'redux-saga/effects';
import { RequestUtils } from "../../utils";
import { user } from '../actions';

function* login(act) {
  try {
    // const response = yield call(RequestUtils.fetch, '/auth/login', act, 'post');
    yield put(user.loginSuccess(act));
    console.log('登录成功');
  } catch (err) {
    console.log('登录失败', err.errorMsg)
  }
}

function* watchLogin() {
  while (true) {
    const actions = yield take(user.LOGIN);
    yield call(login, actions.payload);
  }
}

export default function* root() {
  yield fork(watchLogin);
}
