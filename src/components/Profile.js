import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite-jss';
import useTitle from '../hooks/useTitle';

import Layout from './Layout';
import UserInfo from './UserInfo';
import AddPurchase from './AddPurchase';
import UserStats from './UserStats';

import { profileStyles } from '../styles/Profile';

const Stats = ({ user }) => {
  useTitle('Profile page');

  return (<Layout>
      <div className="w30 left">
        <UserInfo user={user} />
      </div>
      <div className="w70 right">
        <AddPurchase />
        <UserStats />
      </div>
    </Layout>);
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Stats);
