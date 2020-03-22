// External Dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';

// Internal Dependencies
import styles from './styles';

const Component = ({
  getFidelTransactions,
  getSFidelTransactions,
  isFetchingFidel,
  isFetchingSFidel,
  fidel,
  sFidel
}) => {
  useEffect(() => {
    getFidelTransactions();
    getSFidelTransactions();
  }, []);
  
  const classes = styles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs}>
        <Tab label="Transacciones de Fidels" />
        <Tab label="Transacciones de S-Fidels" />
      </Tabs>
      <div className={classes.panels}>
        <div role="tabpanel" hidden={value !== 0}>
          {fidel.map(({ type, date, owner, amount, id}) =>
            <Paper key={id} elevation={3} className={classes[type]}>
              <Typography component="span" variant="caption">Fecha: {date}</Typography>
              <Typography component="span" variant="caption" className={classes.transactionId}>ID: {id}</Typography>
              <div className={classes.transactionData}>
                <ImportExportOutlinedIcon />
                <Typography component="span" variant="body1" className={classes.transactionOwner}>Cuenta: {owner.address}</Typography>
              </div>
              <div className={classes.transactionAmount}>
                <Typography component="span" variant="h5" className="transaction_amount">{amount}</Typography>
                <Typography component="span" variant="caption" className={classes.transactionCurrency}>F</Typography>
              </div>
            </Paper>
          )}
        </div>
        <div role="tabpanel" hidden={value !== 1}>
          <p>Transacciones de S-Fidels</p>
        </div>
      </div>
    </div>
  );
}

Component.propTypes = {
  getFidelTransactions: PropTypes.func.isRequired,
  getSFidelTransactions: PropTypes.func.isRequired,
  isFetchingFidel: PropTypes.bool.isRequired,
  isFetchingSFidel: PropTypes.bool.isRequired,
  fidel: PropTypes.array,
  sFidel: PropTypes.array,
};

Component.defaultProps = {
  fidel: [],
  sFidel: [],
};

export default Component;