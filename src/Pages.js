import React from 'react';
import { Switch, Route } from 'react-router-dom';
/**
 * These are root pages
 */
const Home = () => { 
  return <h1 className="py-3">Home</h1>;
};

const MessageBoard = () => {
  return <h1 className="py-3">MessageBoard</h1>;
};

const Web = () => {
  return (
    <div>
      <h1>Our Webs</h1>
      <Switch>
        {/* The component will show here if the current URL matches the path */}
        <Route path="/Web/B0829031" component={B0829031} />
        <Route path="/Web/B0829042" component={B0829042} />
        
      </Switch>
    </div>
  );
};


/**
 * These are pages nested in Electronics
 */
const B0829031 = () => {
  return <h3>繆緹綸的網頁</h3>;
};

const B0829042 = () => {
  return<h3>陳星潔的網頁</h3>;
};


export { Home, MessageBoard, Web ,B0829042,B0829031};