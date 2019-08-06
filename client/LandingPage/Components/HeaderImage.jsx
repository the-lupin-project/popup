import React from 'react';

import image from '/Users/jessicavaughan/Documents/Development/Codesmith/Projects/popup/client/Assets/covorphoto.jpg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const HeaderImage = (props) => (
  <div className="headerimage">
    <img id='headerimage'src={image}></img>
    <Button id='createevent' onClick={props.showCreateEventBox} color="primary">Create an Event</Button>{' '}
  </div> 
)

export default HeaderImage;