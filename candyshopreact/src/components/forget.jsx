import React, { useState } from 'react'
import './forget.css'
import axios from 'axios';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Forget(){
const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [Id, set] = useState({
    id:"1",
    loginid:""
  });

  const { email,password } = user;
  const {id,loginid}=Id;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const x=await axios.post("http://localhost:8080/login1", user);
    console.log(x.data);
    set({ ...Id, loginid:x.data});
    await axios.post("http://localhost:8080/post",Id);
    // navigate("/");
  }; 
  return (
    <div className='Main1'>
        <form onSubmit={(e) => onSubmit(e)}>
    <div className="forgetfull">
        <h1 >Forget password</h1>
        <TextField fullwidth label="Email" placeholder="Enter your email address" name="email"
        value={email}
            onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <div className="forget">
       <Link to="/change"><button type="submit" className="forget-btn" style={{backgroundColor:"#35281E",color:"white",paddingTop:"12px",fontSize:"large"}}>next</button></Link> 
        </div>
        <dr/>
        <dr/>
</div>
        // </form></div>
  )
}

