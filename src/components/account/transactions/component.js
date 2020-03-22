// External Dependencies
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';

// Internal Dependencies
import styles from './styles';

const fidelTransactions = [
  {
    type: 'income',
    date: '2019-20-11',
    owner: {
      address: 'GCXHV7JDD5EDPR5VNM3OWIRRICPEKA73LYZIWABHDKSGREHLGZ6F5TOR',
      type: 'Proceso de compensación'
    },
    amount: '3,23',
    id: 'RXZSNVRoUnBHUHFVZW0rV3ZmektNUT09',
  },
  {
    type: 'outcome',
    date: '2019-20-11',
    owner: {
      address: 'GCTK5BZCQPXN6EGXZHJPOVPFGTXLMPGNJW5ZFHUPEHKZ42N5EG4QVPWN',
      type: 'Entrega a cliente'
    },
    amount: '-1,23',
    id: 'RXZSNVRoUnBHUHFVZW0rV3ZmektNUT09',
  },
  {
    type: 'income',
    date: '2019-20-11',
    owner: {
      address: 'SAZVZEUVSWO2R7EDRKV4C4SCFORQVHDYJ4H4NYBRMYTIQQV6FVYO6QQN',
      type: 'Compra de Fidels'
    },
    amount: '200',
    id: 'RXZSNVRoUnBHUHFVZW0rV3ZmektNUT09',
  },
  {
    type: 'outcome',
    date: '2019-20-11',
    owner: {
      address: 'GCTK5BZCQPXN6EGXZHJPOVPFGTXLMPGNJW5ZFHUPEHKZ42N5EG4QVPWN',
      type: 'Entrega a cliente'
    },
    amount: '-1,23',
    id: 'RXZSNVRoUnBHUHFVZW0rV3ZmektNUT09',
  },
  {
    type: 'income',
    date: '2019-20-11',
    owner: {
      address: 'GCXHV7JDD5EDPR5VNM3OWIRRICPEKA73LYZIWABHDKSGREHLGZ6F5TOR',
      type: 'Proceso de compensación'
    },
    amount: '6,98',
    id: 'RXZSNVRoUnBHUHFVZW0rV3ZmektNUT09',
  },
]

const Component = () => {
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
          {fidelTransactions.map(({ type, date, owner, amount, id}) =>
            <Paper elevation={3} className={classes[type]}>
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

export default Component;