import {
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_SUCCESS_EMPTY,
  SERVICE_URL
} from '../constants';
import { call, put, takeEvery, all } from 'redux-saga/effects'

const fetchBeers = function* fetchBeers({ page = 1, abv=0 }) {
  try {
    const res = yield call(
      fetch,
      `${SERVICE_URL}?page=${page}&abv_gt=${abv}`
    );
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