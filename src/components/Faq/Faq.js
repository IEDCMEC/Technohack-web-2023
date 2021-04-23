import React, { useState } from "react";
import data from "./FaqData";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Faq.css";

const Faq = () => {
  const [collapsed, setCollapsed] = useState([]);
  return (
    <div className="faq">
      <div className="section-heading">FAQs</div>
      <Accordion
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
        onChange={(ids) => setCollapsed(ids)}
      >
        {data.map(({ id, question, ans }, index) => (
          <AccordionItem key={id} uuid={id} className="faq-container">
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="question-wrapper">
                  <div style={{ marginRight: "10px", display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>{index + 1}.</div>
                    <p>{question}</p>
                  </div>
                  <div>{collapsed.includes(id) ? "-" : "+"}</div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="faq-answer">{ans}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
