// External Dependencies
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    width: '100% !important',
    display: 'flex',
    margin: '0 !important',
  },
  contentWrapper: {
    padding: `${theme.spacing(2)}px`,
  },
  transactionWrapper: {
    margin: '0 !important',
    backgroundColor: theme.palette.background.paper,
  },
  transaction: {
    minHeight: '100vh',
    padding: `${theme.spacing(2)}px`,
  }
}));

export default styles;