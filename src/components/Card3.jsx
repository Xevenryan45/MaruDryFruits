import React from 'react'
// import { Shield } from 'react-bootstrap-icons'

export default function Card3({logo, heading, more}) {
  return (
    <div className='reasonCard'>
        <div className="reasonContent">
            <span className="reasonLogo">{logo}</span>
            <h2>{heading}</h2>
            <p>{more}</p>
        </div>
    </div>
  )
}
