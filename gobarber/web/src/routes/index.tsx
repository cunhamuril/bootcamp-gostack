import React from 'react';
import { Switch } from 'react-router-dom';

import { SignIn, SignUp, Dashboard } from '../pages';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;