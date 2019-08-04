import React from 'react';
import { connect } from 'react-redux';
import * as actions from '/Users/jacobbanks/Code/Team Lupin/popup/client/actions/actions.js';
import NavBar from '../Components/navbar.jsx'
import HeaderImage from '../Components/HeaderImage.jsx'
import CardContainter from './CardCaontainer.jsx'

const mapStateToProps = store => ({
  // add pertinent state here
  modal: store.modals.modal,
});

const mapDispatchToProps = dispatch => ({
  updateModalState: (event) => {
dispatch(actions.updateModalState(value))
  }
})

const PageContainer = (props) => (
  <div>
    <NavBar />
    <HeaderImage modalState={props.modal} updateModalState={props.updateModalState} />
    <CardContainter />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
