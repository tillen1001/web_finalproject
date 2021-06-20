import React, { Component } from 'react';
import './video.css'

class video extends Component {
  render() {
    return (
      <div className="player">
        <iframe width="1295px" 
        height="740px" 
        src="https://www.youtube.com/embed/v7bnOxV4jAc" 
        title="YouTube video player" 
        allowfullscreen
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default video;