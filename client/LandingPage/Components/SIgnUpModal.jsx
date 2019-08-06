import React from 'react';
import Modal from './Modal.jsx';
// see the modal container for information regarding how these props render thorugh the onclose method. 
class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
         <div className="login">
           <h1>Login</h1>
           <form>
             Email:
             <input type="text" name="Email"></input>
              Password:
             <input type="text" name="Password"></input>
           </form>
         </div>
      </Modal>
    );
  }
};

export default SignUpModal;