import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import contentReducer from './contentReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({contentReducer, dialogsReducer, usersReducer});

let store = createStore(reducers);

export default store;