import React, { Component,useState } from 'react'
import axios from "axios";
import { TextField } from '@mui/material';
import "./UserLogin.css" ;
import { Link, useNavigate } from "react-router-dom";
export default function UserLogin() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:""
  });
  const [Id, set] = useState({
    id:"1",
    loginid:""
  });
  const { email,password } = user;
  const { id,loginid } = Id;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const r=await axios.post("http://localhost:8080/login", user);
    const idx= await axios.post("http://localhost:8080/login1",user);
    console.log(idx.data)
    Id.loginid=idx.data;
    if(r.data==="Login success")
    {
      await axios.post("http://localhost:8080/post",Id);
      navigate("/Home");
    }
  };
  return (
    <div className='Main'><form onSubmit={(e) => onSubmit(e)}>
    <div className="form">
        <h1>Login</h1>
        <TextField required="true" fullwidth label="Email" placeholder="Enter your email address" name="email"
        value={email}
            onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <TextField required="true" fullwidth label="Password" placeholder="Enter your password" name="password"
        value={password}
        onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <div className="login">
        <button type="submit" className="login-btn" style={{backgroundColor:"#35281E",color:"white",paddingTop:"12px",fontSize:"large"}}>Login</button>
        </div >
          <div className='forget1'><Link to="/forgetpass"> <p>Forget password?</p></Link></div>
        <div>
          <p>Don't have account?<Link to="/usersignup"><span>Sign up</span></Link></p>
        </div>
        <dr/>
        <dr/>
      </div>
        </form>
        </div>
  )
}
