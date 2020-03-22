// External Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Internal Dependencies
import App from '../containers/app';
import store from './store';
import fidelitingTheme from './fideliting-theme'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={fidelitingTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
