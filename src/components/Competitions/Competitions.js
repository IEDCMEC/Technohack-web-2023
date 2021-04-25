import { Component } from 'react';
import { Link } from "react-router-dom";
import './Competitions.css';
import TechnoHackBanner from "../../assets/technohack_banner.jpeg";
import TechnoLogo from "../../assets/technohacklogo.jpg";

export default class Competitions extends Component {
    render() {
        return (
                <div className="competition" id="competitions">
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
                                <p className="competition-text-name-container">
                                    <img className="competition-text-name-image" src={TechnoLogo} />
                                </p>
                                {/* <p className="competition-text-designation">Hackathon</p> */}
                                <Link to="/technohack" className="competition-button">
                                    Register
                                </Link>
                            </div>
                        </div>
                        <div className="competition-brewing-box">
                            {/*<div className="competition-image"></div>
                            <div className="competition-text">
                                <p className="competition-text-name">Etho Oral</p>
                                <p className="competition-text-designation">Zerodha CEO</p>
                                <div className="competition-button red">Register</div>
                            </div>*/}
                            <p>Something lit is brewing here</p>
                        </div>
                        <div className="competition-brewing-box">
                            {/*<div className="competition-image"></div>
                            <div className="competition-text">
                                <p className="competition-text-name">Etho Oral</p>
                                <p className="competition-text-designation">Zerodha CEO</p>
                                <div className="competition-button red">Register</div>
                            </div>*/}
                            <p>Something lit is brewing here</p>
                        </div>
                    </div>
                </div>
        )
    }
};