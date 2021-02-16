import React, { Component } from 'react';
import AppCard from '../app-card';
import CardDeck from 'react-bootstrap/CardDeck';

import './app-main.css';

export default class AppMain extends Component {
  render() {
    return (
      <div className="app-main">
        <CardDeck>
          <AppCard
            title="Очне навчання / підвищення кваліфікації"
            link="training/on-site"
          />
          <AppCard
            title="Дистанційне навчання / підвищення кваліфікації"
            link="training/distant"
          />
          <AppCard
            title="Онлайн навчання / підвищення кваліфікації"
            link="training/online"
          />
          <AppCard title="Юридичний супровід замовників" link="legal-service" />
        </CardDeck>
      </div>
    );
  }
}
