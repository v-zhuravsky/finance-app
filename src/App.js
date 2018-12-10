import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Auth from './components/Auth';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    </>
  );
};

export default App;