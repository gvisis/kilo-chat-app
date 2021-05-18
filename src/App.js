import "./sass/_variables.scss";
import "./App.scss";

import { validateEmail } from "./js/validateEmail";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import ChatApp from "./components/ChatApp/Chat";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  let history = useHistory();

  const mainUserEmail = "demo@demo.com";

  const userLogin = (email,password) => {
    if (validateEmail(email) && mainUserEmail === email) {
      setIsLoggedIn(true);
      history.push("/");
    } else {
      setIsError("Wrong email or password");
    }
  };

  const setLoadingState = (bool) => {
      setIsLoading(bool);
  };

  return (
    <div className="container">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <ChatApp isLoading={isLoading} setLoadingState={setLoadingState} />
          ) : (
            <Redirect to="/login/" />
          )}
        </Route>
        <Route path="/login/">
          <Login
            userLogin={userLogin}
            isLoggedIn={isLoggedIn}
            isError={isError}
          />
        </Route>
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
