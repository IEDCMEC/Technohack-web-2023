import { Component } from 'react';
import { Link } from "react-router-dom";
import './Competitions.css';

export default class Competitions extends Component {
    render() {
        return (
                <div className="competition" id="competitions">
                    <div className="section-heading-competitions">Competitions</div>
                    <div className="competition-container">
                        <div className="competition-box">
                            <div className="competition-image"></div>
                            <div className="competition-text">
                                <p className="competition-text-name">TechnoHack</p>
                                <p className="competition-text-designation">Hackathon</p>
                                <Link to="/technohack" className="competition-button blue">
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
                            <p>Something's Brewing</p>
                        </div>
                        <div className="competition-brewing-box">
                            {/*<div className="competition-image"></div>
                            <div className="competition-text">
                                <p className="competition-text-name">Etho Oral</p>
                                <p className="competition-text-designation">Zerodha CEO</p>
                                <div className="competition-button red">Register</div>
                            </div>*/}
                            <p>Stay Tuned</p>
                        </div>
                    </div>
                </div>
        )
    }
};