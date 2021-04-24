import { Component } from 'react';
import HeaderImage from '../../assets/event-header.png';
import eventregbtn from '../../assets/event-reg-btn.png';
import EventNavbar from '../EventNavbar/EventNavbar';
import './EventHeader.css';
import Counter from "../Counter";

export default class EventHeader extends Component {
    render() {
        return (
           <div className="event-header">
            <EventNavbar />
            <div className="event-landing">

            <div className='event-row-container'>
                    <div>
                        <p className='header-text'> <strong> TechnoHack </strong> is a nation-wide hackathon conducted 
            as a part of <strong> IEDC MEC's Technopreneur </strong> event. 
            TechnoHack invites all geeks and entrepreneurs to come up with
            solutions to problems of today.
                        </p>
                        <img src={eventregbtn} alt="Register-btn" className='event-reg-btn' />    
                    </div>
                    <div>
                        <img src={HeaderImage} alt="Header-Image" className='event-header-image' />
                    </div>
                </div>

                <div className="event-countdown-container">
                    <div className="left-border-top-square"></div>
                    <div className="counter">
          <Counter date={`2021-05-24T00:00:00`} />
        </div>
                </div>
            </div>
           </div> 

        )
    }
}