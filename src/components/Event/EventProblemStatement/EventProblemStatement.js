import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import './EventProblemStatement.css';
import problemImg from '../../../assets/problemImg.png';
import { Element } from 'react-scroll'
import eventregbtn from '../../../assets/button.svg';
export default class EventProblemStatement extends Component {
    render() {
        return (<>
            <div id="tracks-link_for_navbar"></div>
            <Element name="vision"/>
            <div id="problem-statement">
                <EventSectionHeading text="Tracks" />
                <div className='combine'>
                    <div>
                        <p className='problem-text'>
                        <b>Open Innovation Track:</b> This track is all about pushing the boundaries of what's possible with technology. Whether you have an idea for a cutting-edge app or a creative solution to a complex problem, the Open Innovation Track is the place for you.
                        </p>
                        <br/> <br/>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Cyber Security Track:</b> With increasing threats to data privacy and security, the Cyber Security Track is dedicated to developing solutions that protect us from cyber attacks. From encryption technologies to secure data storage solutions, this track is all about keeping us safe in the digital age.
                        </p>
                        <br/> <br/>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Environment Track:</b> Climate change is one of the greatest challenges facing our planet. The Environment Track is dedicated to developing technology solutions that help reduce our carbon footprint and protect our environment for future generations.
                        </p>
                        <br/> <br/>
                        <br/> <br/>
                        <p className='problem-text'>
                        <b>Healthcare Track:</b> Healthcare is an increasingly important area in which technology can make a big difference. The Healthcare Track is all about using technology to improve access to care, reduce costs, and save lives. From telemedicine to medical device design, this track covers a wide range of issues that are critical to the future of healthcare.
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