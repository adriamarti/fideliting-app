// External Dependencies
import { createMuiTheme } from '@material-ui/core/styles';

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

export default theme;