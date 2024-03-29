import React, { Component } from 'react'
import '../Auth/SignIn.css'
class SignIn extends Component {
    state = {
    email: '',
    password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e) => {
        e.preventDefault(); 
        console.log(this.state); 
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h5> Sign In</h5>
            <p>

            </p>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} placeholder='Email Address'/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} placeholder='Password'
                />
            </div> 
            <div className='pwd'>
              <p>Forget Password?</p>
            </div>
            <div className="input-field">
                <button className="btn">Login</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn
