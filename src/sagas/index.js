import { all, call, put, takeEvery } from 'redux-saga/effects'
import {
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_SUCCESS_EMPTY,
  SERVICE_URL
} from '../constants';

const fetchBeers = function* fetchBeers(action) {
    const { page = 1, abv = 0, ibu = 0 } = action;
    try {
      const res = yield call(
        fetch,
        `${SERVICE_URL}?page=${page}&abv_gt=${abv}&ibu_gt=${ibu}`
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
  }
;

const watchFetchBeers = function* watchFetchBeers() {
  yield takeEvery(FETCH_BEERS_REQUEST, fetchBeers)
};

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchBeers()
  ])
};

export default rootSaga;