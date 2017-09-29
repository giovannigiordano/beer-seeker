import { combineReducers } from 'redux'
import {FETCH_BEERS_REQUEST, FETCH_BEERS_FAILURE, FETCH_BEERS_SUCCESS} from "../constants/";

const beers = (state = [], action) => {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return [
        ...action.beers
      ];
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  beers
});

export default rootReducer;