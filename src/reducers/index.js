import { combineReducers } from 'redux'
import {FETCH_BEERS_REQUEST, FETCH_BEERS_FAILURE, FETCH_BEERS_SUCCESS} from "../constants/";

const beers =
  (state = {
    hasError: false,
    ioFetching: false,
    items: []
  }, action) => {
  switch (action.type) {
    case FETCH_BEERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.page,
        items: [
          ...action.beers
        ]
      };
    case FETCH_BEERS_FAILURE:
      return {
        ...state,
        hasError: true,
        status: action.status,
        isFetching: false
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  beers
});

export default rootReducer;