import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import SignUpModal from '../Components/SignUpModal.jsx'
import CreateEventModal from '../Components/CreateEventModal.jsx'
import { CREATE_EVENT_MODAL, SIGN_UP_MODAL }from '../../constants/modaltypes.js';
import store from '../../store.js';

const MODAL_COMPONENTS = {
  CREATE_EVENT_MODAL: CreateEventModal,
  SIGN_UP_MODAL: SignUpModal,
};

const ModalRootContainer = (props) => {
  if (!props.modalType) {
    return null;
  }
  console.log(props.modalType);

  const SpecificModal = MODAL_COMPONENTS[props.modalType];

  return <SpecificModal hideModal={props.hideModal} />;

};

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(actions.hideModal()),
})

const mapStateToProps = store => {
  return {
    modalType: store.modals.modalType,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRootContainer);