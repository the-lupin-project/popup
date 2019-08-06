import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar.jsx'


const NavBarContainer = (props) => (
  <div className='allcards'>
   <NavBar showLoginMenu={props.showLoginMenu} />
  </div>
);


export default NavBarContainer;