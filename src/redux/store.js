import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';

const rootReducer = combineReducers({ reducers: reducers })
const middlewares = [thunk, promise];
const composedEnhancer = compose(applyMiddleware(...middlewares));
const configureStore = () => createStore(rootReducer, composedEnhancer);

export default configureStore;
