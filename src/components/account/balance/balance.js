// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';

// Internal Dependencies
import styles from './styles';

const Balance = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.currencyWrapper}>
        <Typography component="span" variant="h3" className={classes.currency}>167,23</Typography>
        <Typography component="span" variant="body1" className={classes.currencyName}>Fidels</Typography>
      </div>
      <div className={classes.currencyWrapper}>
        <Typography component="span" variant="h3" className={classes.currency}>38</Typography>
        <Typography component="span" variant="body1" className={classes.currencyName}>S-Fidels</Typography>
      </div>
    </div>
  );
}

export default Balance;