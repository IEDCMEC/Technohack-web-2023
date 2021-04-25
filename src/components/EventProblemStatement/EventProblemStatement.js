import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventProblemStatement.css';
import problemImg from '../../assets/problemImg.png';
export default class EventProblemStatement extends Component {
    render() {
        return (<>
            <div id="problem-statement-link_for_navbar"></div>
            <div id="problem-statement">
                <EventSectionHeading text="Tracks" />
                <div className='combine'>
                    <div>
                        <p className='problem-text'>
                            <b>Spoon</b>: Build your solution on the Cloud.  <br/>
                            Only invidual participants are eligible for this track.
                        </p>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Block Chain</b>: The future lies in Decentralization and
            Transparency. This track is for blockchain enthusiasts.
                        </p>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Open Innovation</b>: We do not want to tie you down with problem
            statements, hence, if you are a free thinker and already have
            solutions to problems, then this track is for you.
                        </p>
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