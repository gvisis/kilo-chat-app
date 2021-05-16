import "../../sass/login.scss";

import { React, useState, useEffect } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";

function Login({ userLogin, isError }) {
  const loginIcons = {
    color: "#29c0cd",
    width: "32px",
    height: "32px",
    opacity: "60%",
    padding: "10px",
  };
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Sending data to check for email
  const sendData = (e) => {
    e.preventDefault();
    userLogin(userEmail, userPassword);
  };

  return (
    <main className="login-main">
      <form className="login-wrap" onSubmit={sendData}>
        <div className="login-header">
          <span className="login_title-text">Login</span>
        </div>
        <div className="login-row email">
          <label className="input-title">E-mail</label>
          <div className="input-container">
            <FaEnvelope style={loginIcons} />
            <input
              type="text"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          {isError && <div className="error-login">{isError}</div>}
        </div>
        <div className="login-row pass">
          <label className="input-title">Password</label>
          <div className="input-container">
            <FaKey style={loginIcons} />
            <input
              type="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          {isError && <div className="error-login">{isError}</div>}
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-login">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
