import React from 'react'
import './SPCards.css'
export default function SPCards(props) {
  return (
    <div className='card'>
       <div className='Tname'>
            <div style={{maxWidth: '200px'}}><h1>{props.Tname}</h1> </div>
            <div><img className='image' alt='' src={props.Simage}></img></div>
        </div>
       <div className='Pmoney'><h3>{props.Pmoney}</h3></div>
    </div>
  )
}
