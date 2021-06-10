import { React, useState } from "react";
import { EmailIcon, PassIcon } from "./InputIcons";
import Authentication from "../Login/Authentication";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { handleLogin, isError,isLoggedIn } = Authentication();

  // Sending data to check for email
  const sendData = (e) => {
    e.preventDefault();
    handleLogin(userEmail, userPassword);
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
            <EmailIcon />
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
            <PassIcon />
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
};

export default Login;
