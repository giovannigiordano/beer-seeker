import * as ActionTypes from '../constants';

export const fetchBeers = (page = 1, abv = 0, ibu = 0) => ({
  type: ActionTypes.FETCH_BEERS_REQUEST,
  page,
  abv,
  ibu
});

export const setBeersOrder = (order) => ({
  type: ActionTypes.SET_BEERS_ORDER,
  order
});