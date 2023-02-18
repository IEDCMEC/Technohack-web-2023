import { Component } from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading'
import { Element } from 'react-scroll';
import './EventSponsers.css';
import logobg from '../../../assets/logobg.svg'
import lyminal from '../../../assets/lyminal-logo.png';
import fossunited from '../../../assets/fossunited.png';
import github from '../../../assets/github.png';
import githubname from '../../../assets/192-1923313_2-februari-github-logo-png-white-removebg-preview 1.png';
export default class EventSponsers extends Component {
    render() {
        return (<>
        <Element name="sponsor"/>
            <div id="sponsors-link_for_navbar"></div>
            <div id="sponsors">
                <EventSectionHeading text="Sponsors" />
                <div className="sponsors-container">
                    <div className='sponsors'>
                        <img className='sponsor-img' src={lyminal}/>
                    </div>
                    <div className='sponsors'>
                        <img style={{width:'200px'}} src={fossunited}/>
                    </div>
                    <div className='sponsors'>
                        <img style={{width:'150px',position:'relative',bottom:'25px'}} src={github}/>
                        <img style={{width:'150px',position:'relative',bottom:'25px'}} src={githubname}/>
                    </div>
                    <div className='sponsors'>
                        <img className='sponsor-img' src={lyminal}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}