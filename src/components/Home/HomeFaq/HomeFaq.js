import React from "react";
import Faq from "../../Faq/Faq";
import data from "./homeFaqData";
import "./HomeFaq.css";

const HomeFaq = () => {
  return (
    <div id='faq' className='home-faq'>
      <div className='faq-title'>FAQ</div>
      <Faq data={data} />
    </div>
  );
};

export default HomeFaq;
