import { Component } from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import { Element } from "react-scroll";
import "./EventSponsers.css";
// import logobg from "../../../assets/logobg.svg";
import lyminal from "../../../assets/lyminal-logo.png";
import Aos from "aos";
import fossunited from "../../../assets/fossunited.png";
// import github from "../../../assets/github.png";
import kims from "../../../assets/sponsors/kims.png";
import githubname from "../../../assets/192-1923313_2-februari-github-logo-png-white-removebg-preview 1.png";
export default class EventSponsers extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    Aos.init({
      // initialise with other settings
      duration: 200,
    });
  }
  render() {
    return (
      <>
        <Element name="sponsor" />
        <div id="sponsors-link_for_navbar"></div>
        <div id="sponsors">
          <EventSectionHeading text="Sponsors" />
          <div data-aos="fade-up" className="sponsors-container">
            <a href="https://lyminal.space/" target="_blank" rel="noreferrer">
              <div className="sponsors">
                <img className="sponsor-img" src={lyminal} alt="Lyminal Logo"  />
              </div>
            </a>
            <a href="https://fossunited.org/" target="_blank" rel="noreferrer">
              <div className="sponsors">
                <img
                  style={{ width: "160px", marginLeft: "10px" }}
                  src={fossunited} alt="Foss United Logo"
                />
              </div>
            </a>
            <a href="https://github.com " target="_blank" rel="noreferrer">
              <div className="sponsors">
                {/* <img
                style={{ width: "100px", position: "relative", bottom: "8px" }}
                src={github}
              /> */}
                <img style={{ width: "100px" }} src={githubname} alt="github logo" />
              </div>
            </a>

            <a
              href="https://www.kimshealth.org/trivandrum/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sponsors">
                <img
                  className="sponsor-img"
                  src={kims} alt="kims logo"
                  style={{
                    width: "140px",
                    height: "120px",
                    position: "relative",
                    bottom: "5px",
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
}
