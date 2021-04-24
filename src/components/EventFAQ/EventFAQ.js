import { Component } from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import Faq from "../Faq/Faq";
import "./EventFAQ.css";
import eventData from "./EventFaqData";

export default class EventFAQ extends Component {
  render() {
    return (
      <div id="faq">
        <EventSectionHeading text="FAQ" />
        <Faq faqClass="event" data={eventData} />
      </div>
    );
  }
}
