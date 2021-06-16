import './miao.css';
import Usergithub from './miao.js';
import React, { Comoponent } from 'react';


function miaoApp() {
  return (
    <div className="miaoApp">
      <div>

        { Usergithub } 
        <Usergithub source="https://api.github.com/users/tillen1001"></Usergithub>
      </div>
    </div>
  );
}

export default miaoApp;
