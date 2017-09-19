import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import products from './Products/reducer';

const rootReducer = combineReducers({
  products,
});

export default function configureStore() {
  const middleware = applyMiddleware(thunk, createLogger());
  return createStore(rootReducer, middleware);
}
