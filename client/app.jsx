import React, { Component } from 'react';
import {Provider} from "react-redux"
import PageContainer from './LandingPage/Wrappers/PageContainer.jsx'
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
        <PageContainer />
        <Wrapper />
      </div>
    );
  }
}

export default App;