import React from "react";
import "./Vision.css";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import { Element } from "react-scroll";
import VisionVector from "../../../assets/VisionVector.png";

const Vision = () => {
  return (
    <div>
      <Element name="vision" />
      <EventSectionHeading text="Vision" />
      <div className="vision">
        <div className="vision-text">
          TechnoHack is the annual hackathon conducted as part of{" "}
          <span className="techno">
            <strong>
              <a
                href="https://www.technopreneur.co.in/"
                target="_blank"
                rel="noreferrer"
              >
                Technopreneur
              </a>
            </strong>
          </span>{" "}
          - the annual e-summit hosted by the Innovation and Entrepreneurship
          Development Cell (IEDC) of Govt. Model Engineering College.
          <br />
          <br />
          With a vision to create a space where participants can showcase their
          talent and develop ideas that make a positive impact on society,
          TechnoHack offers a unique opportunity for individuals to connect and
          collaborate.{" "}
          <span className="mobile-para">
            Whether you are a student, a professional, or an entrepreneur,
            TechnoHack welcomes participants from all fields and backgrounds to
            join and bring their unique perspectives and ideas to the table.
          </span>
          <br />
          <br />
          Come be a part of TechnoHack 2023, and work together to create a
          better tomorrow through innovation and entrepreneurship!
        </div>
        <img src={VisionVector} className="vision-vector" alt=" "></img>
      </div>
    </div>
  );
};

export default Vision;
