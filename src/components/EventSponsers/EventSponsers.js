import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventSponsers.css';

export default class EventSponsers extends Component {
    render() {
        return (
           <div>
                <EventSectionHeading text="Sponsers" />
           </div> 
        )
    }
}