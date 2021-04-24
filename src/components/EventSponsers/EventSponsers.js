import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventSponsers.css';

export default class EventSponsers extends Component {
    render() {
        return (
            <div id="sponsors">
                <EventSectionHeading text="Sponsors" />
                <div className="sponsors-container">
                    <h2 className="sponsors-title">Hackathon Partners</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                    </div>
                    <h2 className="sponsors-title"><span className="sponsors-heading-diamond">Diamond</span> Sponsors</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                    </div>
                    <h2 className="sponsors-title"><span className="sponsors-heading-platinum">Platinum</span> Sponsors</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-lg">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-lg">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                    </div>
                    <h2 className="sponsors-title"><span className="sponsors-heading-gold">Gold</span> Sponsors</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                    </div>
                    <h2 className="sponsors-title"><span className="sponsors-heading-bronze">Bronze</span> Sponsors</h2>
                    <div className="sponsors-row">
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                        <div className="sponsors-col sponsors-col-sm">
                            <img src="" alt="sponsor_image"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}