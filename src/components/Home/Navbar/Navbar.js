import React, { Component } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import './Navbar.css';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-item">
          <li>
            <Link to="#speakers" smooth={true} spy={true} duration={1000}
              className="av-link">
              SPEAKERS
                </Link>
          </li>
          <li>
            <Link to="#competitions" smooth={true} spy={true} duration={1000}
              className="av-link">
              COMPETITIONS
                </Link>
          </li>
          <li>
            <Link to="#workshops" smooth={true} spy={true} duration={1000}
              className="av-link">
              WORKSHOPS
                </Link>
          </li>
          <li>
            <Link to="#faq" smooth={true} spy={true} duration={1000}
              className="av-link">
              FAQS
                </Link>
          </li>
          <li>
            <Link to="#about" smooth={true} spy={true} duration={1000}
              className="av-link">
              ABOUT
                </Link>
          </li>
        </ul>
      </nav>
    )
  }
}