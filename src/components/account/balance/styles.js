// External Dependencies
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  currencyWrapper: {
    width: '50%',
  },
  currency: {
    fontWeight: '300',
  },
  currencyName: {
    paddingLeft: `${theme.spacing(1)}px`,
    fontWeight: '800',
    color: theme.palette.primary.main,
  }
}));

export default styles;