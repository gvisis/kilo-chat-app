import './sass/_variables.scss';
import "./App.scss";

import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch } from "react-router-dom";
import ChatApp from './components/ChatApp/Chat';


function App() {
  return (
    <div className="container">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          <ChatApp />
        </Route>
        <Route path="/login/" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
