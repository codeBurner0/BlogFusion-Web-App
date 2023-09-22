import React, { useState } from 'react'
import App from './App'
import Signup from './Component/Signup';
import Header from './Component/Header';
function Register() {
  let auth=localStorage.getItem('user')
  
  return auth?<App/>:<><Signup/></>
}
export default Register;
