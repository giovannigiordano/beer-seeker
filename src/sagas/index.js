import {
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_SUCCESS_EMPTY
} from '../constants';
import { call, put, takeEvery, all } from 'redux-saga/effects'

const fetchBeers = function* fetchBeers({ page = 1 }) {
  try {
    const res = yield call(fetch, `https://api.punkapi.com/v2/beers?page=${page}`);
    if (!res.ok) throw new Error(res.status);
    const beers = yield res.json();
    if (!!beers.length) {
      yield put({ type: FETCH_BEERS_SUCCESS, beers, page })
    } else {
      yield put({ type: FETCH_BEERS_SUCCESS_EMPTY })
    }

  } catch (error) {
    yield put({ type: FETCH_BEERS_FAILURE, status: error.message })
  }
};

const watchFetchBeers = function* watchFetchBeers() {
  yield takeEvery(FETCH_BEERS_REQUEST, fetchBeers)
};

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchBeers()
  ])
};

export default rootSaga;