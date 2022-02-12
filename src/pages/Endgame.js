import React from 'react'
import { Link } from 'react-router-dom'
const axios = require('axios')


class EndGame extends React.Component{
  

  state={
    s_user: {}
  }
  getusers = ()=> {
    axios.get('http://localhost:4000/app/userselect')
      .then((res)=> {
        const data = res.data
        // console.log(scoreText)
        console.log(data)
        this.setState({s_user: data})
        console.log('Data has been received!')
      })
      .catch(() => {
        alert('Error retreiving data!')
      })
  }
componentDidMount = ()=>{
    this.getusers()
  }
  render(){
    return (
      <React.Fragment>
    <endbody>
        <div className="container-end">
        <video autoPlay loop muted>
            <source src="assests/videos/stars.mp4" type="video/mp4"/>
        </video>
    </div>
    <div className="quiz-container-end" id="quiz" style={{paddingRight:'110px'}}>
        <h1 id="question" style={{paddingBottom:'20px', paddingLeft:'130px'}}>Thank you for playing!</h1>
        <Link to ="/highscore">
            <button className="btn-outline3" >Click here for highscores!<i class="fas fa-crown"></i></button>
        </Link>
        </div>   
    </endbody>
    </React.Fragment>
    )
  }
}


export default function Endgame() {
  return (
    <EndGame />
  )
}



// export default function Endgame() {
//   return (
//     <React.Fragment>
//     <endbody>
//         <div className="container-end">
//         <video autoPlay loop muted>
//             <source src="assests/videos/stars.mp4" type="video/mp4"/>
//         </video>
//     </div>
//     <div className="quiz-container-end" id="quiz" style={{paddingRight:'110px'}}>
//         <h1 id="question" style={{paddingBottom:'20px', paddingLeft:'130px'}}>Thank you for playing!</h1>
//         <Link to ="/highscore">
//             <button className="btn-outline3" >Click here for highscores!<i class="fas fa-crown"></i></button>
//         </Link>
//         </div>   
//     </endbody>
//     </React.Fragment>
//   )
// }
