import { combineReducers } from 'redux'
import { FETCH_BEERS_SUCCESS_EMPTY, SET_BEERS_ORDER } from '../constants';
import { FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCESS } from '../constants/';

const beers =
  (state = {
    hasError: false,
    ioFetching: false,
    isLastPage: false,
    items: [],
    page: 1,
    abv: 0,
    ibu: 0,
    order: null
  }, action) => {
    switch (action.type) {
      case FETCH_BEERS_REQUEST:
        return {
          ...state,
          isFetching: true,
          abv: action.abv,
          ibu: action.ibu
        };
      case FETCH_BEERS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          page: action.page,
          isLastPage: false,
          items: [
            ...action.beers
          ]
        };
      case FETCH_BEERS_SUCCESS_EMPTY:
        return {
          ...state,
          isFetching: false,
          isLastPage: true
        };
      case FETCH_BEERS_FAILURE:
        return {
          ...state,
          hasError: true,
          status: action.status,
          isFetching: false
        };
      case SET_BEERS_ORDER:
        return {
          ...state,
          order: action.order
        };
      default:
        return state;
    }
  };
const rootReducer = combineReducers({
  beers
});

export default rootReducer;