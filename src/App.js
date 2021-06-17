import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Web } from './Pages';
import { Navbar } from './components';
import login from './login'
import MessageApp from './MessageApp'
import video from './video'
import chenApp from './chenApp'
import miaoApp from './miaoApp';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-199715801-1');

function App(){
  
  const location=useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname+location.search)
    console.log(location.pathname + location.search)
  }, [location]);
  
  return (
    <div className="container">
      {/* Put Navbar Here */}
      <Navbar />
      <Route path="/login"  exact component={login} />
      <Route path="/" exact component={video} />
      <Route path="/MessageBoard" exact component={MessageApp} />
      <Route path="/Web" component={ Web } />
      <Route path="/Web/chenWeb" component={chenApp}></Route>
      <Route path="/Web/miaoWeb" component={miaoApp}></Route>
    </div>
  );
}

export default App;