import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

import './app-card.css';

const AppCard = ({ history, title, link }) => {
  const linkOne = link;
  const textOne = 'Інформація / (програма навчання)';
  const linkTwo = 'order-form';
  const textTwo = 'Заявка';

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title as="h6">{title}</Card.Title>
        <Button variant="primary" size="sm" block
          onClick={() => history.push(linkOne)}>
          {textOne}
        </Button>
        <Button variant="primary" size="sm" block
          onClick={() => history.push(linkTwo)}>
          {textTwo}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default withRouter(AppCard);
