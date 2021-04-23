import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventPrizes.css';

export default class EventPrizes extends Component {
    render() {
        return (
           <div>
                <EventSectionHeading text="Prizes" />
           </div> 
        )
    }
}