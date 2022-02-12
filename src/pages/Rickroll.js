import React from 'react'

export default function Rickroll() {
  return (
    <React.Fragment>
    <mainbody>
    <div className="container">
        <video autoPlay loop muted>
            <source src="assests/videos/stars.mp4" type="video/mp4"/>
        </video>
    </div>
    <div className="rickbox">
        <video autoPlay loop>
            <source src="assests/videos/rickroll.mp4" type="video/mp4"/>
        </video>
    </div>
    </mainbody>
    
    </React.Fragment>
  )
}
