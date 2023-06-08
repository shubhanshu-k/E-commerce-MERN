import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate =useNavigate();
// const baseURL = "http://localhost:5000"; //for local
const baseURL = "https://ecommerce-backend-4ccy.onrender.com" //for cloud
const handlelogin= async ()=>{
    let result = await fetch(`${baseURL}/login`,{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result= await result.json()
    console.warn(result);
    if(result.name){
    localStorage.setItem('user',JSON.stringify(result));
    navigate("/");
}
    else {alert("Please Enter Correct details");
}
}

    return (<div className='login'>
        <h1>Login</h1>
        <input type="text" className='form-control-login' placeholder='Enter Email'
        onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="password" className='form-control-login' placeholder='Enter Password'
        onChange={(e)=>setPassword(e.target.value)}value={password} />
        <button onClick={handlelogin} className='login-button' type='button'>Login</button>
    </div>)
}
export default Login;