import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, computedMatch, ...rest }) => {
  if (user !== null) {
    return <Route { ...rest } render={
      props => (
        user.accessToken.length === 100
          ? <Component match={computedMatch} />
          : <Redirect to="/" />
      )
    } />;
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = state => {
  return {
    user: state.user.token ? state.user : null
  };
};

export default connect(mapStateToProps)(PrivateRoute);