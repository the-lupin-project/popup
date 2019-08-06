import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { ButtonGroup } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const EventCard = (props) => {
  console.log(props);
  return (
    <div>
      <Card body className="eventCard">
        <CardTitle>title</CardTitle>
        <div className="eventData">
          <CardSubtitle>host</CardSubtitle>
          <CardSubtitle>location</CardSubtitle>
          <CardSubtitle>date</CardSubtitle>
          <CardSubtitle>cuisine_type</CardSubtitle>
          <CardSubtitle>start time</CardSubtitle>
          <CardSubtitle>end time</CardSubtitle>
          <CardSubtitle>price</CardSubtitle>
        </div>
        <CardText>Nullam sed nisi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam maximus aliquet leo, non consequat nunc rhoncus at. Suspendisse vestibulum condimentum facilisis. Fusce a libero non urna accumsan congue. Ut nunc libero, placerat et libero non, tristique posuere nisi. Curabitur lacinia vehicula felis, in finibus ante vestibulum ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut aliquam ullamcorper fermentum.</CardText>
        <ButtonGroup>
          <Button>Cancel</Button>
          <Button>Contact Host</Button>
          <Button>Pay Now</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default EventCard;
