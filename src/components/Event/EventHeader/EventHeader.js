import { useEffect } from "react";
// import HeaderImage from "../../../assets/event-header.png";
// import eventregbtn from '../../../assets/event-reg-btn.png';
import EventNavbar from "../EventNavbar/EventNavbar";
import "./EventHeader.css";
import Counter from "../Counter";

export default function EventHeader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="event-header">
      <EventNavbar />
      <div className="event-landing">
        <div className="event-row-container">
          {/* <p className='header-text'> Here is the chance you’ve been waiting for to give wings to your <strong>creativity</strong>.
                        Give life to your <strong>innovative</strong> ideas that can be solutions to the problems of today with <strong>TechnoHack!</strong>
                        </p> */}
          <div className="content-column">
            <div className="inner-column">
              <h2>
                Technohack 2023
                <br />
              </h2>
              <h3 className="text">Building For a Better Tomorrow</h3>
              <div className="text">
                March 18 - 19 <br /> Model Engineering College, Kochi
              </div>
              <div className="event-reg-btn-header">
                <div
                  className="apply-button"
                  data-hackathon-slug="technohack"
                  data-button-theme="light"
                  style={{ height: "44px", width: "312px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="banner"></div>

          {/* <div>
            <img
              src={HeaderImage}
              alt="Headerimg"
              className="event-header-image"
            />
          </div> */}
        </div>
        <div className="counter">
          <Counter date={`2023-03-18T00:00:00`} />
        </div>

        <div className="event-countdown-container"></div>
      </div>
    </div>
  );
}
