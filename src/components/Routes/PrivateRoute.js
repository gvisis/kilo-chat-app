import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "../Login/Authentication";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = Authentication();

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
