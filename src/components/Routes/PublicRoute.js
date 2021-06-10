import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "../Login/Authentication";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLoggedIn } = Authentication();

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && !restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...rest} />
        )
      }
    />
  );
};

export default PublicRoute;
