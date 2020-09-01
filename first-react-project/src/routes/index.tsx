import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/**
      :route+ --> Este + significa que mesmo se o parâmetro da rota tiver
      uma barra "/", vai interpretar como parâmetro e não uma rota
    */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
