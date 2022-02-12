import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Gamepage from './Gamepage'
import Rickroll from './Rickroll'
import Leaderboard from './Leaderboard'
import Endgame from './Endgame'
import Login from './Login'


export default function RouterPage() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element = {<Login />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/gamepage" element={<Gamepage/>}/>
            <Route path="/LOL" element={<Rickroll/>}/>
            <Route path="/highscore" element={<Leaderboard/>}/>
            <Route path="/endgame" element={<Endgame/>}/>
          </Routes>
      </Router>
    </div>
  )
}
