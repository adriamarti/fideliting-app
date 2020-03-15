// External Dependencies
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    width: '60px',
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoWrapper: {
    width: '100%',
    display: 'flex',
  },
  logoImage: {
    width: '20px',
    height: 'auto',
    margin: `${theme.spacing(2)}px auto`,
  }
}));

export default styles;