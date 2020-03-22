import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CompanyRouter from './routes/company';

const Router = () => (
  <Switch>
    <Route path="/company" component={CompanyRouter} />
  </Switch>
);

export default Router;