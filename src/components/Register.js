import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/loginAction';





class Register extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    alert("njkk")

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
  }
  componentWillUnmount(){
    
  }

  render() {
    
    if(this.props.login.response)
    {
      console.log(this.props.login)
    var {username,age,address,success,message,token}=this.props.login.response.response;
    console.log(success)
    }
   
     
      
      if (success) {
        console.log(token)
      //  setCookie('token', this.props.response.login.response.token, 1);
      localStorage.setItem('token',token)
      console.log(this.props.login)
      
    }

    return (
      <div>
        <h3>Register Pages</h3>
       
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Sign-up</button>
          </div>
        </form>
  
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Register);