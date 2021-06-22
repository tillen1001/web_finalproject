import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import 'firebase/database';
import './message.css';
import 'bootstrap/dist/css/bootstrap.css';
import Fire from './FIREBASE/fire';

class Message extends Component {
    constructor(props){
        super(props);
        this.app=Fire
        this.database=this.app.database();
    }
    render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default Message;