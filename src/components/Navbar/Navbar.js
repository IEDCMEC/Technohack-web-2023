import React, { Component } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import './Navbar.css';
export default class Navbar extends Component {
    render() {
    return ( 
        <nav className="navbar">
          <ul className="nav-item">
            <li>
              <Link to="/#/speakers" smooth={true} spy={true} duration={1000}
              className="av-link">
                SPEAKERS
                </Link>
            </li>
            <li>
              <Link to="../Competitions/Competitions" smooth={true} spy={true} duration={1000}
              className="av-link">
                COMPETITIONS
                </Link>
            </li>
            <li>
              <Link to="../Faq/Faq" smooth={true} spy={true} duration={1000}
              className="av-link">
                FAQS
                </Link>
            </li>
            <li>
              <Link to="#" smooth={true} spy={true} duration={1000}
              className="av-link">
                ABOUT
                </Link>
            </li>
          </ul>
        </nav>
    )
}
}