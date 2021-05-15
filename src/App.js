import "./sass/_variables.scss";
import "./App.scss";

import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { Route, Redirect, Switch, useHistory} from "react-router-dom";
import ChatApp from "./components/ChatApp/Chat";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  
  let history = useHistory()
  
  const userLogin = () => {
      setIsLoggedIn(true);
      setIsLoading(true)
      history.push("/")
  };
  const finishLoading = () => { 
    setIsLoading(false)
  }

  return (
    <div className="container">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <ChatApp isLoading={isLoading} finishLoading={finishLoading}/> : <Redirect to="/login/" />}
        </Route>
        <Route path="/login/">
          <Login userLogin={userLogin} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
