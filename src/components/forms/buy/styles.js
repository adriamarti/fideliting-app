// External Dependencies
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: 'auto',
    marginTop: `${theme.spacing(2)}px`,
  },
  text: {
    marginBottom: `${theme.spacing(2)}px`,
    marginTop: `${theme.spacing(1)}px`,
  },
  content: {
    paddingLeft: `${theme.spacing(2)}px`,
    paddingRight: `${theme.spacing(2)}px`,
    paddingBottom: `${theme.spacing(2)}px`,
    width: '100%',
    textAlign: 'center',
  },
  button: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
}));

export default styles;