import * as ActionTypes from '../constants';

export const fetchBeers = (page = 1, abv = 0) => ({
  type: ActionTypes.FETCH_BEERS_REQUEST,
  page,
  abv
});