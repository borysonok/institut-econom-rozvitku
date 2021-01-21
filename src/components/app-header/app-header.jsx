import React, { Component } from 'react';
import './app-header.css';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='container-fluid app-header'>
        <div className="row d-flex justify-content-between">
          <div className="p-3">LOGO</div>
          <div>
            <div className="row justify-content-end">
              <div className="p-3">Language</div>
            </div>
            <div className="row">
              <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Main</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Training</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">On-Site Training</a></li>
                    <li><a className="dropdown-item" href="#">Distant Training</a></li>
                    <li><a className="dropdown-item" href="#">Online Training</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Legal Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Schedule</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
