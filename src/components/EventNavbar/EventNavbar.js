import { Component } from 'react';
import './EventNavbar.css';

export default class EventNavbar extends Component {
    render() {
        return (
            <div className="event-navbar">
                <div className="event-nav-link">Speakers</div>
                <div className="event-nav-link event-active">Competitions</div>
                <div className="event-nav-link">Faq</div>
                <div className="event-nav-link">About</div>
            </div>
        )
    }
}    