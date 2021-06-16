import ReactGA from 'react-ga';
import {useEffect} from 'react';

export default function GA(){
    useEffect(() => {
        ReactGA.initialize('G-6DBMSD17YL');
        ReactGA.pageview('/');
    })
}
useEffect(() => {
    console.log(window.location.pathname)
  })
