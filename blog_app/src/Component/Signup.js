import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './style/Signup.css'
function Signup({value}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
 
  useEffect(()=>{
    let auth=localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })

 async function Handler(){
  let result=await fetch('http://localhost:5000/signup',{
    method:'post',
    body:JSON.stringify({name,email,password}),
    headers:{
      'Content-Type':'application/json'
    }
  })
  
  result=await result.json();
  if(result.error === "all fields are required"){
    alert("fill all the details")
  }else{
  localStorage.setItem('user',JSON.stringify(result))
    navigate('/')
    navigate(0)
    console.log(result);
  }
  }
  return (
    <>
    <div className='signup-box'>
      <input type="text" value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name' />
      <input type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email' />
      <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter your password' />
        <button className='signup-button' onClick={()=>Handler()}>
          Signup
        </button>
    </div>
    </>
  )
}

export default Signup
