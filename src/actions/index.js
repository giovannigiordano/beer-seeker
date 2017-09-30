import * as ActionTypes from '../constants';

export const fetchBeers = (page) => ({
  type: ActionTypes.FETCH_BEERS_REQUEST,
  page
});