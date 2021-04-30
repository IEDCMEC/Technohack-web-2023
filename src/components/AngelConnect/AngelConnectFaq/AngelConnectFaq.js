import { Component, useState } from "react";
import './AngelConnectFaq.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function AngelConnectFaq () {
  const [collapsedIds_two, setCollapsedIds_two] = useState([]);

        return (
            <div className="angel-connect-faq" id="angel-connect-faq">
                      <div className="angel-connect-faq-heading">
          <h1>FAQs</h1>
        </div>
        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          onChange={(ids) => setCollapsedIds_two(ids)}
        >
          {
            <AccordionItem key={20} uuid={20} className="angel-connect-faq-container_two">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="angel-connect-question-wrapper_two">
                    <div style={{ marginRight: "10px" }}>{1}.</div>
                    <div style={{ flex: 1 }}>{"What are the rules?"}</div>
                    <div style={{ marginLeft: "10px" }}>
                      {collapsedIds_two.includes(20) ? "-" : "+"}
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="angel-connect-faq-answer_two">- Your project should be started from scratch and worked on only during the given 3 days,
                and you should only include outside resources that are freely
              licensed and accessible to all participants equally.</p>
                <p className="angel-connect-faq-answer_two">- Remember to maintain a positive and respectful attitude toward
              your fellow hackers throughout the event. </p>
                <p className="angel-connect-faq-answer_two">- Any decision made by the judges will be final.</p>
              </AccordionItemPanel>
            </AccordionItem>
          }
        </Accordion>
        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          onChange={(ids) => setCollapsedIds_two(ids)}
        >
          {
            <AccordionItem key={21} uuid={21} className="angel-connect-faq-container_two">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="angel-connect-question-wrapper_two">
                    <div style={{ marginRight: "10px" }}>{2}.</div>
                    <div style={{ flex: 1 }}>{"What are the perks of participating in TechnoHack?"}</div>
                    <div style={{ marginLeft: "10px" }}>
                      {collapsedIds_two.includes(21) ? "-" : "+"}
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="angel-connect-faq-answer_two">- The top 50 teams will get 1000 AWS credits - 20 credits per team </p>
                <p className="angel-connect-faq-answer_two">- Cash Prize of Rs.10,000 for the best hack built on Ethereum or Rs.15,000 for the best hack built on Ethereum + Polygon, </p>
                <p className="angel-connect-faq-answer_two">- Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</p>
                <p className="angel-connect-faq-answer_two">- Rs.15,000 as cash prize for best Dapp built on Portis</p>
                <p className="angel-connect-faq-answer_two">- Rs.20,000 for best Dapp built on Tezos</p>
                <p className="angel-connect-faq-answer_two">- Continuity Grant opportunity for exceptional builders</p>
                <p className="angel-connect-faq-answer_two">- Rs1.20,000 for best Dapp built on Celo</p>
              </AccordionItemPanel>
            </AccordionItem>
          }
        </Accordion>
                <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          onChange={(ids) => setCollapsedIds_two(ids)}
        >
          {
            <AccordionItem key={21} uuid={21} className="angel-connect-faq-container_two">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="angel-connect-question-wrapper_two">
                    <div style={{ marginRight: "10px" }}>{2}.</div>
                    <div style={{ flex: 1 }}>{"What are the perks of participating in TechnoHack?"}</div>
                    <div style={{ marginLeft: "10px" }}>
                      {collapsedIds_two.includes(21) ? "-" : "+"}
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="angel-connect-faq-answer_two">- The top 50 teams will get 1000 AWS credits - 20 credits per team </p>
                <p className="angel-connect-faq-answer_two">- Cash Prize of Rs.10,000 for the best hack built on Ethereum or Rs.15,000 for the best hack built on Ethereum + Polygon, </p>
                <p className="angel-connect-faq-answer_two">- Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</p>
                <p className="angel-connect-faq-answer_two">- Rs.15,000 as cash prize for best Dapp built on Portis</p>
                <p className="angel-connect-faq-answer_two">- Rs.20,000 for best Dapp built on Tezos</p>
                <p className="angel-connect-faq-answer_two">- Continuity Grant opportunity for exceptional builders</p>
                <p className="angel-connect-faq-answer_two">- Rs1.20,000 for best Dapp built on Celo</p>
              </AccordionItemPanel>
            </AccordionItem>
          }
        </Accordion>
      </div>
          );
}