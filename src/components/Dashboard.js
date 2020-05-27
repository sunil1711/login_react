import React, { Component, PureComponent } from 'react';
import { Link, Redirect,Prompt ,Route,Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import  Header from './Header'
import { loginUserAction } from '../actions/loginAction';
import { Footer } from './Footer';
import Register from './Register';






export class Dashboard extends PureComponent {


    constructor(props){
        super(props)
        console.log(this.props)

      // changeUserName=this.changeUserName(bind)
     // this.changeUserName = this.changeUserName.bind(this);


    }

  
  
  render() {
  
    const {success}=this.props.login;
      


    return (

      <div>
                  <Prompt
            when={true}
            message={location => `Are you sure you want to go to ${location.pathname}`}
          />

        { success ? <Header/> :<Redirect to='login'/>}
        <h3>Dashboard Pages</h3>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/register'>Topics</Link></li>
          </ul>
          <hr/>
          <Switch> <Route path='/register' component={Register}/></Switch>
         
        <button onClick={()=>this.props.callDispatch({})}>chagv</button>
     
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);


const mapDispatchToProps=(dispatch)=>({

    callDispatch:(val)=>{
        dispatch(val)
    }
})
export default connect(mapStateToProps)(Dashboard);