import React, { useState,useContext } from "react";
import "./Login.css";
import Signin from "../Signin/Signin";
import {  Link } from "react-router-dom";
import {GlobalDispatch, GlobalState} from '../../App'

const Login = (props)=> {
   
  const {state} = useContext(GlobalState)
  const {dispatch} = useContext(GlobalDispatch)

  const handleLogin = (event)=>{
    event.preventDefault()
    dispatch({type:'CHANGE_ISLOGIN',payload:true})
    props.history.push('/dashboard')

  }

  return (
    <div className="login-page">
      <div className="leftsection">
        <form className="login-form" onSubmit={handleLogin}>
          <img
            className="logo"
            alt="logo"
            src={require("../../../public/assets/Avatar.png")}
          />
          <div className="title">Login to FOLK Devs</div>

          <div className="form-group">
            <label className="text-label">Email</label>
            <input className="text-input" type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="text-label">Password</label>
            <input className="text-input" type="text" placeholder="Password" />
          </div>
          <div className="form-group">
            <span className="forgot-password">Forgot password?</span>
          </div>
          <div className="subtext">
            Don't have an account?
            <Link className="signup" to="/signup">
              {" "}
              Sign up for free
            </Link>
          </div>

          <button type="submit"
            className="button login-button"
          >
            Login
          </button>
          {/* <button className="signup-button">Sign up</button> */}
        </form>
      </div>
      <div className="rightsection">
        <div className="phone-bezel">
          <div className="bottom-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;