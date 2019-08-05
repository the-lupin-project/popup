import * as types from '../constants/actionTypes';

const initialState = {
  modals: [], // false determines wheter our modal displays
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL: {
      return {
        ...state,
        modals: state.modals.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
