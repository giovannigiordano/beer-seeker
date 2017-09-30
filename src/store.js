import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
);

sagaMiddleware.run(rootSaga);

store.dispatch({ type: 'FETCH_BEERS_REQUEST' });

setTimeout(() => store.dispatch({ type: 'FETCH_BEERS_REQUEST', page: 2 }),7000);
export default store;