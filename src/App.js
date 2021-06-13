import React from "react";
import { Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import ChatApp from "./components/ChatApp/Chat";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <PublicRoute restricted={false} component={Login} path="/login" exact />
        <PrivateRoute component={ChatApp} path="/" exact />
        <PublicRoute restricted={false} component={Error} path="*" />
      </Switch>
    </div>
  );
};

export default App;
