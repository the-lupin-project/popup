import React, { Component } from 'react';
import {Provider} from "react-redux"
import PageContainer from './LandingPage/Wrappers/PageContainer.jsx'
import ModalContainer from './LandingPage/Wrappers/ModalsRootContainer.jsx'
import { Route, Link } from 'react-router-dom';
import './application.scss';

import Wrapper from './dashboard/Wrapper.jsx'

class App extends Component {
  render() {
  return (
    <div id="main">
      <PageContainer />
      <Wrapper />
      <ModalContainer />
    </div>
  );
}
}

export default App;