import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom';

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
                  <Link to='/main' className="nav-link" aria-current="page">
                    Main
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/about' className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <DropdownButton title="Training">
                    <Dropdown.Item><Link to='/training/on-site'>On-Site Training</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='/training/distant'>Distant Training</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='/training/online'>Online Training</Link></Dropdown.Item>
                  </DropdownButton>
                </li>

                <li className="nav-item">
                  <Link to='/legal-service' className="nav-link">
                    Legal Service
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/schedule' className="nav-link">
                    Schedule
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/reviews' className="nav-link">
                    Reviews
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/contacts' className="nav-link">
                    Contacts
                  </Link>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
