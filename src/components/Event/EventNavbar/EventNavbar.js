import React  from 'react';
import './EventNavbar.css';
import logoBlack from '../../../assets/techno-logo.png'
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
// import logoWhite from '../../../assets/techno-logo-black.png'
import { useEffect,useState } from 'react';

const EventNavbar = () => {

    const [scroll,setScroll] = useState(false);
    const [scrollValue, setScrollValue] = useState(30);
    const [isOpen, setOpen] = useState(false)
    const [hamColor,setColor] = useState("#FFFF")


    useEffect(()=>{
        var navItems = [];
        navItems[0] = document.getElementById("problem-statement")
        navItems[1] = document.getElementById("prizes")
        navItems[2] = document.getElementById("tracks")
        navItems[3] = document.getElementById("faq")
        navItems[4] = document.getElementById("sponsors")

        navItems.forEach(element => {
            element.addEventListener("click",scrollToView)
        });

        // var scrollNav = document.getElementById("scroll-nav");
        window.addEventListener("scroll",navScrolled);

        function navScrolled(e){
            setScrollValue(window.scrollY)
            if(window.scrollY >= scrollValue){
                setScroll(true)
            }
            else if (window.scrollY < scrollValue){
                setScroll(false)
            }
            // console.log(scroll)
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
    },[scrollValue])

    return (<div className="nav-wrapper">
        <div className='hamburger-menu'>
            <Menu right width='200px' isOpen={isOpen} onClose={ ()=>{
                setOpen(false)
            }}>
                <div className="event-nav-link menu-item" id='problem-statement'>
                        Home
                </div>
                <div className="event-nav-link menu-item" id='problem-statement'>
                        Vision
                </div>
                <div className="event-nav-link menu-item" id='tracks'>
                        Tracks
                </div>
                <div className="event-nav-link menu-item" id="faq">
                        Faq
                </div>
                <div className="event-nav-link menu-item" id="sponsors">
                        Sponsers
                </div>
            </Menu>    
        </div>
    <div className={scroll?"event-navbar":"event-navbar"} id="scroll-nav">
        <img src={logoBlack } alt="techno-hack" className={scroll ? "techno-logo" : "techno-logo"} ></img>
        <img src={logoBlack} alt="techno-hack" className={scroll? "techno-logo-mobile" : 'techno-logo-mobile'}></img>
        {/* <div className={scroll ? "event-nav-link scroll" : "event-nav-link"}>Technopreneur</div> */}
        <div className='nav-sections'>
                <div className="event-nav-link" id='problem-statement'>
                        Home
                </div>
                <div className="event-nav-link" id='problem-statement'>
                        Vision
                </div>
                <div className="event-nav-link" id='tracks'>
                        Tracks
                </div>
                <div className="event-nav-link" id="faq">
                        Faq
                </div>
                <div className="event-nav-link" id="sponsors">
                        Sponsers
                </div>
        </div>

        <div className='nav-hamburger'>
            <Hamburger  color={hamColor} toggled={isOpen} toggle={setOpen} onToggle={()=>{
            }} />
                </div>
    </div>
</div>
)
}

export default EventNavbar;
