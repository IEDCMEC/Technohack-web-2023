import React from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import Faq from "../../Faq/Faq";
import eventData from "./EventFaqData";

const EventFAQ = () => {
  return (
    <>
    <div id='faq-link_for_navbar'></div>
    <div>
      <EventSectionHeading text='FAQ' />
      <Faq faqClass='event' data={eventData} />
    </div>
    </>
  );
};
export default EventFAQ;
