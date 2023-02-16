import React from "react";
import "./Vision.css";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";

const Vision = () => {
  return (
    <div>
      <EventSectionHeading text="Vision" />
      <div className="vision">
        <p>
          Our vision is to bring together the brightest minds and most creative
          thinkers to innovate for a better tomorrow. We believe that by
          leveraging technology and out-of-the-box ideas, we can create
          sustainable products and solutions that help people and the planet.
          Our goal is to inspire and empower our participants to think beyond
          what's been done before and to create truly impactful innovations.
          <br />
          <br />
          We envision a future where the products and solutions developed at
          this hackathon will have a positive impact on society, the
          environment, and the economy, and we are committed to supporting our
          participants every step of the way as they turn their ideas into
          reality.
          <br />
          <br />
          Technopreneur 2023 brings to you TechnoHack, a 24 hour-long hachathon,
          which seeks to promote the creation of novel and distinctive technical
          solutions to societal problems.
        </p>
      </div>
    </div>
  );
};

export default Vision;
