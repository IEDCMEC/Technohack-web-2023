import { Component } from 'react';
import './Speakers.css';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
export default class Speakers extends Component {
    render() {
        return (
                <div className="speaker" id="speakers">
                    <BackgroundAnimation />
                    <div className="section-heading-speakers">Speaker Sessions</div>
                    <div className="speaker-container">
                        <div className="speaker-brewing-box">
                            {/*<div className="speaker-image"></div>
                            <div className="speaker-text">
                                <p className="speaker-text-name">Etho Oral</p>
                                <p className="speaker-text-designation">Zerodha CEO</p>
                            </div>*/}
                            <p>Something's Brewing</p>
                        </div>
                        <div className="speaker-brewing-box">
                            {/*<div className="speaker-image"></div>
                            <div className="speaker-text">
                                <p className="speaker-text-name">Etho Oral</p>
                                <p className="speaker-text-designation">Zerodha CEO</p>
                            </div>*/}
                            <p>Something Amazing</p>
                        </div>
                        <div className="speaker-brewing-box">
                            {/*<div className="speaker-image"></div>
                            <div className="speaker-text">
                                <p className="speaker-text-name">Etho Oral</p>
                                <p className="speaker-text-designation">Zerodha CEO</p>
                            </div>*/}
                            <p>Something Exciting</p>
                        </div>
                    </div>
                </div>
        )
    }
};