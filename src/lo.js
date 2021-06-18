import React from 'react';
import { Button } from 'react-bootstrap';


const Lo=(props)=>{
    const{
      email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignup,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError,
    }=props;
  
    return(
      <section className="login">
        <div className="loginContainer">
          <label>Email</label>
          <input 
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)}}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input 
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)}}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount? (
              <>
                <Button onClick={handleLogin}>Sign In</Button>
                <p>
                  Don't have an account?
                  <span onClick={()=>setHasAccount(!hasAccount)}>Signup</span>
                </p>
              </>
              ):(
              <>
                <Button onClick={handleSignup}>Sign up</Button>
                <p>
                  Have an account? 
                  <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span>
                </p>
              </>
              )}
          </div>
        </div>
      </section>
    )
  }
  
    
  export default Lo;