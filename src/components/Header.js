import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/loginAction';





export class Header extends Component {


  onHandleLogin = (event) => {
    event.preventDefault();

    console.log("njkk",this.props.user)

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
    console.log(this.props.login)
  }
  componentWillUnmount(){
    
  }

  render() {
    console.log(this.props.login)
    if(this.props.login)
    {
      console.log(this.props.login)
    var {username,age,address,success,message,token}=this.props.login;
    console.log(success)
    }
   

    return (
      <div>
    <h3>Logged in user {username}</h3>

    <button style={{marginLeft:"180px"}}>Logout</button>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Header);