import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventSponsers.css';
import AWSug from "../../../assets/AWSug.png";
import Polygon from "../../../assets/Polygon.png";
import Celo from "../../../assets/Celo.png";
import Portis from "../../../assets/Portis.png";
import Tezos from "../../../assets/Tezos.png";
import Devfolio from "../../../assets/Devfolio.png";
import HackClub from "../../../assets/hackclub.png";
import DSC from "../../../assets/dsc_logo.png";
import echoar from "../../../assets/echoar.webp";
import ye from '../../../assets/ye_stack.svg'
import tgh_logo from '../../../assets/tgh_logo.png'
export default class EventSponsers extends Component {
    render() {
        return (<>
            <div id="sponsors-link_for_navbar"></div>
            <div id="sponsors">
                <EventSectionHeading text="Sponsors" />
                <div className="sponsors-container">
                <h2 className="sponsors-title"><span className="sponsors-heading-gold">Gold</span> Sponsors</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-sm">
                        <a href="https://devfolio.co/" target="_blank" rel="noreferrer noopener">
                            <img src={Devfolio} alt="sponsor_image" className="sponsor-image"></img>
                        </a>
                        </div>
                    </div>
                    <h2 className="sponsors-title"><span className="sponsors-heading-platinum">Silver</span> Sponsors</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                            <a href="https://matic.network/" target="_blank" rel="noreferrer noopener">
                            <img src={Polygon} alt="sponsor_image" className="sponsor-image"></img>
                            </a>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <a href="https://celo.org/" target="_blank" rel="noreferrer noopener">
                            <img src={Celo} alt="sponsor_image" className="sponsor-image"></img>
                            </a>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <a href="https://www.portis.io/" target="_blank" rel="noreferrer noopener">
                            <img src={Portis} alt="sponsor_image" className="sponsor-image"></img>
                            </a>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <a href="https://tezos.com/" target="_blank" rel="noreferrer noopener">
                            <img src={Tezos} alt="sponsor_image" className="sponsor-image"></img>
                            </a>
                        </div>
                    </div>
                    <h2 className="sponsors-title">Cloud Partner</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                        <a href="https://awsugkochi.in/" target="_blank" rel="noreferrer noopener">
                            <img src={AWSug} alt="sponsor_image" className="sponsor-image"></img>
                        </a>
                        </div>
                    </div>
                    <h2 className="sponsors-title">AR/VR Partner</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                        <a href="https://www.echoar.xyz/" target="_blank" rel="noreferrer noopener">
                            <img src={echoar} alt="sponsor_image" className="sponsor-image"></img>
                        </a>
                        </div>
                    </div>
                    <h2 className="sponsors-title">Outreach Partner</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                            <img src={HackClub} alt="sponsor_image" className="sponsor-image"></img>
                        </div>
                    </div>
                    <h2 className="sponsors-title">Community Partner</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                            <img src={DSC} alt="sponsor_image" className="sponsor-image" id="dsc-img"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <img src={ye} alt="sponsor_image" className="sponsor-image" id="dsc-img"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <img src={tgh_logo} alt="sponsor_image" className="sponsor-image" id="dsc-img"></img>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}