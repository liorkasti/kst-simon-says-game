import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const rootReducer = combineReducers({
    reducers: reducers
})

const configureStore = () => createStore(rootReducer);

export default configureStore;