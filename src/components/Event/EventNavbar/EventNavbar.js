import React  from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './EventNavbar.css';
import logo from '../../../assets/techno-logo.png'
import { useEffect } from 'react';

const EventNavbar = () => {

    useEffect(()=>{
        var navItems = [];
        navItems[0] = document.getElementById("problem-statement")
        navItems[1] = document.getElementById("prizes")
        navItems[2] = document.getElementById("faq")
        navItems[3] = document.getElementById("sponsors")

        navItems.forEach(element => {
            element.addEventListener("click",scrollToView)
        });

        function scrollToView(e){
            var source = document.getElementById(e.target.id + "-link_for_navbar")
            source.scrollIntoView({behavior:"smooth"})
        }

        return () => {
            window.removeEventListener("click",scrollToView)
        };
    },[])

    return (<div className="nav-wrap">
    <div >
        <img src={logo} alt="techno-hack" className="techno-logo-mobile"></img>
    </div>

    <div className="event-navbar">
        <img src={logo} alt="techno-hack" className="techno-logo"></img>
        <div className="event-nav-link"><Link to="/" smooth={true} spy={true} duration={1000}>
                Technopreneur
            </Link></div>
        <div className="event-nav-link " id='problem-statement'>
                Tracks
        </div>
        <div className="event-nav-link" id="prizes">
                Prizes
        </div>
        <div className="event-nav-link" id="faq">
                Faq
        </div>
        <div className="event-nav-link" id="sponsors">
                Sponsors
        </div>
    </div>
</div>
)
}

export default EventNavbar;
