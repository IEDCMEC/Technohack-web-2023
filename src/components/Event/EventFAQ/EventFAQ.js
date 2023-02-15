import React from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import Faq from "../../Faq/Faq";
import eventData from "./EventFaqData";
import { Element } from "react-scroll";

const EventFAQ = () => {
  return (
    <>
    <div id='faq-link_for_navbar'></div>
    <div>
      <EventSectionHeading text='FAQ' />
      <Element name="faq"/>
      <Faq faqClass='event' data={eventData} />
    </div>
    </>
  );
};
export default EventFAQ;
