import React from 'react';
import { css } from 'aphrodite-jss';

import { userInfoStyles } from '../styles/UserInfo';

const UserInfo = ({ user }) => {
  return (
    <div className={css(userInfoStyles.wrapper)}>
      <img src={user.avatar} alt={user.firstName + '' + user.lastName} />
      <div className={css(userInfoStyles.basicDetails)}>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>Total spent: {user.totalMoneySpent}$</p>
        <p>Spent this month: {user.spentThisMonth}$</p>
      </div>
    </div>
  );
};

export default React.memo(UserInfo);
