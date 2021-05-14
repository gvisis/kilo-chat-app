import './sass/_variables.scss';
import "./App.scss";

import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="container">
      {/* Aside comp */}
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          <h1>Hello App</h1>
        </Route>
        <Route path="/login/" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
