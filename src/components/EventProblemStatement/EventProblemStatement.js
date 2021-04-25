import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventProblemStatement.css';
import problemImg from '../../assets/problemImg.png';
export default class EventProblemStatement extends Component {
    render() {
        return (
            <div id="problem-statement">
                <EventSectionHeading text="Tracks" />
                <div className='combine'>
                    <div>
                        <p className='problem-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br /><br /> Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        </p>
                    </div>
                    <div className="problem-statement-image-container">
                        <img src={problemImg} alt="Image" className='problem-statement-image' />
                    </div>
                </div>
            </div>
        )
    }
}