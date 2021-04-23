import { Component } from 'react';
import HeaderImage from '../../assets/HeaderImage.png';
import EventNavbar from '../EventNavbar/EventNavbar';
import './EventHeader.css';

export default class EventHeader extends Component {
    render() {
        return (
           <div className="event-header">
            <EventNavbar />
            <div className="event-landing">
                <div className="event-countdown-container">
                    <div className="left-border-top-square"></div>
                    <div className="event-countdown">
                    </div>
                </div>
            </div>
           </div> 

        )
    }
}