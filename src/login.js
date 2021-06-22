import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import Fire from './FIREBASE/fire'

export const Login=()=>{
  const [currentUser,setCurrentUser]=useState()
  const provider=new firebase.auth.GoogleAuthProvider()

  useEffect(()=>{
    Fire.auth().onAuthStateChanged((user)=>{
      setCurrentUser(user)
    })
  }, [])

  const authWithGoogle=()=>{
    firebase.auth().signInWithPopup(provider)
  }

  return(
    <>
    {currentUser && <p>{currentUser.displayName}</p>}
    <button onClick={authWithGoogle}>Login</button>
    </>
  );
}

export default Login;