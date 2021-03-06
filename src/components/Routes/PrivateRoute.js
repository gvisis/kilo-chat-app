import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};
export default connect(mapStateToProps)(PrivateRoute);
