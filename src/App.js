import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </>
  );
};

export default App;