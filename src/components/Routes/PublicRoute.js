import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  restricted,
  isLoggedIn,
  ...rest
}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps)(PublicRoute);
