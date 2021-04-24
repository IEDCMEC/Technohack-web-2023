import { Component } from 'react';
import './Speakers.css';

export default class Speakers extends Component {
    render() {
        return (
                <div className="speaker" id="competition">
                    <div className="section-heading">Speaker Sessions</div>
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