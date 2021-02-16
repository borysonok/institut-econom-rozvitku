import React, { Component } from 'react';
import AppHeader from '../app-header';
import AppAbout from '../app-about';
import AppMain from '../app-main';
import AppTraining from '../app-training';
import AppFooter from '../app-footer';
import AppContacts from '../app-contacts';
import AppReviews from '../app-reviews';
import AppLegalService from '../app-legal-service';
import AppSchedule from '../app-schedule';
import AppOrderForm from '../app-order-form/app-order-form';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app d-grid gap-3">
          <div className="p-2 bg-light border">
            <AppHeader />
          </div>
          <div>
            <Route path="/" exact component={AppMain} />
            <Route path="/main" component={AppMain} />
            <Route path="/about" component={AppAbout} />
            <Route path="/training" exact component={AppTraining} />
            <Route
              path="/training/:id"
              render={({ match }) => {
                const { id } = match.params;
                return (<AppTraining trainingId={id} />);
              }}
            />
            <Route path="/contacts" component={AppContacts} />
            <Route path="/reviews" component={AppReviews} />
            <Route path="/legal-service" component={AppLegalService} />
            <Route path="/schedule" component={AppSchedule} />
            <Route
              path="/order-form"
              render={({ match }) => {

                return (<AppOrderForm orderTitle="==== TEST TITLE ====" />);

              }} />
          </div>
          <div className="p-2 bg-light border">
            <AppFooter />
          </div>
        </div>
      </Router>
    );
  }
}
