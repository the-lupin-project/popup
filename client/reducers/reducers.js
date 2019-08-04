import * as types from '../constants/actionTypes';

const initialState = {
  modal: false, // determines wheter our modal displays
};

const modalReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.UPDATE_MODAL_STATE: {
      return {
        ...state,
        modal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
