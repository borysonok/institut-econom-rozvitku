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
import AppTrainingOnline from '../app-training/training-online';
import AppTrainingDistant from '../app-training/training-distant';
import AppTrainingOnSite from '../app-training/training-on-site';

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
            <Route path="/main" component={AppMain} />
            <Route path="/about" component={AppAbout} />
            <Route path="/training" exact component={AppTraining} />
            <Route path="/contacts" component={AppContacts} />
            <Route path="/reviews" component={AppReviews} />
            <Route path="/legal-service" component={AppLegalService} />
            <Route path="/schedule" component={AppSchedule} />
            <Route path="/training/online" component={AppTrainingOnline} />
            <Route path="/training/on-site" component={AppTrainingOnSite} />
            <Route path="/training/distant" component={AppTrainingDistant} />
          </div>

          <div className="p-2 bg-light border">
            <AppFooter />
          </div>

        </div>
      </Router>
    );
  }
}
