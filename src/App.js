import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Login  from './components/login';
import { connect} from 'react-redux'
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {redux}  from 'react-redux';
import  configureStore from  './store/store';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import  {Header}  from  './components/Header'
import { Footer } from './components/Footer';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var token=localStorage.getItem('token')

function App() {
  return (
    <Provider store={store}>
     {token && <Header/>}
  
     <BrowserRouter>
   <Switch>
    <Route path="/" ><Login/></Route>

    </Switch>
   </BrowserRouter>
   {token && <Footer/>}
  
   
    </Provider>
  );
}

export default App;
