import { Component } from 'react';
import './EventNavbar.css';
import logo from '../../assets/techno-logo.png'
export default class EventNavbar extends Component {
    render() {
        return (<div className="nav-wrap">
            <div >
            <img src={logo} alt="techno-hack" className="techno-logo-mobile"></img>
            </div>
              
            <div className="event-navbar">
                
  <img src={logo} alt="techno-hack" className="techno-logo"></img>
                
              
                <div className="event-nav-link event-active">Home</div>
                <div className="event-nav-link ">Tracks</div>
                <div className="event-nav-link">Prizes</div>
                <div className="event-nav-link">Faq</div>
                <div className="event-nav-link">Sponsors</div>
            </div>
            </div>
        )
    }
}    