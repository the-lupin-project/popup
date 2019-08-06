import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ControlPanel from './controlComponents/Controls.jsx';
import Events from './eventComponents/Events.jsx';
import  {getEvents} from '../actions/actions';

const mapStateToProps = store => ({
  events: store.events.events,
});

const getEventsAndDispatch = () => dispatch => fetch('/api')
  .then(events => dispatch(getEvents(events)));

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEventsAndDispatch),
});
class Wrapper extends Component {

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return(
      <div className="dashboardWrapper">
        {/* <p>hello from inside the wrapper</p> */}
        <ControlPanel />
        <Events events={this.props.events} />
      </div>
    )
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(Wrapper);
