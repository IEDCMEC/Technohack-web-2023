import { Component } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './AngelConnectNavbar.css';
import techno from '../../../assets/Main logo.png';
import menulogo from '../../../assets/menu logo.png';

export default class EventNavbar extends Component {
    render() {
        return (
            <div className="nav-wrap">
                <div className="angel-connect-navbar">

                    <img src={techno} alt="techno-hack" className="techno-logo"></img>

                    { /* <div className="angel-connect-nav-link angel-connect-active"><a href="">Home</a></div>  */}

                    
                    <div className="angel-connect-nav-link ">
                        <Link to="#problem-statement-link_for_navbar" smooth={true} spy={true} duration={1000}>
                            HOME
                            </Link>
                    </div>
                    <div className="angel-connect-nav-link" >
                        <Link to="#prizes-link_for_navbar" smooth={true} spy={true} duration={1000}>
                            ANGEL CONNECT
                            </Link>
                    </div>
                    <div className="angel-connect-nav-link">
                        <Link to="#angelconnecttimeline" smooth={true} spy={true} duration={1000}>
                            TIMELINE
                             </Link>
                    </div>
                    <div className="angel-connect-nav-link">
                        <Link to="#angelconnectinvestors" smooth={true} spy={true} duration={1000}>
                            INVESTORS
                            </Link>
                    </div>
                    <div className="angel-connect-nav-link">
                        <Link to="#sponsors-link_for_navbar" smooth={true} spy={true} duration={1000}>
                            FAQ
                            </Link>
                    </div>
                    <div className="angel-connect-nav-link">
                        <Link to="#sponsors-link_for_navbar" smooth={true} spy={true} duration={1000}>
                            CONTACT US
                            </Link>
                    </div>
                </div>
            </div>

        )
    }
}