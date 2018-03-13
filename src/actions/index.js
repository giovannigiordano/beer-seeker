import { API_URL } from '../constants'

export const FETCH_BEERS_REQUEST = 'FETCH_BEERS_REQUEST';
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FETCH_BEERS_SUCCESS_EMPTY = 'FETCH_BEERS_SUCCESS_EMPTY';
export const FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE';
export const SET_BEERS_ORDER = 'SET_BEERS_ORDER';

export const fetchBeers = ({ queryString }) =>
  async dispatch => {
    dispatch({ type: FETCH_BEERS_REQUEST });

    try {
      const res = await fetch(API_URL)
      const beers = await res.json()

      if (beers.length > 0) {
        dispatch({ type: FETCH_BEERS_SUCCESS, beers })
      } else {
        dispatch({ type: FETCH_BEERS_SUCCESS_EMPTY, beers })
      }
    } catch (error) {
      dispatch({ type: FETCH_BEERS_FAILURE, status: error.message })
    }
  }

export const setBeersOrder = (order) => ({
  type: SET_BEERS_ORDER,
  order
});