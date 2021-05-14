import "../../sass/Login.scss";

import { React, useState, useEffect } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";

function Login() {
  //   const [isLogged, setIsLogged] = useState(false);
  //   const [isError, setIsErorr] = useState(false);
  const loginIcons = {
    color: "#29c0cd",
    width: "32px",
    height: "32px",
    margin: "1rem",
  };

  return (
    <main className='login-main'>
      <div className="login-wrap">
        <div className="login-header">
          <span className="login_title-text">Login text</span>
        </div>
        <div className="login-row email">
          <FaEnvelope style={loginIcons} />
          <input type="text" />
        </div>
        <div className="login-row pass">
          <FaKey style={loginIcons} />
          <input type="password" />
        </div>
        <div className="buttons">
          <div className="btn btn-login">Login</div>
          <div className="btn btn-reset">Reset</div>
        </div>
      </div>
    </main>
  );
}

export default Login;
