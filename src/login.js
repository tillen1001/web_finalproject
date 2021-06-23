import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import Fire from './FIREBASE/fire'
import './login.css'

export const Login=()=>{
  <div
      style={{
        backgroundColor: '#D1DFE8',
        width: '100px',
        height: '100px',
      }}
    />
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

  // const logout=()=>{
  //   firebase.auth().signOut(provider)
  // }
  
  return(
    <>
    <div>
      <div className="title">
        <h1>使用者個人資料</h1>
      </div>
      {currentUser && <>
      <div className="photo">
        <img src={currentUser.photoURL} alt="avatar" height="200" width="200" />
      </div>
      <div className="name">
        <p>姓名：{currentUser.displayName}</p>
      </div>
      <div className="email">
        <p>信箱：{currentUser.email}</p>
      </div>
      
      </>}
      <div className="button">
        <div className="login">
          <button onClick={authWithGoogle}>Login</button>
        </div>
        
      </div>
      
    </div>
    </>
  );
}

export default Login;