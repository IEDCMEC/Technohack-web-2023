import "./Modal.css";
import close from '../../../assets/close.png'
const modalData = {
  ds: {
    name: "Lata Hariharan",
    mentor: "Co-Founder (Svast Inc)",
    desc: "Hailing from Kerala, Lata Hariharan is presently the co-founder and President of SVAST Inc.,  a Healthcare Technology Platform company with a mission to bring healthcare to the global underserved, and the Founder/CEO of Resource Leaders. Resource Leaders is a boutique consulting firm providing business insights on industry trends and niche market research on companies. Very passionate about helping women, Lata has started multiple groups, locally and virtually, where the focus is to mentor and create an open atmosphere for dialog. She has also worked in several technological roles in companies such as TCS, Wipro and MCI (now Verizon).",
    link: ""
  },
  pm: {
    name: "Anas Rahman Junaid",
    mentor: "Hurun India MD",
    desc: "An immensely successful entrepreneur and a visionary like no other, Anas Rahman Junaid is the co-founder of Callapina Capital and is an angel investor to companies like Crosspay and Zoko. From an intern at Hurun Report Global to meeting up with Rupert Hoogewerf, Hu Run himself, to discuss the ecosystem of Indian entrepreneurship, he has transformed into the founder of the world's largest rich list provider, Hurun India. An X-Mecian of immense calibre and success, we are very proud and honoured to have him as a speaker at Technopreneur 2021. ",
    link: ""
  },
  as: {
    name: "Sujith Nair",
    mentor: "CEO & Co-Founder, Beckn",
    desc: "Sujith Nair is a pioneer in reimagining digital commerce with a focus on inclusiveness and scale. He is the CEO & Co-Founder of Beckn, an open shared mobility foundation. His distinguished career includes being the Chief Business Officer at Mobike India, and a member of the Board Of Directors at Paycraft Solutions, as well as the Director at EY. He designed the technology and business model for Asia's first open loop payment system for mass transit ticketing at the Kochi metro, that formed the genesis for India's national common mobility card specifications. As an exceptional individual with 15+ years of management consulting experience with expertise in the areas of urban mobility, internet business, digital payments and technology-led transformations in the public sector, we are very proud to have Sujith as a speaker at Technopreneur 2021. ",
    link: ""

  },
  iot: {
    name: "Rajesh Nair",
    mentor: "Professor, Founder of EnCube Labs",
    desc: "An alumni of prestigious institutions such as MIT and IISc, Rajesh Nair is an exceptional entrepreneur with the desire to bring a change with his relentless hunger for knowledge. He started four companies in Massachusetts and New Hampshire, three of them in hardware manufacturing. He is the founder of EnCube Labs, TechTop India and Degree Controls, and the holder of 13 US patents. He received the Entrepreneur of the Year award from New Hampshire High Tech Council in 2002. He has spoken at the UN General Assembly (2018), MIT Systems Thinking Conference (2016), and TEDxBeaconStreet (2014). Currently, he holds a Professor of Practice position at Asia School of Business, KL. He was also a Visiting Scholar at MIT. We are very proud to have such a distinguished personality such as him as one of the speakers at Technopreneur 2021.",
    link: ""
  }

}
export default function Modal(props) {
  return (
    <div class="modal-overlay" id="modal">
      <div className="modal-container">
        <div className="modal-header">
          <div style={{ width: "30px" }} />
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '26px' }}>{modalData[props.track].name}</h2>
            <h2 style={{ fontSize: '20px', color: '#292929', fontWeight: 'normal' }}>{modalData[props.track].mentor}</h2>
          </div>
          <div onClick={() => props.close()}>
            <img src={close} width="30px" />
          </div>
        </div>

        <div class="modal-content">
          {modalData[props.track].desc}
          {/* <div to={modalData[props.track].link} className="modal-button">
          Register
        </div> */}
        </div>

      </div>
    </div>
  );
}
