import { Component } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './AngelConnectNavbar.css';
import logo from '../../../assets/techno-logo.png'

export default class EventNavbar extends Component {
    render() {
        return (<div className="nav-wrap">
            <div >
                <img src={logo} alt="techno-hack" className="techno-logo-mobile"></img>
            </div>

            <div className="angel-connect-navbar">
                <img src={logo} alt="techno-hack" className="techno-logo"></img>
                {/* <div className="angel-connect-nav-link angel-connect-active"><a href="">Home</a></div> */}
                <div className="angel-connect-nav-link ">
                    <Link to="#problem-statement-link_for_navbar" smooth={true} spy={true} duration={1000}>
                        Tracks
                    </Link>
                </div>
                <div className="angel-connect-nav-link">
                    <Link to="#prizes-link_for_navbar" smooth={true} spy={true} duration={1000}>
                        Prizes
                    </Link>
                </div>
                <div className="angel-connect-nav-link">
                    <Link to="#faq-link_for_navbar_two" smooth={true} spy={true} duration={1000}>
                        Faq
                    </Link>
                </div>
                <div className="angel-connect-nav-link">
                    <Link to="#sponsors-link_for_navbar" smooth={true} spy={true} duration={1000}>
                        Sponsors
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}