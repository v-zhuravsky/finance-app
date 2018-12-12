import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite-jss';
import { NavLink } from 'react-router-dom';

import { headerStyles } from '../styles/Header.js';

const Header = ({ user }) => {
  return (
    <header className={css(headerStyles.header)}>
      <nav className={css(headerStyles.nav)}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/family">Family</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/logout">Sign out</NavLink>
      </nav>
      <section className={css(headerStyles.section)}>
        <img src={user.avatar} alt={user.firstName + " " + user.lastName} />
        <h3>{user.firstName}</h3>
      </section>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);