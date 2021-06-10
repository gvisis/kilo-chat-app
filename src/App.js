import React, { useState } from "react";
import { Switch, BrowserRouter, useHistory } from "react-router-dom";

import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import ChatApp from "./components/ChatApp/Chat";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Authentication from './components/Login/Authentication';

import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const { isLoggedIn } = Authentication();

  const setLoadingState = (bool) => {
    setIsLoading(bool);
  };

  React.useEffect(() => {
  }, [isLoggedIn])

  return (
    <div className="container">
      {/* <Switch>
        <Route exact path="/">
          {isLoggedIn ? (
            <ChatApp isLoading={isLoading} setLoadingState={setLoadingState} />
          ) : (
            <Redirect to="/login/" />
          )}
        </Route>
        <Route path="/login/">
          <Login handleUserLogin={handleUserLogin} isError={isError} />
        </Route>
        <Route path="*" component={Error} />
      </Switch> */}

      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute
            component={ChatApp}
            path="/"
            exact
            isLoading={isLoading}
            setLoadingState={setLoadingState}
          />
          {/* <Route path="*" component={Error} /> */} */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
