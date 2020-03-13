import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Login  from './components/login';
import { connect} from 'react-redux'
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import {redux}  from 'react-redux';
import  configureStore from  './store/store';


const store = configureStore();


function App() {
  return (
    <Provider store={store}>
    <Switch>
    <Route path="/" components={Login}/>

    </Switch>
    </Provider>
  );
}

export default App;
