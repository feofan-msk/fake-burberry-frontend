import { combineReducers } from 'redux';

import { LOAD_LIST_STARTED, LOAD_LIST_SUCCEEDED, LOAD_LIST_FAILED } from './actions/loadList';
import {
  LOAD_PRODUCT_STARTED,
  LOAD_PRODUCT_SUCCEEDED,
  LOAD_PRODUCT_FAILED,
} from './actions/loadProduct';

const initialState = {
  isLoading: false,
  content: {},
  error: {},
};

function list(state = initialState, action) {
  switch (action.type) {
    case LOAD_LIST_STARTED:
      return { ...state, isLoading: true };
    case LOAD_LIST_SUCCEEDED:
      return { ...state, content: action.content, isLoading: false };
    case LOAD_LIST_FAILED:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

function show(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT_STARTED:
      return { ...state, isLoading: true };
    case LOAD_PRODUCT_SUCCEEDED:
      return { ...state, content: action.content, isLoading: false };
    case LOAD_PRODUCT_FAILED:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

const reducer = combineReducers({
  list,
  show,
});

export default reducer;
