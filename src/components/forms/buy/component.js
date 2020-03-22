// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// Internal Dependencies
import buy from '../../../assets/images/buy.jpg'
import styles from './styles';

const Component = () => {
  const classes = styles();

  const openDialog = (event) => {
    event.preventDefault();
  }

  return (
    <Paper elevation={3}>
      <img src={buy} alt="Fideliting" className={classes.image} />
      <div className={classes.content}>
        <Typography component="p" variant="body2" className={classes.text}>Adquiere más Fideles para poder fidelizar nuevos clientes.</Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={openDialog}>
          Comprar Fidels
        </Button>
      </div>
      
    </Paper>
  );
}

export default Component;