import React, { Component } from 'react';
import {Provider} from "react-redux"
import PageContainer from './LandingPage/Wrappers/PageContainer.jsx'
import ModalContainer from './LandingPage/Wrappers/ModalsRootContainer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './application.scss';

import Wrapper from './dashboard/Wrapper.jsx'

export default function App ({ children }) {
  return (
    <div id="main">
      <PageContainer />
      <Wrapper />
      {children}
      <ModalContainer />
    </div>
  );
}