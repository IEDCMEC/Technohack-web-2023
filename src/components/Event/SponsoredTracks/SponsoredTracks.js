import React from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading';
import './SponsoredTracks.css';
import SPCards from '../SPCards/SPCards';
import lyminal from '../../../assets/lyminal.png';
import foss from '../../../assets/foss.png';
export default function SponsoredTracks() {
  return (
    <div>
        <EventSectionHeading text="Hackathon Tracks" />
        <div className='Cards'>
            <SPCards height='60px' width='140px' Tname="Cyber Security" Pmoney="Rs 30,000" Simage={lyminal}/>
            <SPCards height='60px' width='140px' Tname="Open Innovation" Pmoney="Rs 25,000" Simage={foss}/>
            <SPCards Tname="Health Tech" Pmoney="TBD"/>
            <SPCards Tname="Environment Track" Pmoney="TBD"/>
        </div>
    </div>
  )
}
