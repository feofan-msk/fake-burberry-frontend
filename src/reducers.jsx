import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actions';

const initialState = {
  isFetching: false,
  data: {},
  error: {},
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };
    case FETCH_ERROR:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};

export default page;
