import { all, select, put, takeLatest } from 'redux-saga/effects';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'redux/constants/counter';
import { updateCounter } from 'redux/actions/counter';
import { counterSelector } from 'redux/selectors/counter';

function* incrementCounterSaga() {
  const currentCount = yield select(counterSelector);
  yield put(updateCounter({ count: currentCount + 1 }));
}

function* decrementCounterSaga() {
  const currentCount = yield select(counterSelector);
  yield put(updateCounter({ count: currentCount - 1 }));
}

function* rootSaga() {
  yield all([
    takeLatest(INCREMENT_COUNTER, incrementCounterSaga),
    takeLatest(DECREMENT_COUNTER, decrementCounterSaga)
  ]);
}

export default rootSaga;
