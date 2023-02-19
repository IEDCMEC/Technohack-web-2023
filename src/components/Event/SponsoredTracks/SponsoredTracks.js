import React from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import "./SponsoredTracks.css";
import SPCards from "../SPCards/SPCards";
import lyminal from "../../../assets/lyminal.png";
import foss from "../../../assets/foss.png";
import { Element } from "react-scroll";
import cyber from "../../../assets/cyber.png";
import TracksModal from "../TracksModal/TracksModal";
import { tracksData } from "../../../data/tracksData";

export default function SponsoredTracks() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <TracksModal
        open={open}
        handleClose={handleClose}
        data={tracksData[index]}
      />
      <Element name="tracks" />
      <EventSectionHeading text="Hackathon Tracks" />
      <div class="tracks">
        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Cyber Security</h6>
            <h6 class="secondary-text">Rs. 30,000</h6>
          </div>
          <button
            class=""
            onClick={() => {
              setIndex(0);
              handleOpen();
            }}
          >
            Read More
          </button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Health Tech</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button
            class=""
            onClick={() => {
              setIndex(1);
              handleOpen();
            }}
          >
            Read More
          </button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Environment</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button
            class=""
            onClick={() => {
              setIndex(2);
              handleOpen();
            }}
          >
            Read More
          </button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Open Innovation</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button
            class=""
            onClick={() => {
              setIndex(3);
              handleOpen();
            }}
          >
            Read More
          </button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Anti-Drug/MSME</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button
            class=""
            onClick={() => {
              setIndex(4);
              handleOpen();
            }}
          >
            Read More
          </button>
        </div>
      </div>
      {/* <Element name="tracks" /> */}
      {/* <div className='Cards'>
            <SPCards height='60px' width='140px' Tname="Cyber Security" Pmoney="Rs 30,000" Simage={lyminal}/>
            <SPCards height='60px' width='140px' Tname="Open Innovation" Pmoney="Rs 25,000" Simage={foss}/>
            <SPCards Tname="Health Tech" Pmoney="TBD"/>
            <SPCards Tname="Environment Track" Pmoney="TBD"/>
        </div> */}
    </div>
  );
}
