import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const HostedEvents = (props) => {
  return (
    <div>
      <Card body className="hostedEventCard">
        <div className="hostedEvents">
          <CardTitle>Event Title</CardTitle>
          <Button>Edit Event</Button>
        </div>
      </Card>
    </div>
  );
};

export default HostedEvents;
