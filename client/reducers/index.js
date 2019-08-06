import { combineReducers } from 'redux';
// import all reducers here
import modalReducer from './modalreducers';
import userReducer from './userReducer.js';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  modals: modalReducer,
  users: userReducer,
});

// make the combined reducers available for import
export default reducers;
