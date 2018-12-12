import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { css } from 'aphrodite-jss';

import { authStyles } from '../styles/Auth';

const Auth = ({ user }) => {
  if (user.token) {
    if (user.token.length === 100) {
      return <Redirect to="/" />;
    }
  }

  return (
    <div className={css(authStyles.authForm)}>
      <h1>Welcome back!</h1>
      <form>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          placeholder="Login"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="Password"
          type="password"
        />
        <button>Authorize</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Auth);