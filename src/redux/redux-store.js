import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import contentReducer from './contentReducer';

let reducers = combineReducers({contentReducer, dialogsReducer});

let store = createStore(reducers);

export default store;