import React, { useState } from 'react'
import './forget.css'
import axios from 'axios';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Change(){
  
  let navigate = useNavigate();
    const [user, setUser] = useState({
        id:"1",
        email: "Roshan@gmail.com",
        password: "",
        username: "Roshan",mobilenumber: "9788826532"
      });
    
      const { id,email,password, username,mobilenumber } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const d =await axios.get("http://localhost:8080/getId");
    const ema =await axios.get(`http://localhost:8080/getemail/${d.data}`);
    const mn =await axios.get(`http://localhost:8080/getmobn/${d.data}`);
    const uname =await axios.get(`http://localhost:8080/getuname/${d.data}`);
    setUser({...user,id:d});
    setUser({...user,email:ema});
    setUser({...user,mobilenumber:mn});
    setUser({...user,username:uname});
    await axios.put("http://localhost:8080/update",user);
    navigate("/");
  }; 
  return (
    <div className='Main1'>
        <form onSubmit={(e) => onSubmit(e)}>
    <div className="forgetfull">
        <h1 >Forget password</h1>
        <TextField fullwidth required label="Password" type="password" placeholder="Enter your new password" name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
            style={{width:"300px"}}/>
        <div className="forget">
        <button type="submit" className="forget-btn" style={{backgroundColor:"#35281E",color:"white",paddingTop:"12px",fontSize:"large"}}>Confirm</button>
        </div>
        <dr/>
        <dr/>
</div>
        // </form></div>
  )
}