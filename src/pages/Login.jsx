import React, { Component } from 'react';
import '../pages/login.css'
import axios from 'axios'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            NAME: '',
        }
        this.changeName=this.changeName.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeName(event){
        this.setState({
            NAME:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered = {
            NAME: this.state.NAME
        }
        axios.post('http://localhost:4000/app/entername', registered)
            .then(res => console.log(res.data))
        window.location = '/home'
        
        // this.setState({
        //     NAME:''
        // })
    }
    render() {
        return(
            
            <div>
                <div className='login-container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text' 
                            placeholder='Enter Name'
                            onChange={this.changeName}
                            value={this.state.NAME}
                            className='name-entry'
                            />
                            <input type='submit' className='submit-btn' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Login