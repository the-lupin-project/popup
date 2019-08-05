import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './application.scss';

import Wrapper from './dashboard/Wrapper.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
      {/* <h1>Hello World!</h1> */}
      <Wrapper />
      </div>
    );
  }
}

export default App;