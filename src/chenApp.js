import './chen.css';
import Usergithub from './chen.js';
import React, { Comoponent } from 'react';


function chenApp() {
  return (
    <div className="chenApp">
      <div>

        { Usergithub } 
        <Usergithub source="https://api.github.com/users/CHEN-HSING-CHIEH"></Usergithub>
      </div>
    </div>
  );
}

export default chenApp;
