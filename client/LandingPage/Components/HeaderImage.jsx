import React from 'react';
import image from '/Users/jessicavaughan/Documents/Development/Codesmith/Projects/popup/client/Assets/covorphoto.jpg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const HeaderImage = (props) => (
  <div className="headerimage">
    <img id='headerimage'src={image}></img>
    <Button id='createevent' onClick={props.toggleModal} color="primary">Create an Event</Button>{' '}
    <Modal isOpen={props.isOpen} >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.toogleModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
  </div> 
)

export default HeaderImage;