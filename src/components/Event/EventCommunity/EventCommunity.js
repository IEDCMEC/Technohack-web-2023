import { Component } from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import { Element } from "react-scroll";
import "./EventCommunity.css";
import aws from "../../../assets/aws.png";
import bms from "../../../assets/bms.png";
import bma from "../../../assets/bma.png";
export default class EventSponsers extends Component {
  render() {
    return (
      <>
        <Element name="community" />
        <div id="community-link_for_navbar"></div>
        <div id="community">
          <EventSectionHeading text="Community Partners" />
          <div className="community-container">
            <a
              href="https://www.linkedin.com/in/awsugkochi"
              target="_blank"
              rel="noreferrer"
            >
              <div className="community">
                <img className="community-img" src={aws} alt="aws logo"/>
              </div>
            </a>
            <div className="community">
              <img className="community-img" src={bms} alt="bms logo" />
            </div>
            <div className="community">
              <img className="community-img" src={bma} alt="bma logo"/>
            </div>
            {/* <div className="community">
              <img
                style={{ width: "200px", marginLeft: "10px" }}
                src={fossunited}
              />
            </div>
            <div className="community">
              <img
                style={{ width: "120px", position: "relative", bottom: "14px" }}
                src={github}
              />
              <img
                style={{ width: "120px", position: "relative", bottom: "25px" }}
                src={githubname}
              />
            </div>
            <div className="community">
              <img className="community-img" src={lyminal} />
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
