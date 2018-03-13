import { FETCH_BEERS_SUCCESS_EMPTY, FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCESS } from '../../actions';

export default (state = {
    hasError: false,
    ioFetching: false,
    isLastPage: false,
    items: [],
    page: 1,
    abv: 0,
    ibu: 0,
    order: null,
  }, { beers, status, type }) => {
    switch (type) {
      case FETCH_BEERS_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case FETCH_BEERS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isLastPage: false,
          items: [
            ...beers
          ]
        }
      case FETCH_BEERS_SUCCESS_EMPTY:
        return {
          ...state,
          isFetching: false,
          isLastPage: true
        }
      case FETCH_BEERS_FAILURE:
        return {
          ...state,
          hasError: true,
          status,
          isFetching: false
        }
      default:
        return state
    }
  }