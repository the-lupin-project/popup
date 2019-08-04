/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes.js'


export const updateModalState = (value) => ({
  type: types.UPDATE_MODAL_STATE,
  payload: value,
});
