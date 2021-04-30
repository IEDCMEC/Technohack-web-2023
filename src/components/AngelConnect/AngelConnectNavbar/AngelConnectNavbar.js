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
                    <Link to="#angel-connect-about" smooth={true} spy={true} duration={1000}>
                        About
                    </Link>
                </div>
                <div className="angel-connect-nav-link">
                    <Link to="#angel-connect-timeline" smooth={true} spy={true} duration={1000}>
                        Timeline
                    </Link>
                </div>
                <div className="angel-connect-nav-link">
                    <Link to="#angel-connect-investors" smooth={true} spy={true} duration={1000}>
                        Investors
                    </Link>
                </div>
                <div className="angel-connect-nav-link">
                    <Link to="#angel-connect-faq" smooth={true} spy={true} duration={1000}>
                        FAQ
                    </Link>
                </div>
                <div className="angel-connect-nav-link" id="angel-connect-contact-us-navbar-button">
                    <Link to="#angel-connect-footer" smooth={true} spy={true} duration={1000}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}