import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { css } from 'aphrodite-jss';
import authAction from '../actions/auth.ts';
import useInput from '../hooks/useInput';

import { authStyles } from '../styles/Auth';

const Auth = ({ user, authAction }) => {
  if (user.token) {
    if (user.token.length === 100) {
      return <Redirect to="/" />;
    }
  }

  const login = useInput('');
  const password = useInput('');

  const handleAuth = e => {
    e.preventDefault();

    authAction(login.value, password.value);
  };

  return (
    <div className={css(authStyles.authForm)}>
      <h1>Welcome back!</h1>
      <form onSubmit={handleAuth}>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          placeholder="Login"
          type="text"
          {...login}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="Password"
          type="password"
          {...password}
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

export default connect(mapStateToProps, { authAction })(Auth);