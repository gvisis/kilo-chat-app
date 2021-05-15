import "./sass/_variables.scss";
import "./App.scss";

import { validateEmail } from './js/validateEmail';
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import ChatApp from "./components/ChatApp/Chat";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  let history = useHistory();

  const userLogin = (email, pass) => {
    if(validateEmail(email)){
      setIsLoggedIn(true);
      setIsLoading(true);
      history.push("/");
    } else {
      setIsError("Wrong email or password");
    }
  };

  const finishLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="container">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <ChatApp isLoading={isLoading} finishLoading={finishLoading} />
          ) : (
            <Redirect to="/login/" />
          )}
        </Route>
        <Route path="/login/">
          <Login userLogin={userLogin} isLoggedIn={isLoggedIn} isError={isError} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
