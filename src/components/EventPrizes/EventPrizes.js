import { Component } from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import "./EventPrizes.css";
import first from "../../assets/1st.png";
import second from "../../assets/2nd.png";
import third from "../../assets/3rd.png";
import hackBuilt from "../../assets/hack-built.png";

export default class EventPrizes extends Component {
  prizeCards = [
    {
      description: "First Prize",
      img: first,
      prizeMoney: "10,000 INR",
      imgStyle: "prize-image",
    },
    {
      description: "Second Prize",
      img: second,
      prizeMoney: "5,000 INR",
      imgStyle: "prize-image",
    },
    {
      description: "Third Prize",
      img: third,
      prizeMoney: "2,500 INR",
      imgStyle: "prize-image",
    },
    {
      description: "Best Hack Built",
      img: hackBuilt,
      prizeMoney: "2,000 INR",
      imgStyle: "prize-image",
    },
  ];
  render() {
    return (
      <div id="prizes">
        <EventSectionHeading text="Prizes" />
        <div className="prize-container">
          {this.prizeCards.map((prize) => (
            <div className="prize-card">
              <img className={prize.imgStyle} src={prize.img} />
              <div className="prize-text">
                <div style={{ textAlign: "center" }}>{prize.description}</div>
                <div style={{ textAlign: "center" }}>
                  <b>{prize.prizeMoney}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
