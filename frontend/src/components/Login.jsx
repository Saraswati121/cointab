import React, { useState } from 'react'
import './style.css'
import axios from 'axios';
import { useNavigate} from "react-router-dom";

export const Login = () => {
  const [formData,setformData] = useState({})
  const nav= useNavigate()

  const handelChange=(e)=>{
      const {value,name}= e.target
      setformData({...formData,
           [name]: value})
  }

  const handelogin= async ()=>{
    let user = null;
    await axios
      .post(" http://localhost:8080/auth/login", formData)
      .then(({ data }) => {
        //console.log(data[0], "data");
        user = data[0];
        localStorage.setItem("userid", user['email']);
        console.log(user, "after post");
      })
      .catch((err) => {
        console.log(err.message, ": error ocuured");
        alert("Invalid Credentials");
      });
    // console.log(data[0])
    // console.log(user, ": user");
    if (user) {
      alert("Login successfull");
      nav("/home");
    }
}
  return (
    <div className='main'>
      <h1>LogIn</h1>
       <input type="email" name='email' onChange={handelChange} placeholder='Enter Email..'/><br />
        <input type="text" name='password' onChange={handelChange} placeholder='Enter password..'/><br />
        <button className='btn1' onClick={handelogin}>Submit</button>
    </div>
  )
}
