/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes.js'


export const showModal = (modalType) => ({
  type: types.SHOW_MODAL,
  modalType,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});
