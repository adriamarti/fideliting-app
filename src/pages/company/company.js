// External Dependencies
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Internal Dependencies
import Navigation from '../../components/navigation';
import Transaction from '../../components/forms/transaction';
import Heading from '../../components/heading'
import Balance from '../../components/account/balance'
import Graphic from '../../components/account/graphic'
import Transactions from '../../components/account/transactions'
import Buy from '../../components/forms/buy'
import styles from './styles';

export default function Company() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Navigation />
      <Grid container>
        <Grid item xs={12} md={8} className={classes.contentWrapper}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Heading />
              <Balance />
              <Graphic />
            </Grid>
            <Grid item xs={12} md={4}>
              <Buy />
            </Grid>
          </Grid>
          <Transactions />
        </Grid>
        <Grid item xs={false} md={4} className={classes.transactionWrapper}>
          <Box boxShadow={3} className={classes.transaction}>
            <Transaction />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}