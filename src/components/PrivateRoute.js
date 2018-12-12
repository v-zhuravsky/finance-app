import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, computedMatch, ...rest }) => {
  if (user !== null) {
    return <Route { ...rest } render={
      props => (
        user.token.length === 100
          ? <Component match={computedMatch} />
          : <Redirect to="/auth" />
      )
    } />;
  } else {
    return <Redirect to="/auth" />;
  }
};

const mapStateToProps = state => {
  return {
    user: state.user.token ? state.user : null
  };
};

export default connect(mapStateToProps)(PrivateRoute);