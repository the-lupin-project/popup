/* eslint-disable no-lone-blocks */
import * as types from '../constants/actionTypes';

const initalModalState = {
  modalType: null, // renders the modal type, but initally set to null
};

const modalReducer = (state = initalModalState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case types.SHOW_MODAL: {
      newState.modalType = action.modalType;
      return newState;
    }
  
    case types.HIDE_MODAL: {
      return initalModalState;
    }
    default:
      return state;
  }
};

export default modalReducer;
