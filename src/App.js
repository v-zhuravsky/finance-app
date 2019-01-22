import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Stats from './components/Stats';
import Auth from './components/Auth';

const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Stats} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </>
  );
};

export default App;