import React from 'react'


export default function Card1({pic, driedName, text}) {
  return (
    <div>
        <div className="card-container">
            <div className="card-wrapper">
                <div className="img-card">
                    <img src={pic}/>
                </div>
                
                <div className="text-card">
                    <h3>{driedName}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
