import React  from 'react';
import './EventNavbar.css';
import logoBlack from '../../../assets/techno-logo.png'
import logoWhite from '../../../assets/techno-logo-black.png'
import { useEffect,useState } from 'react';

const EventNavbar = () => {

    const [scroll,setScroll] = useState(false);

    useEffect(()=>{
        var navItems = [];
        navItems[0] = document.getElementById("problem-statement")
        navItems[1] = document.getElementById("prizes")
        navItems[2] = document.getElementById("faq")
        navItems[3] = document.getElementById("sponsors")

        navItems.forEach(element => {
            element.addEventListener("click",scrollToView)
        });

        // var scrollNav = document.getElementById("scroll-nav");
        window.addEventListener("scroll",navScrolled);

        function navScrolled(e){
            if(window.scrollY > 30){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        }


        function scrollToView(e){
            var source = document.getElementById(e.target.id + "-link_for_navbar")
            source.scrollIntoView({behavior:"smooth"})
        }


        return () => {
            navItems.forEach(element => {
                element.removeEventListener("click",scrollToView)
            });
            window.removeEventListener("scroll",navScrolled)
        };
    },[])

    return (<div className="nav-wrapper">
    <div >
        <img src={logoBlack} alt="techno-hack" className="techno-logo-mobile"></img>
    </div>

    <div className={scroll?"event-navbar scroll":"event-navbar"} id="scroll-nav">
        <img src={scroll? logoWhite : logoBlack } alt="techno-hack" className={scroll ? "techno-logo scroll" : "techno-logo"} ></img>
        <div className={scroll ? "event-nav-link scroll" : "event-nav-link"} id='problem-statement'>
                Tracks
        </div>
        <div className={scroll ? "event-nav-link scroll" : "event-nav-link"} id="prizes">
                Prizes
        </div>
        <div className={scroll ? "event-nav-link scroll" : "event-nav-link"} id="faq">
                Faq
        </div>
        <div className={scroll ? "event-nav-link scroll" : "event-nav-link"} id="sponsors">
                Sponsors
        </div>
    </div>
</div>
)
}

export default EventNavbar;
