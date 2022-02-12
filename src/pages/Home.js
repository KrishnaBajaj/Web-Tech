import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
        
    <div className="containerHome">
        <video autoPlay loop muted>
            <source src="assests/videos/bgvideo.mp4" type="video/mp4"/>
        </video>
    </div>
    <div className="text-box">
        ARE YOU READY?
    </div>
    <div className="wrap">
        <div className="item">
            <Link to="/gamepage">
                <button className="btn-outline" >Let's Play!</button>
            </Link>
        </div>
        <div className="item">
            <Link to="/LOL">
                <button className="btn-lol">MORE POINTS!!</button> 
            </Link>
        </div>
        <Link to="/highscore">
        <div className="item">
                <button className="btn-outline2" >High Score<i className="fas fa-crown"></i></button>
        </div>
        </Link>
    </div>
    </React.Fragment>
  )
}
