import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { LOAD_LIST_STARTED, LOAD_LIST_SUCCEEDED, LOAD_LIST_FAILED } from './actions/loadList';
import {
  LOAD_PRODUCT_STARTED,
  LOAD_PRODUCT_SUCCEEDED,
  LOAD_PRODUCT_FAILED,
} from './actions/loadProduct';
import { SELECT_COLOUR } from './actions/selectColour';

const initialState = {
  isLoading: false,
  content: {},
  error: {},
};

const list = handleActions(
  {
    [LOAD_LIST_STARTED]: state => ({ ...state, isLoading: true }),

    [LOAD_LIST_SUCCEEDED]: (state, action) => ({
      ...state,
      content: action.content,
      isLoading: false,
    }),

    [LOAD_LIST_FAILED]: (state, action) => ({ ...state, error: action.error, isLoading: false }),
  },
  initialState,
);

const show = handleActions(
  {
    [LOAD_PRODUCT_STARTED]: state => ({ ...state, isLoading: true, colour: 0 }),

    [LOAD_PRODUCT_SUCCEEDED]: (state, action) => ({
      ...state,
      content: action.content,
      isLoading: false,
    }),

    [LOAD_PRODUCT_FAILED]: (state, action) => ({ ...state, error: action.error, isLoading: false }),

    [SELECT_COLOUR]: (state, action) => ({ ...state, colour: action.colourIndex }),
  },
  {
    isLoading: false,
    content: {},
    error: {},
    colour: 0,
  },
);

const reducer = combineReducers({
  list,
  show,
});

export default reducer;
