import React from 'react';
import { Button } from 'reactstrap';

const NavBar = (props) => (
  <div className="navbar">
    <Button id='Home' color="primary">Home</Button>{' '}
    <span>
    <input type='text' id='username' className='login'></input>
    <input type='text' id='password'className='login'></input>
    <Button id='login' color="primary">Log In</Button>{' '}
    <Button id='signup' color="primary">Sign Up</Button>{' '}
    </span>
  </div>
)

export default NavBar;
