import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import * as reducers from '../reducers/index';

let middleware;

if (process.env.NODE_ENV !== 'production') {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

const store = createStore(combineReducers({ ...reducers.default, routerReducer }), middleware);

export default store;
