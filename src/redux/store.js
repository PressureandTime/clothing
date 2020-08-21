import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
import reducers from './';

const middlewares = [ logger ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store)

export default {store, persistor}
