import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import SignUpModal from '../Components/SignUpModal.jsx'
import CreateEventModal from '../Components/CreateEventModal.jsx'
import { CREATE_EVENT_MODAL, SIGN_UP_MODAL }from '../../constants/modaltypes.js';
import store from '../../store.js';
/* This is how I routed the modals to the redux store. This 
container checks the redux store to see if there is a modal to render. 
Look at the modal type constants to see how this page works */

const MODAL_COMPONENTS = {
  CREATE_EVENT_MODAL: CreateEventModal,
  SIGN_UP_MODAL: SignUpModal,
};

const ModalRootContainer = (props) => {
  if (!props.modalType) {
    return null;
  }
  console.log(props.modalType);

  // by assigning a specific modal to props.modalType we can scale many modals across our app
  // The store is only looking for the modal type to render. So you offload the management of rendering modals to this page. 
  
  const SpecificModal = MODAL_COMPONENTS[props.modalType];

  return <SpecificModal hideModal={props.hideModal} />;

};

// This is where we pass in the hide modal function to dispense to our indicidual modal onclose methods. 
const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(actions.hideModal()),
})
// this is where we grab the modal type from the store. 
const mapStateToProps = store => {
  return {
    modalType: store.modals.modalType,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRootContainer);