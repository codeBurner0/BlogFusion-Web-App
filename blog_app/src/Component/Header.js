import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';

import "./style/Header.css";
function Header() {

  const [bool,setBool]=useState(false);
  function clicker(){
    setBool(!bool);
  }
  const navigate=useNavigate()
  function logout(){
    localStorage.clear()
    navigate(0) //refresh the page
  }

  const auth=localStorage.getItem('user')
  return (
    <div>
    <div className="nav-bar ">
      <div className="title">
        <span className="logo"><Link className="logo1" to="/">
        BlogFusion
          </Link></span>
       {(bool)?<BsFillMenuButtonFill className="icon" onClick={()=>clicker()} />:<BsFillMenuButtonWideFill className="icon" onClick={()=>clicker()} />}
      </div>
      <div  className={bool?"show":"list"}>
        <li>
          <Link className="anchor" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/Blogs">
            Blogs
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/createblog">
            CreateBlog
          </Link>
        </li>
          {
            auth?<li>
            <Link className="anchor" onClick={logout}>
              Logout
            </Link>
          </li>:
            <li>
            <Link className="anchor"  to="/Login" >
              Login
            </Link>
          </li>
          }
      </div>
    </div>
     
   </div>
  );
}
export default Header;
