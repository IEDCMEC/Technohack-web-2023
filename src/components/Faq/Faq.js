import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import "./Faq.css";

const Faq = ({ data, faqClass }) => {
  const [collapsedIds, setCollapsedIds] = useState([]);

  return (
    <div id="faq" className={`faq ${faqClass}`}>
      <BackgroundAnimation />
      {/* show title only for home page */}
      {!faqClass && <div className="faq-title">FAQ</div>}

      <Accordion
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
        onChange={(ids) => setCollapsedIds(ids)}
      >
        {data.map(({ id, question, ans }, index) => (
          <AccordionItem key={id} uuid={id} className="faq-container">
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="question-wrapper">
                  <div style={{ marginRight: "10px" }}>{index + 1}.</div>
                  <div style={{ flex: 1 }}>{question}</div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds.includes(id) ? "-" : "+"}
                  </div>
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
