import React from 'react';
import { Switch } from 'react-router-dom';

import {
  SignIn,
  SignUp,
  Dashboard,
  ForgotPassword,
  ResetPassword,
} from '../pages';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
