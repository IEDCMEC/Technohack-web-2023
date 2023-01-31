import React from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import "./EventTracks.css";
import foss from "../../../assets/foss.png";
import mlh from "../../../assets/mlh.png";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "5",
    fontFamily: "Montserrat",
    lineHeight: "24px",
    // padding: "30px",
    // marginRight: "20px",
    fontWeight: "500",
    color: "white",
    overflow: "hidden",
    backgroundColor: "#04364f",
    width: "70vw",
    height: "70vh",
    borderRadius: "60px",
  },
};

function EventTracks() {
  //   const [openModal, setOpenModal] = useState(false);

  //   let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="Track_Modal_Container">
          <div className="Track_Modal_Heading_Container">
            <div className="Track_Modal_Heading">
              <h2 style={{ color: "white", overflow: "hidden" }}>FOSS Track</h2>
            </div>
            <button className="Track_Modal_Close_Button" onClick={closeModal}>
              close
            </button>
          </div>
          <div className="Track_Modal_Content">
            <p
              className="Track_Modal_Para"
              style={{ color: "white", overflow: "hidden" }}
            >
              With the world facing an ever-growing number of complex problems,
              it's more important than ever to encourage innovation and think
              outside the box. The Open Innovation Track is your chance to
              showcase your ideas for cutting-edge apps and creative solutions
              to real-world problems. Whether you're a seasoned developer or
              just starting out, this track provides an opportunity to think big
              and make a difference.
            </p>
          </div>
          <div className="Track_Modal_Content">
            <p
              className="Track_Modal_Para"
              style={{ color: "white", overflow: "hidden" }}
            >
              Prizes :
            </p>
            <ul>
              <li>
                <p className="Track_Modal_Para">1st Prize : Rs. X</p>
              </li>
              <li>
                <p className="Track_Modal_Para">2nd Prize : Rs. X</p>
              </li>
            </ul>
          </div>
        </div>
      </Modal>

      <br />

      <div id="EventSectionHeadingID">
        <EventSectionHeading text="Sponsored Tracks" />

        <div class="container">
          <div class="card">
            <div class="box">
              <div class="content">
                <h2>01</h2>
                <h3>FOSS</h3>
                <p>
                  <img src={foss} alt='foss-img' className="image-foss"></img>
                </p>
                <h3>Rs. 10,000</h3>

                <button className="modal-btn" onClick={openModal}>
                  Read More
                </button>

                {/* {openModal && <Modal closeModal={setOpenModal} />} */}
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>02</h2>
                <h3>Health Care</h3>
                <p>
                  <img src={mlh} alt='mlh-img' className="image-mlh"></img>
                </p>
                <h3>Rs. 10,000</h3>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>03</h2>
                <h3>Cyber Security</h3>
                <p>
                  <img src={foss} alt='foss-img' className="image-foss"></img>
                </p>
                <h3>Rs. 10,000</h3>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>04</h2>
                <h3>Environment</h3>
                <p>
                  <img src={foss} alt='foss-img' className="image-foss"></img>
                </p>
                <h3>Rs. 10,000</h3>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>05</h2>
                <h3>Social</h3>
                <p>
                  <img src={foss} alt='foss-img' className="image-foss"></img>
                </p>
                <h3>Rs. 10,000</h3>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <div class="content">
                <h2>06</h2>
                <h3>TBD</h3>
                <p>
                  <img src={mlh} alt='mlh-img' className="image-mlh"></img>
                </p>
                <h3>Rs. 10,000</h3>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventTracks;
