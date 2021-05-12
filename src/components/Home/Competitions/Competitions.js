import { Component } from 'react';
import { Link } from "react-router-dom";
import './Competitions.css';
import TechnoHackBanner from "../../../assets/technohack_banner.jpeg";
import TechnoLogo from "../../../assets/technohacklogo.jpg";
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import AngelConnectLogo from "../../../assets/angelconnect_black.png";
import AngelConnectBanner from "../../../assets/invest.jpg";
export default class Competitions extends Component {
    render() {
        return (
                <div className="competition" id="competitions">
                <BackgroundAnimation />
                    <div className="section-heading-competitions">Competitions</div>
                    <div className="competition-container">
                        <div className="competition-box">
                            <div className="competition-image-container">
                                <img className="competition-image" src={TechnoHackBanner} />
                                <div className="competition-image-text">                                    
                                <p>TechnoHack is a nation-wide hackathon conducted as a part of IEDC MEC's Technopreneur event. TechnoHack invites all geeks and entrepreneurs to come up with solutions to problems of today.</p>
                                </div>
                            </div>
                            <div className="competition-text">
                                <p className="competition-text-name-container-hackathon">
                                    <img className="competition-text-name-image" src={TechnoLogo} />
                                </p>
                                {/* <p className="competition-text-designation">Hackathon</p> */}
                                <Link to="/technohack" className="competition-button">
                                    Register
                                </Link>
                            </div>
                        </div>
                        <div className="competition-box">
                            <div className="competition-image-container">
                                <img className="competition-image" id="angelconnet-image-banner" src={AngelConnectBanner} />
                                <div className="competition-image-text">                                    
                                <p>AngelConnect is a unique opportunity for all the student startups and fledgling entrepreneurs out there to network and get investments from Angel Investors themselves.</p>
                                </div>
                            </div>
                            <div className="competition-text">
                                <p className="competition-text-name-container-angelconnect">
                                    <img className="competition-text-name-image" id="competition-angel-connect-logo" src={AngelConnectLogo} />
                                </p>
                                {/* <p className="competition-text-designation">Hackathon</p> */}
                                <Link to="/angelconnect" className="competition-button">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};