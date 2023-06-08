import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
const [name,setName]=useState("");
const[password,setPassword]=useState("");
const[email,setEmail]=useState("");
const navigate=useNavigate();
// const baseURL = "http://localhost:5000"; //for local
const baseURL = "https://ecommerce-backend-4ccy.onrender.com" //for cloud
useEffect(()=>{
  const auth =localStorage.getItem('user');
  if (auth){
    navigate('/')
  }
},[])
const collectData= async ()=>{
    console.warn(name,email,password)
      let result = await fetch(`${baseURL}/register`,
      {
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{'Content-Type':'application/json'},
      });
      result=await result.json()
      console.warn(result);
      localStorage.setItem("user",JSON.stringify(result))
      if(result){
        navigate('/')
      }
  }
return (
    <div>
<form className='form'>
<div class="form-group">
<h1> Register</h1>
    <input type="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
  </div>
  <div class="form-group">
    <input type="email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"></input>
  </div>
  <div class="form-group">
<input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
    </div>
     <button onClick={collectData} className='appButton' type="button">Sign up</button>
</form>

   </div>
)
}
export default SignUp;