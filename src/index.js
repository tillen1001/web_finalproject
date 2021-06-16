import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import './MessageBoard.css';
import App from './App';
import MessageApp from './MessageApp'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <App />,
      <MessageApp/>,
     
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);  

reportWebVitals();