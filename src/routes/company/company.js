// External Dependencies
import React from 'react';
import { Route } from "react-router-dom";

// Internal Dependencies
import CompanyPage from '../../pages/company'  

export default function Company() {
  return (
    <Route path="/company">
      <CompanyPage />
    </Route>
  );
}