import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import EventCard from './EventCard.jsx';

const Events = (props) => {
  console.log(JSON.stringify(props.events));
  const eventsArr = [];
  for (let i = 0; i < props.events.length; i++) {
    hostedEventsArr.push(<EventCard key={i} 
      {...props.events[i]}
    />);
  }

  return (
    <div className='eventsWrapper'>
      {/* <p>hello from inside of events container</p> */}
      <h3>Events In Your Area</h3>
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default Events;
