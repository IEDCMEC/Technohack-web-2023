// use array to define multi-line answers
const eventData = [
  {
    id: 1,
    question: "What are the rules?",
    ans: [
      "- Your project should be started from scratch and worked on only during the given days, and you should only include outside resources that are freely licensed and accessible to all participants equally.",
      "- Remember to maintain a positive and respectful attitude toward your fellow hackers throughout the event.",
      "- Any decision made by the judges will be final.",
      <a
        href="http://technohack.technopreneur.co.in/code-of-conduct"
        target="_blank"
        rel="noreferrer"
      >
        - Link to <span className="coc">Code of Conduct</span>
      </a>,
      <a
        href="https://technohack.notion.site/FOSS-Project-Guidelines-93e5f2dcc4314caf855565dae30a3bf3"
        target="_blank"
        rel="noreferrer"
      >
        - Your project should follow these{" "}
        <span className="coc">FOSS guidelines</span>
      </a>,
    ],
  },
  {
    id: 2,
    question: "How to register for TechnoHack?",
    ans: [
      <a
        href="https://technohack.technopreneur.co.in/register"
        target="_blank"
        rel="noreferrer"
      >
        - Fill the registration form <span className="coc">here</span>
      </a>,
      "- Only the team leader needs to fill for the whole team",
      "- If you want to make edits, feel free to fill the form once more. Only the latest submission will be considered",
      // "- Cash Prize of Rs.10,000 for the best hack built on Ethereum or Rs.15,000 for the best hack built on Ethereum + Polygon, ",
      // "- Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners",
      // "- Rs.15,000 as cash prize for best Dapp built on Portis",
      // "- Rs.20,000 for best Dapp built on Tezos",
      // "- Continuity Grant opportunity for exceptional builders",
      // "- Rs.20,000 for best Dapp built on Celo",
    ],
  },
  {
    id: 3,
    question: "What are the perks of participating in TechnoHack?",
    ans: [
      "- To be Announced... ",
      // "- Cash Prize of Rs.10,000 for the best hack built on Ethereum or Rs.15,000 for the best hack built on Ethereum + Polygon, ",
      // "- Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners",
      // "- Rs.15,000 as cash prize for best Dapp built on Portis",
      // "- Rs.20,000 for best Dapp built on Tezos",
      // "- Continuity Grant opportunity for exceptional builders",
      // "- Rs.20,000 for best Dapp built on Celo",
    ],
  },
  {
    id: 4,
    question: "Who can attend?",
    ans: "The event is open to both college students and working professionals.",
  },
  {
    id: 5,
    question: "What is the team size?",
    ans: "The allowed team size ranges from a minimum of 1 member to a maximum of 4 members.",
  },
  {
    id: 6,
    question: "How much does it cost?",
    ans: "This event is completely free! We’ll also provide you with a plethora of resources and tools to hack with as well.",
  },
  {
    id: 7,
    question: "Who do I contact if I have any further doubts?",
    ans: (
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScEd1YTm_P5iXw8IA-21bJOcPaJc_gOZqb9bMwiQajE41uGHw/viewform?usp=sf_link"
        target={"_blank"}
        rel="noreferrer"
      >
        If you have any further questions or concerns, fill out{" "}
        <span className="coc">this form.</span> We'll be happy to assist you.
      </a>
    ),
  },
  {
    id: 8,
    question: "What is the venue of the hackathon?",
    ans: `Govt. Model Engineering College, Thrikkakara, Ernakulam, Cochin: 682021`,
  },
  {
    id: 9,
    question: "Can I participate without a computer science background?",
    ans: "Certainly! A computer science background is not a requirement for participation. Your creativity and innovation are not limited by technical skills, and you can always learn the necessary tools and technologies. The goal is to keep learning!",
  },
];

export default eventData;
