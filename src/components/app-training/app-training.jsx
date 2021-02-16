import React, { Component } from 'react';

import AppTrainingOnline from '../app-training/training-online';
import AppTrainingDistant from '../app-training/training-distant';
import AppTrainingOnSite from '../app-training/training-on-site';

import './app-training.css';

export default class AppTraining extends Component {
  render() {
    let cmp = '';
    const id = this.props.trainingId;
    switch (id) {
      case 'on-site':
        cmp = <AppTrainingOnSite />;
        break;
      case 'distant':
        cmp = <AppTrainingDistant />;
        break;
      case 'online':
        cmp = <AppTrainingOnline />;
        break;
      default:
        cmp = <div>Please select your training type!</div>;
    }

    return <div className="app-training">{cmp}</div>;
  }
}
