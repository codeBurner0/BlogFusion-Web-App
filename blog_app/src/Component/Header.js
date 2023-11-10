import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { useAuth0 } from "@auth0/auth0-react";
import "./style/Header.css";
function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [bool, setBool] = useState(false);
  const [BoolName, setBoolName] = useState(false);
  function clicker() {
    setBool(!bool);
  }
  const navigate = useNavigate()
  return (
    <div>
      <div className="nav-bar ">
        <div className="title">
          <span className="logo"><Link className="logo1" to="/">
            BlogFusion
          </Link></span>
          {(bool) ? <BsFillMenuButtonFill className="icon" onClick={() => clicker()} /> : <BsFillMenuButtonWideFill className="icon" onClick={() => clicker()} />}
        </div>
        <div className={bool ? "show" : "list"}>
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
            isAuthenticated ? <> <li>
              <Link className="anchor " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                SignOut
              </Link>
            </li>
              <li>
                <Link className="ancho">
                  <img src={user.picture} alt={''} className="auth_img" onClick={() => setBoolName(!BoolName)} />
                  {<h2 className={BoolName ? "auth_h2" : "auth_none_h2"}> <span className="header_span">Hello!</span> <span className="header_span">{user.name}</span></h2>}
                </Link>
              </li></> :
              <>
                <li>
                  <Link className="anchor" onClick={() => loginWithRedirect()}>
                    SignIn
                  </Link>
                </li>
              </>
          }
        </div>
      </div>
    </div>
  );
}
export default Header;
