import { combineReducers } from 'redux';
// import all reducers here
import modalReducer from './reducers';
import userReducer from './userReducer.js';
import eventsReducer from './eventsReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  modals: modalReducer,
  users: userReducer,
  events: eventsReducer,
});

// make the combined reducers available for import
export default reducers;
