import React, { Component } from 'react';
import AppHeader from '../app-header';
import AppMain from '../app-main';
import AppFooter from '../app-footer';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="d-grid gap-3">
        <div className="p-2 bg-light border">
          <AppHeader />
        </div>
        <div className="p-2 bg-light border">
          <AppMain />
        </div>
        <div className="p-2 bg-light border">
          <AppFooter />
        </div>
      </div>
    );
  }
}
