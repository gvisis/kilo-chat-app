import React, { useState } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";

import { validateEmail } from "./js/validateEmail";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import ChatApp from "./components/ChatApp/Chat";

import "./App.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  let history = useHistory();

  const mainUserLogin = "demo@demo.com";
  const mainUserPassword = "demo";

  const userLogin = (email, password) => {
    if (
      validateEmail(email) &&
      mainUserLogin === email &&
      password.length > 0 &&
      mainUserPassword === password
    ) {
      setIsLoggedIn(true);
      setIsError(null);
      history.push("/");
    } else {
      setIsError("Wrong email or password");
    }
  };

  // const setLoadingState = (bool) => {
  //   setIsLoading(bool);
  // };

  return (
    <div className="container">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <ChatApp />
          ) : (
            <Redirect to="/login/" />
          )}
        </Route>
        <Route path="/login/">
          <Login userLogin={userLogin} isError={isError} />
        </Route>
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
};

export default App;
