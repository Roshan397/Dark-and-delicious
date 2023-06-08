import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import {Box} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
    const [users, setUsers] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
      loadUsers();
    });
    const loadUsers = async () => {
      const res =await axios.get("http://localhost:8080/getId");
      console.log(res.data);
      const result = await axios.get(`http://localhost:8080/login1/${res.data}`);
      setUsers(result.data);
    };
    const onClick =async()=> {
  await axios.delete("http://localhost:8080/delete");
  navigate("/");
}
    return (
      <div className="profilefull"  >
        <h1 style={{marginLeft:"480px",marginTop:'60px',fontFamily:"sans-serif",fontWeight:"800",fontSize:"40px"}}>Profile</h1>
            <br/>
            <br/>
          <div className="image">
          <Box  component="img" sx={{  borderRadius:'50%',height:'300px',width:'280px',marginLeft:'400px'}}  alt="The house from the offer."
           src="./profile.webp" />
           </div>
           <br/>
           <br/>
        <div className="profile">
         <div> <p>Name         : {users.username}</p></div>
         <div> <p>Email        : {users.email}</p></div>
         <div> <p>MobileNumber : {users.mobilenumber}</p></div>
    </div>
    <div className="logout">
    <button onClick={(e) => onClick(e)} style={{backgroundColor:"#35281E",color:"white",padding:"10px",fontSize:"large",borderRadius:"20%"}}>Logout</button></div>
    <div><Link to="/home"><button type="link" className="logout1">Back</button></Link></div>
    </div>
        )
}

