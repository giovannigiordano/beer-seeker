import { FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from '../constants';
import { call, put, takeEvery } from 'redux-saga/effects'

const fetchBeers = function* fetchBeers() {
  try {
    const res = yield call(fetch, 'https://api.punkapi.com/v2/beers/');
    const beers = yield res.json();
    yield put({ type: FETCH_BEERS_SUCCESS, beers })
  } catch (error) {
    yield put({ type: FETCH_BEERS_FAILURE, error })
  }
};

const watchFetchBeers = function* watchFetchStores() {
  yield takeEvery(FETCH_BEERS_REQUEST, fetchBeers)
};
const rootSaga = function* rootSaga() {
  yield watchFetchBeers()
};

export default rootSaga;