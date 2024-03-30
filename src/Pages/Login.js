import React from 'react'
import './css/Login.css'
import { useState } from 'react'

const Login = () => {
  const [user,setUser]=useState([])
  const handleclick=(item)=>{
    setUser([...user,item])
  }
  console.log(user);

  return (
    <div className='login'>
        <div className='login-box'>
            <span>Sign Up</span>
            <input id="name" className='in' name='name' placeholder='Enter Your Name'></input>
            <input id="email" className='in' name='email' placeholder="Enter Email Id"></input>
            
            <input id="pass" className='in' name='pass' placeholder=' Enter Password'></input>

            <button className='bt-login' onClick={()=>{
              var name = document.getElementById('name').value;
              var email = document.getElementById('email').value;
              var pass = document.getElementById('pass').value;
              var users = {
                name:name,
                email:email,
                pass:pass
              }
              handleclick(users)
            }}> Continue</button>
           
            <span>Already have an accout? </span>

        </div>
    </div>
  )
}
export default Login
