// External Dependencies
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Internal Dependencies
import Routes from './routes'

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a577ff',
      main: '#6b48ff',
      dark: '#2119cb',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff8b83',
      main: '#ff5756',
      dark: '#c51a2d',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Rubik, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
