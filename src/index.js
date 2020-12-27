//import BrowserRouter from 'react'; //TA says this isn't needed
import React from 'react'; //is this line even needed?
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; //not needed
//import React, {Component} from 'react';//slides did this bc they put everything in one file. we will not do this
import {BrowserRouter} from 'react-router-dom'; //switches btw routes safely like an http request

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
