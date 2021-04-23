import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventProblemStatement.css';

export default class EventProblemStatement extends Component {
    render() {
        return (
           <div>
                <EventSectionHeading text="Problem Statement" />
           </div> 
        )
    }
}