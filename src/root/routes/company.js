// External Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Internal Dependencies
import Company from '../../containers/company'

export default () => (
  <Switch>
    <Route exact path="/company">
      <Company subpage="dashboard" />
    </Route>
  </Switch>
);