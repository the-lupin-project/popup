import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import HostedEventModal from 'HostedEventModal.jsx';

const HostedEvents = (props) => {
  // function activateModal() {
  //   // console.log('the link was clicked');
  //   return (
  //     <HostedEventModal />
  //   );
  // }

  return (
    <div>
      <Card body className="hostedEventCard">
        <div className="hostedEvents">
          <CardTitle>Event Title</CardTitle>
          <Button onClick={activateModal}>Edit Event</Button>
        </div>
      </Card>
    </div>
  );
};

export default HostedEvents;
