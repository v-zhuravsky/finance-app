import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Stats from './components/Stats';
import Profile from './components/Profile';
import Auth from './components/Auth';

const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Stats} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </>
  );
};

export default App;