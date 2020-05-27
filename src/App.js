import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Login  from './components/login';
import { connect} from 'react-redux'
import { Store } from 'redux';
import { Provider } from 'react-redux';


import {redux}  from 'react-redux';
import  configureStore from  './store/store';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import  Header from  './components/Header';
import  {Footer}  from  './components/Footer'
import  LoginPage   from './components/login';
import Dashboard from './components/Dashboard'
import {BrowserRouter,Route,Switch,withRouter} from 'react-router-dom';
import Register from './components/Register';


//const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var token=localStorage.getItem('token')

function App(props) {
  console.log(props)
  return (

    <BrowserRouter>
   

  
      <Switch>
     
   
        <Route path='/' exact={true} component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/dashboard' component={Dashboard} />
     
        <Route path='/users' component={Dashboard} />

        <Route path='/register' component={Register}/>
      </Switch>
  
  </BrowserRouter>

  
   
  );
}

export default (App);
