import { Component } from 'react';
import './EventSectionHeading.css';
export default class EventSectionHeading extends Component {
    
    render() {
        return (
           <div className="event-section-heading-container">
                <div className="section-left-line"></div>
                <div className="section-left-line-right-square"></div>
                <p className="event-section-heading">{this.props.text}</p>
                <div className="section-right-line"></div>
           </div> 

        )
    }
}