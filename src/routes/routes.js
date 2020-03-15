// External Dependencies
import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Internal Dependencies
import Company from './company'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Company />
      </Switch>
    </Router>
  );
}