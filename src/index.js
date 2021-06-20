import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
window.jquery=window.$=global.jquery;
require('bootstrap');
global.jQuery=require('jquery');



ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <App />
  </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);  

reportWebVitals();