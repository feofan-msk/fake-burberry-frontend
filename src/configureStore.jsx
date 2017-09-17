import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

export default function configureStore() {
  const middleware = applyMiddleware(thunk, createLogger());
  return createStore(rootReducer, middleware);
}
