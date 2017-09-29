import { handleActions } from 'redux-actions';

import { SELECT_LOCATION } from '../actions/selectLocation';
import { SELECT_LANGUAGE } from '../actions/selectLanguage';

const uiParams = handleActions(
  {
    [SELECT_LOCATION]: (state, action) => ({ ...state, location: action.location }),

    [SELECT_LANGUAGE]: (state, action) => ({ ...state, language: action.language }),
  },
  {
    location: 'Russian Federation (₽)',
    language: 'Russian',
  },
);

export default uiParams;
