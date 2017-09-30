import { handleActions } from 'redux-actions';

import { SELECT_LOCATION } from '../actions/selectLocation';
import { SELECT_LANGUAGE } from '../actions/selectLanguage';
import { locations } from '../data';

const uiParams = handleActions(
  {
    [SELECT_LOCATION]: (state, action) => ({ ...state, location: action.location }),

    [SELECT_LANGUAGE]: (state, action) => ({ ...state, language: action.language }),
  },
  {
    location: locations[0],
    language: 'Russian',
  },
);

export default uiParams;
