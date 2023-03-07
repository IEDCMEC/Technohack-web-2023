import React from "react";
import "./EventNavbar.css";
import logoBlack from "../../../assets/techno-logo.png";
import Hamburger from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import {
  Link,
  // Element,
  animateScroll as scroll,
  // scrollSpy,
  // scroller,
} from "react-scroll";
import { Link as PageLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import logoWhite from '../../../assets/techno-logo-black.png'
import { useEffect, useState } from "react";

const EventNavbar = () => {
  const history = useHistory();
  const [scrolled, setScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [hamColor, setColor] = useState("#FFFF");

  useEffect(() => {
    // var scrollNav = document.getElementById("scroll-nav");
    window.addEventListener("scroll", navScrolled);

    function navScrolled(e) {
      if (window.scrollY >= 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", navScrolled);
    };
  }, []);

  return (
    <div className="nav-wrapper">
      <div className="hamburger-menu">
        <Menu
          right
          width="200px"
          isOpen={isOpen}
          onClose={() => {
            setOpen(false);
          }}
        >
          <PageLink
            activeClass="active"
            to="/"
            smooth={true}
            duration={500}
            className="event-nav-link menu-item "
            id="home"
          >
            Home
          </PageLink>
          <Link
            activeClass="active"
            to="vision"
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="vision"
          >
            Vision
          </Link>
          <Link
            activeClass="active"
            to="tracks"
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="tracks"
          >
            Tracks
          </Link>
          <Link
            activeClass="active"
            to="faq"
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="faq"
          >
            Faq
          </Link>
          <Link
            activeClass="active"
            to="sponsor"
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="sponsors"
          >
            Sponsors
          </Link>
        </Menu>
      </div>
      <div
        className={!scrolled ? "event-navbar" : "event-navbar scroll"}
        id="scroll-nav"
      >
        <img
          src={logoBlack}
          alt="techno-hack"
          className={scrolled ? "techno-logo" : "techno-logo"}
          onClick={() => {
            history.push("/");
          }}
          style={{
            cursor: "pointer",
          }}
        />
        <img
          src={logoBlack}
          alt="techno-hack"
          className={scrolled ? "techno-logo-mobile" : "techno-logo-mobile"}
          onClick={() => {
            history.push("/");
          }}
          style={{
            cursor: "pointer",
          }}
        ></img>
        {/* <div className={scroll ? "event-nav-link scroll" : "event-nav-link"}>Technopreneur</div> */}
        <div className="nav-sections">
          <PageLink
            activeClass="active"
            onClick={scroll.scrollToTop}
            smooth={true}
            duration={500}
            className="event-nav-link menu-item "
            id="home"
            to="/"
          >
            Home
          </PageLink>
          <Link
            activeClass="active"
            to="vision"
            
            offset= {-70}
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="vision"
          >
            Vision
          </Link>
          <Link
            activeClass="active"
            to="tracks"
            offset= {-70}
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="tracks"
          >
            Tracks
          </Link>
          <Link
            activeClass="active"
            to="faq"
            offset= {-150}
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="faq"
          >
            Faq
          </Link>
          <Link
            activeClass="active"
            to="sponsor"
            offset= {-70}
            smooth={true}
            duration={500}
            className="event-nav-link menu-item"
            id="sponsors"
          >
            Sponsors
          </Link>
        </div>

        <div className="nav-hamburger">
          <Hamburger
            size={28}
            color={hamColor}
            toggled={isOpen}
            toggle={setOpen}
            onToggle={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default EventNavbar;
