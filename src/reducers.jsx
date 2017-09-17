import { FETCH_REQUEST, FETCH_SUCCESS_PRODUCT, FETCH_SUCCESS_LIST, FETCH_ERROR } from './actions';

const initialState = {
  isFetching: false,
  list: {},
  product: {},
  error: {},
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS_LIST:
      return { ...state, list: action.payload, isFetching: false };
    case FETCH_SUCCESS_PRODUCT:
      return { ...state, product: action.payload, isFetching: false };
    case FETCH_ERROR:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};

export default getData;
