import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ControlPanel from './controlComponents/Controls.jsx';
import Events from './eventComponents/Events.jsx';


class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="dashboardWrapper">
        {/* <p>hello from inside the wrapper</p> */}
        <ControlPanel />
        <Events />
      </div>
    )
  }
}

export default Wrapper;
