import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/loginAction';





class LoginPage extends Component {
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
    
    if(this.props.login)
    {
      console.log(this.props.login)
    var {username,age,address,success,message,token}=this.props.login;
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
        <h3>Login Pages</h3>
        {!success ? <div>{message}</div> : <Redirect to='dashboard' />}
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
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to='register'>Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(LoginPage);