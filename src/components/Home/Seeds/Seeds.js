import { Component } from "react";
import { Link } from "react-router-dom";
import "./Seeds.css";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Modal from "../Modal/Modal";

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
          <p className="seeds-content">
            SEEDS has one ultimate goal: to build the resilience of people exposed to disasters. For close to three decades, they have been enabling this through practical solutions for disaster readiness, response and rehabilitation.
            <br />
            <br />
            Their dedicated team has partnered families affected by disasters and climate emergencies through numerous ways. Restoring and upgrading schools, homes and community infrastructure for disaster survivors, providing access to clean water, sanitation and health facilities to marginalised communities, their work has impacted families across India and Nepal. They have also invested in skill building, partnerships and advocacy to build long-term resilience. They continue to advocate for and work with communities across Asia to build a safer and sustainable world.
            <br />
            <br />
            IEDC MEC is extremely glad to be in affiliation with SEEDS, currently battling the second wave of Covid-19, and is thus delighted to inform you that 10% of the proceeds of every ticket of Technopreneur go to the SEEDS initiative.

          </p>
        </div>
      </div>
    );
  }
}
