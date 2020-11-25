import React, { useState, useContext } from "react";
import "./Signin.css";
import { GlobalDispatch, GlobalState } from "../../App";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Signin(props) {
  const { dispatch } = useContext(GlobalDispatch);
  const [isReg, setIsReg] = useState(false);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [skills,setSkills] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setConfirmPassword] = useState('')
  

 

  const handleRegister = (event) => {
    event.preventDefault();
    const profile = {
      name: name,
      email: email,
      phone:phone,
      skills:skills,
      password:password,
      confirmpassword:confirmpassword
    }

    console.log(profile)
    setIsReg(true);
    axios
      .post("https://reqres.in/api/register/", profile)
      .then((res) => {
        console.log(res)
        dispatch({ type: "CHANGE_ISREG", payload: true });
        // setIsReg(true);
        console.log(isReg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isReg) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="signin-page">
        <div className="left-half">
          <div className="title">Signup</div>
          <form className="signin-form" onSubmit={handleRegister}>
            
            <div className="form-group">
              <label className="text-label">Email</label>
              <input
                className="text-input"
                onChange={(event)=>{setEmail(event.currentTarget.value)}}
                type="text"
                placeholder="Email"
               name="email"
              />
            </div>

            <div className="form-group">
              <label className="text-label">Phone</label>
              <input
                className="text-input"
                onChange={(event)=>{setPhone(event.currentTarget.value)}}
                type="number"
                placeholder="Phone"
               name="phone"
              />
            </div>

            <div className="form-group skills">
              <label className="text-label">Skills</label>
              <input
                className="text-input"
                type="text"
                placeholder="React,Node,MongoDB"
                onChange={(event)=>{setSkills(event.currentTarget.value)}}
              name="skills"
              />
            </div>

            <div className="form-group">
              <label className="text-label">Password</label>
              <input
                className="text-input"
                onChange={(event)=>{setPassword(event.currentTarget.value)}}
                type="text"
                placeholder="Password"
                name="password"
              />
            </div>

            <div className="form-group">
              <label className="text-label">Confirm Password</label>
              <input
                className="text-input"
                type="text"
                placeholder="Confirm Password"
                onChange={(event)=>{setConfirmPassword(event.currentTarget.value)}}
                name="confirmpassword"
              />
            </div>

            {/* <button className="login-button">Login</button> */}
            <button type="submit" className="button">
              Sign up
            </button>
          </form>
        </div>
        <div className="right-half">
          <img
            className="logo"
            alt="logo"
            src={require("../../../public/assets/Avatar.png")}
          />
        </div>
      </div>
    );
  }
}
