import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet"

class GamePage extends React.Component{

    render(){
        return(
        <div>
    <main-body>
        <div className="container">
            <video autoPlay loop muted>
            <source src="assests/videos/stars.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="quiz-container" id="quiz">
            <div id="hud">
                    <h1 id="question" style={{paddingBottom:'20px',paddingTop:'20px'}}>Question Text</h1>  
                    <div className="hud-item" style={{paddingRight:'40px'}}>
                        <p className="hud-prefix" >
                            Score
                        </p>
                        <p className="hud-main-text" id="score" style={{paddingRight:'15px'}}>
                            0
                        </p>
                    </div>          
            </div>
            
            
            <div className="choice-container">
                <p className="choice-prefix" style={{paddingTop:'22px'}}>A:</p>
                <p className="choice-text" data-number="1" style={{paddingTop:'22px' ,paddingRight:'500px'}}>Choice 1</p>
            </div>
            <div className="choice-container">
                <p className="choice-prefix" style={{paddingTop:'22px'}}>B:</p>
                <p className="choice-text" data-number="2" style={{paddingTop:'22px' ,paddingRight:'500px'}}>Choice 2</p>
            </div>
            <div className="choice-container">
                <p className="choice-prefix" style={{paddingTop:'22px'}}>C:</p>
                <p className="choice-text" data-number="3" style={{paddingTop:'22px' ,paddingRight:'500px'}}>Choice 3</p>
            </div>
            <div className="choice-container">
                <p className="choice-prefix" style={{paddingTop:'22px'}}>D:</p>
                <p className="choice-text" data-number="4" style={{paddingTop:'22px' ,paddingRight:'500px'}}>Choice 4</p>
            </div>
        </div>
        <Helmet>
            <script src="assests/js/game.js"></script>
        </Helmet>
    </main-body>
        
    </div>
        )
    }
}
export default function Gamepage() {

  return (
      <GamePage />
  )
}
