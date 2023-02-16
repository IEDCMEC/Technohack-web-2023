import React from "react";
import EventSectionHeading from "../EventSectionHeading/EventSectionHeading";
import "./SponsoredTracks.css";
import SPCards from "../SPCards/SPCards";
import lyminal from "../../../assets/lyminal.png";
import foss from "../../../assets/foss.png";
import { Element } from "react-scroll";
import cyber from "../../../assets/cyber.png";

export default function SponsoredTracks() {
  return (
    <div>
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
          <button class="">Read More</button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Health Tech</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button class="">Read More</button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Environment</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button class="">Read More</button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Open Innovation</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button class="">Read More</button>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={cyber} />
          </div>
          <div class="desc">
            <h6 class="primary-text">Anti-Drug/MSME</h6>
            <h6 class="secondary-text">TBD</h6>
          </div>
          <button class="">Read More</button>
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
