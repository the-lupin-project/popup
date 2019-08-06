import * as types from '../constants/actionTypes.js';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const userReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        email: action.payload[0],
        password: action.payload[1],
      }
    case types.CREATE_NEW_USER: 
      return {
        ...state,
        firstName: action.payload[0],
        lastName: action.payload[1],
        email: action.payload[2],
        password: action.payload[3],
      }
    default: 
      return state;
  }


}

export default userReducer.js; 