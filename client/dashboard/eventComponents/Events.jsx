import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import EventCard from './EventCard.jsx';

const Events = (props) => {
  // const hostedEventsArr = [];
  // for (let i = 0; i < Data.length; i++) {
  //   hostedEventsArr.push();
  // }

  return (
    <div className='eventsWrapper'>
      {/* <p>hello from inside of events container</p> */}
      <h3>Events You Are Attending</h3>
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default Events;
