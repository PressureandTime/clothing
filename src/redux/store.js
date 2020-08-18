import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './';

const middlewares = [ logger ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));


export default store
