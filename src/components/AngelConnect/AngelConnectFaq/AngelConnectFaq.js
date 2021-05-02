import { Component, useState } from "react";
import "./AngelConnectFaq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function AngelConnectFaq() {
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
          <AccordionItem
            key={20}
            uuid={20}
            className="angel-connect-faq-container_two"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="angel-connect-question-wrapper_two">
                  <div style={{ marginRight: "10px" }}>{1}.</div>
                  <div style={{ flex: 1 }}>
                    {"What is the objective of this event?"}
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds_two.includes(20) ? "-" : "+"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="angel-connect-faq-answer_two">
                The main objective of AngelConnect is to provide a platform for
                amazing student entrepreneurs and startups. Even if there is no
                financial transaction involved, we will strive to fulfill this
                objective!
              </p>
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
          <AccordionItem
            key={21}
            uuid={21}
            className="angel-connect-faq-container_two"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="angel-connect-question-wrapper_two">
                  <div style={{ marginRight: "10px" }}>{2}.</div>
                  <div style={{ flex: 1 }}>
                    {
                      "What's the guarantee that the panelists will financially back the ventures?"
                    }
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds_two.includes(21) ? "-" : "+"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="angel-connect-faq-answer_two">
                Absolutely none. This is more of an entrepreneur – Angel
                Investor connection event. Panelists may choose to back none,
                any, or all ventures.
              </p>
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
          <AccordionItem
            key={22}
            uuid={22}
            className="angel-connect-faq-container_two"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="angel-connect-question-wrapper_two">
                  <div style={{ marginRight: "10px" }}>{3}.</div>
                  <div style={{ flex: 1 }}>
                    {"Are there any benefits of attending AngelConnect?"}
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds_two.includes(22) ? "-" : "+"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="angel-connect-faq-answer_two">An insane amount!</p>
              <p className="angel-connect-faq-answer_two">
                - You can connect and network with Angel Investors, who are
                experts in the field of entrepreneurship.
              </p>
              <p className="angel-connect-faq-answer_two">
                - Your project or startup can get funding or investments from
                them! This could be your chance to make your ideas a true
                success!
              </p>
              <p className="angel-connect-faq-answer_two">
                - You can network with other entrepreneurs and get acquainted
                with the entrepreneurial culture around you.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        }
        {
          <AccordionItem
            key={23}
            uuid={23}
            className="angel-connect-faq-container_two"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="angel-connect-question-wrapper_two">
                  <div style={{ marginRight: "10px" }}>{4}.</div>
                  <div style={{ flex: 1 }}>
                    {"Can we attend AngelConnect for free?"}
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds_two.includes(23) ? "-" : "+"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="angel-connect-faq-answer_two">
                Yes!! But the event is only for teams that are currently under
                pre-incubation having functioning MVP’s and for startups.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        }
        {
          <AccordionItem
            key={24}
            uuid={24}
            className="angel-connect-faq-container_two"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="angel-connect-question-wrapper_two">
                  <div style={{ marginRight: "10px" }}>{5}.</div>
                  <div style={{ flex: 1 }}>
                    {" What if we don't get funding?"}
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds_two.includes(24) ? "-" : "+"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="angel-connect-faq-answer_two">
                You can network and connect with Angel Investors and other
                entrepreneurs like you. Not only this, you will be able to see
                where all your projects need improvement and work on making them
                even better!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        }
                {
          <AccordionItem
            key={25}
            uuid={25}
            className="angel-connect-faq-container_two"
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="angel-connect-question-wrapper_two">
                  <div style={{ marginRight: "10px" }}>{6}.</div>
                  <div style={{ flex: 1 }}>
                    {"Who should I contact if I have any doubts?"}
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {collapsedIds_two.includes(25) ? "-" : "+"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="angel-connect-faq-answer_two">
              Feel free to contact your event managers:
              Razeen (+91 90743 09203)
              or
              Tobin (+91 90744 88627)
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        }
      </Accordion>
    </div>
  );
}
