import "../../sass/login.scss";

import { React, useState, useEffect } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";

function Login({isLoggedIn, userLogin}) {
  console.log(isLoggedIn);
  
  const loginIcons = {
    color: "#29c0cd",
    width: "32px",
    height: "32px",
    opacity: "60%",
    padding: '10px'
  };

  return (
    <main className="login-main">
      <div className="login-wrap">
        <div className="login-header">
          <span className="login_title-text">Login</span>
        </div>
        <div className="login-row email">
            <label className="input-title">E-mail</label>
          <div className="input-container">
            <FaEnvelope style={loginIcons} />
            <input type="text" />
          </div>
        </div>
        <div className="login-row pass">
            <label className="input-title">Password</label>
          <div className="input-container">
          <FaKey style={loginIcons} />
            <input type="password" />
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => userLogin()} className="btn btn-login">Login</button>
        </div>
      </div>
    </main>
  );
}

export default Login;
