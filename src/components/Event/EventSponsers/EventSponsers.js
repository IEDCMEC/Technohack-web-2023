import { Component } from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import { Element } from "react-scroll";
import "./EventSponsers.css";
import logobg from "../../../assets/logobg.svg";
import lyminal from "../../../assets/lyminal-logo.png";
import Aos from "aos";
import fossunited from "../../../assets/fossunited.png";
import github from "../../../assets/github.png";
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
            <div className="sponsors">
              <img className="sponsor-img" src={lyminal} />
            </div>
            <div className="sponsors">
              <img
                style={{ width: "160px", marginLeft: "10px" }}
                src={fossunited}
              />
            </div>
            <div className="sponsors">
              <img
                style={{ width: "100px", position: "relative", bottom: "8px" }}
                src={github}
              />
              <img
                style={{ width: "100px", position: "relative", bottom: "20px" }}
                src={githubname}
              />
            </div>
            <div className="sponsors">
              <img
                className="sponsor-img"
                src={kims}
                style={{
                  width: "220px",
                  height: "80px",
                  position: "relative",
                  bottom: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
