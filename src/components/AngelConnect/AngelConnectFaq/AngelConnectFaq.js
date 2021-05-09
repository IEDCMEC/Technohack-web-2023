import React from "react";
import Faq from "../../Faq/Faq";
import "./AngelConnectFaq.css";
import angelFaqData from "./angelFaqData";

const AngelConnectFaq = () => {
  return (
    <div className='angel-connect-faq' id='angel-connect-faq'>
      <div className='angel-connect-faq-heading'>
        <h1>FAQs</h1>
      </div>
      <Faq faqClass='event angelFaq' data={angelFaqData} />
    </div>
  );
};
export default AngelConnectFaq;
