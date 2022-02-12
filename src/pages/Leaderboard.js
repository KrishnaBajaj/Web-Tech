import React from 'react'
import axios from 'axios'

// export default function Leaderboard() {
//   return (
//     <React.Fragment>
//         <mainbody>
//     <div className="container">
//         <video autoPlay loop muted>
//             <source src="assests/videos/stars.mp4" type="video/mp4"/>
//         </video>
//     </div>
//     <div className="quiz-container" id="quiz">
//         <div id="hud">
//             <h1 id="question" style={{color:'purple', paddingLeft:'270px',paddingBottom:'10px',paddingTop:'10px'}}>Leaderboard</h1>
//     </div>
//     </div>
// </mainbody>
//     </React.Fragment>
//   )
// }

class LeaderBoard extends React.Component
{
    state={
        users: []
    }
    getusers = ()=> {
        axios.get('http://localhost:4000/app/users')
          .then((res)=> {
            const data = res.data
            // console.log(data)
            this.setState({users: data})
            console.log('Data has been received!')
          })
          .catch(() => {
            alert('Error retreiving data!')
          })
      }
    componentDidMount = ()=>{
        this.getusers()
    }
    displayusers = (users) => {
        if(!(users.length)) return (null);
    
        return users.map((user, index) => (
          <tr key = {index}>
            <td>{index+1}</td>
            <td>{user.NAME}</td>
            <td>{user.POINTS}</td>
          </tr>
    
        ))
    }
    render()
    {
        return (
            <React.Fragment>
                <leaderbody>
                <div className="container-leader">
                    <video autoPlay loop muted>
                        <source src="assests/videos/stars.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="quiz-leader-container" id="quiz">
                        <h1 id="question" style={{color:'purple', paddingLeft:'270px',paddingBottom:'10px',paddingTop:'10px'}}>Scores</h1>
                        <center>
                        <div>
                            <table cellspacing = "10%" cellpadding = "10%">
                                <tr>
                          <th style={{paddingRight:'50px'}}>SN</th><th style={{paddingRight:'100px'}}>Name</th><th style={{paddingRight:'100px'}}>Score</th>
                        </tr>
                        {this.displayusers(this.state.users)}
                    </table>
                </div>
                </center>
                </div>
                
            </leaderbody>
            </React.Fragment>
        )
    }
}
export default function Leaderboard() {
    return (
        <LeaderBoard/>
    )
}