import { Component } from "react";
import { Link } from "react-router-dom";
import "./Seeds.css";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import dsworkshop from "../../../assets/datasciencews.jpg";
import pmworkshop from "../../../assets/pmws.jpg";
import aworkshop from "../../../assets/abroadws.jpg";
import iotworkshop from "../../../assets/iotws.jpg";
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
        <BackgroundAnimation seeds={true}/>

        <div className="section-heading-seeds">seeds</div>
        <div className="seeds-quote-container">
            <p className="seeds-quote-content">
                The smallest act of kindness is worth more than the grandest intention.
            </p>
        </div>

        <div className="seeds-content-container">
          <p className="seeds-content">
          IEDC MEC is extremely happy to be in affiliation with SEEDS, an NGO
          battling the second wave of Covid-19 and steadfastly thriving in its
          mission to make a positive impact to change lives for the better.
          Thus, we are delighted to inform you that 10% of the proceeds of every
          ticket of Technopreneur go to the SEEDS initiative.
          </p>
        </div>
      </div>
    );
  }
}
