import { useEffect } from "react";
// import HeaderImage from "../../../assets/event-header.png";
import CalenderVector from "../../../assets/CalendarVector.svg";
import LocationVector from "../../../assets/LocationVector.svg";
// import eventregbtn from '../../../assets/event-reg-btn.png';
import EventNavbar from "../EventNavbar/EventNavbar";
import "./EventHeader.css";
import Counter from "../Counter";
import { useHistory } from "react-router-dom";
import Aos from "aos";

export default function EventHeader() {
  const history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://apply.devfolio.co/v2/sdk.js";
    // script.async = true;
    // script.defer = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
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
              <h2>TechnoHack 2023</h2>
              <div className="landing-subheading">
                <h3 data-aos="fade-up">
                  Building For a <br className="br-tagline"></br>Better Tomorrow
                </h3>
                <div data-aos="fade-up" className="landing-date-mob">
                  18-19<br></br>
                  Mar
                </div>
              </div>
              <div className="text">
                <div className="landing-date">
                  <div data-aos="fade-up" className="landing-date-vector">
                    <img src={CalenderVector} alt="calender icon" />
                  </div>{" "}
                  <div data-aos="fade-up" className="landing-date-text">
                    18 - 19 March 2023
                  </div>
                </div>
                <div className="landing-location">
                  <div data-aos="fade-up" className="landing-location-vector">
                    {" "}
                    <img src={LocationVector} alt="location icon"/>
                  </div>
                  <div data-aos="fade-up" className="landing-date-text">
                    Govt. Model Engineering College <br /> Thrikkakara
                  </div>
                </div>
              </div>
              <div className="loc">
                <div data-aos="fade-up" className="loc-vector">
                  {" "}
                  <img src={LocationVector} alt="location icon"/>
                </div>
                <div data-aos="fade-up" className="loc-text">
                  Govt Model Engineering College <br /> Thrikkakara
                </div>
              </div>
              {/* <div className="event-reg-btn-header">
                <div
                  className="apply-button"
                  data-hackathon-slug="technohack"
                  data-button-theme="light"
                  style={{
                    height: "44px",
                    width: "312px",
                    overflowY: "hidden",
                  }}
                ></div>
              </div> */}
              <button
                className="reg_btn"
                onClick={() => {
                  history.push("/register");
                }}
              >
                REGISTER
              </button>
            </div>
          </div>

          {/* <div>
            <img
              src={HeaderImage}
              alt="Headerimg"
              className="event-header-image"
            />
          </div> */}
          <div className="counter">
            <Counter date={`2023-03-18T00:00:00`} />
          </div>
        </div>

        <div className="event-countdown-container"></div>
      </div>
    </div>
  );
}
