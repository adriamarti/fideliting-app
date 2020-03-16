// External Dependencies
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  tabs: {
    '& .MuiTabs-flexContainer': {
      borderBottom: 'solid 1px #b7b7b7',
    },
  },
  panels: {
    marginTop: `${theme.spacing(2)}px`,
  },
  income: {
    position: 'relative',
    marginBottom: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px`,
    '& svg': {
      transform: 'rotate(90deg)',
      color: theme.palette.primary.main,
    },
    '& .transaction_amount': {
      color: theme.palette.primary.main,
    }
  },
  outcome: {
    position: 'relative',
    marginBottom: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px`,
    '& svg': {
      transform: 'rotate(90deg)',
      color: theme.palette.secondary.main,
    },
    '& .transaction_amount': {
      color: theme.palette.secondary.main,
    }
  },
  transactionId: {
    marginLeft: `${theme.spacing(3)}px`,
  },
  transactionData: {
    display: 'flex',
    marginTop: `${theme.spacing(1)}px`,
  },
  transactionOwner: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  transactionAmount: {
    position: 'absolute',
    right: `${theme.spacing(2)}px`,
    top: '24px',
  },
  transactionCurrency: {
    marginLeft: `${theme.spacing(1)}px`,
  }
}));

export default styles;