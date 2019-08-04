import React, { Component } from 'react';
import {Provider} from "react-redux"
import PageContainer from './LandingPage/Wrappers/PageContainer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <PageContainer />
      </div>
    );
  }
}

export default App;