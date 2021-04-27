import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventProblemStatement.css';
import problemImg from '../../assets/problemImg.png';
import eventregbtn from '../../assets/button.svg';
export default class EventProblemStatement extends Component {
    render() {
        return (<>
            <div id="problem-statement-link_for_navbar"></div>
            <div id="problem-statement">
                <EventSectionHeading text="Tracks" />
                <div className='combine'>
                    <div>
                        <p className='problem-text'>
                            <b>Spoon</b>: Your mission should you choose to accept it, is to innovate to build a cloud-based hack in the personal finance management space.
  <br/>
                            Only invidual participants are eligible for this track.
                        </p>
                        <a href={process.env.PUBLIC_URL + '/tracks/Spoon.pdf'}>
                        <img src={eventregbtn} alt="Register-btn" className='event-reg-btn' />
                        </a>
                        <br/> <br/>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Block Chain</b>: The future lies in Decentralization and
            Transparency. This track is for blockchain enthusiasts.
                        </p>
                        <a href={process.env.PUBLIC_URL + '/tracks/Blockchain.pdf'}>
                        <img src={eventregbtn} alt="Register-btn" className='event-reg-btn' />
                        </a>
                        <br/> <br/>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Open Innovation</b>: We do not want to tie you down with problem
            statements, hence, if you are a free thinker and already have
            solutions to problems, then this track is for you.
                        </p>
                        <a href={process.env.PUBLIC_URL + '/tracks/Open_Innovation.pdf'}>
                        <img src={eventregbtn} alt="Register-btn" className='event-reg-btn' />
                        </a>
                    </div>
                    <div className="problem-statement-image-container">
                        <img src={problemImg} alt="Image" className='problem-statement-image' />
                    </div>
                </div>
            </div>
            </>
        )
    }
}