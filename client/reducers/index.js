import { combineReducers } from 'redux';
// import all reducers here
import modalReducer from './modalreducers';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  modals: modalReducer,
});

// make the combined reducers available for import
export default reducers;
