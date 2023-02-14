import React from 'react';
import EventSectionHeading from '../EventSectionHeading/EventSectionHeading';
import './SponsoredTracks.css';
import SPCards from '../SPCards/SPCards';
import lyminal from '../../../assets/lyminal.svg';
import foss from '../../../assets/foss.svg';
export default function SponsoredTracks() {
  return (
    <div>
        <EventSectionHeading text="Sponsored Tracks" />
        <div className='Cards'>
            <SPCards Tname="Cyber Security" Pmoney="Rs 30,000" Simage={lyminal}/>
            <SPCards Tname="Open Innovation" Pmoney="Rs 25,000" Simage={foss}/>
            <SPCards Tname="Health Tech" Pmoney="TBD"/>
            <SPCards Tname="Environment Track" Pmoney="TBD"/>
        </div>
    </div>
  )
}
