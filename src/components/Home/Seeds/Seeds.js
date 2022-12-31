import { Component } from "react";
import { Link } from "react-router-dom";
import "./Seeds.css";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Modal from "../Modal/Modal";
import seeds from '../../../assets/seeds.png';

export default class Seeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      track: "",
    };
  }
  render() {
    return (
      <div className="seeds" id="seeds">
        <BackgroundAnimation seeds={true} />

        <div className="section-heading-seeds">seeds</div>
        <div className="seeds-quote-container">
          <p className="seeds-quote-content">
            The smallest act of kindness is worth more than the grandest intention.
            </p>
        </div>

        <div className="seeds-content-container">
        <img id="seeds-image" src={seeds} />
          <p className="seeds-content">
          SEEDS has one ultimate goal: to build the resilience of people exposed to disasters. For close to three decades, they have been enabling this through practical solutions for disaster readiness, response and rehabilitation.
            <br />
            <br />
            The organisation’s work towards the continuing challenge of Covid19 commenced in March 2021 with the announcement of vaccination by the Government of India. Currently, it is responding to Second Wave of Covid-19 focussing to Share The Burden on our health care system through a four- pronged strategy to help mitigate the devastating impact of second wave: Augmenting critical supplies to Government Covid Hospitals, stepping up vaccination drive, Establish Covid Care Centres and Extend support services with set up of helpline to aid most marginalised affected communities,facilitating supply of critical needs such as oxygen, provision of medical services through virtual platforms.
            <br />
            <br />
            IEDC MEC is extremely glad to be in affiliation with SEEDS, currently battling the second wave of Covid-19, and is thus delighted to inform you that 10% of the proceeds of every ticket of Technopreneur go to the SEEDS initiative. Also, you have the option to donate an amount of your choice once you register. Let’s stand together amid these testing times and disrupt!

          </p>
        </div>
      </div>
    );
  }
}
