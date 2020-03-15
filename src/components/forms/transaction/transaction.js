// External Dependencies
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Internal Dependencies
import { isValidEmail, isValidNumber } from '../../../utils/form-validations'
import styles from './styles';

const Transaction = () => {
  const classes = styles();
  const helperTexts = {
    email: {
      valid: 'Introduce el email del cliente.',
      invalid: 'El email introducico es inválido.',
    },
    amount: {
      valid: 'Introduce la cantidad de Fidels a transferir',
      invalid: 'La cantidad es inválida.'
    }
  }

  const [formElements, setFormElements] = useState({
    email: {
      helperText: helperTexts.email.valid,
      hasError: false,
      minumLength: 3,
      validate: isValidEmail,
      value: '',
    },
    amount: {
      helperText: helperTexts.amount.valid,
      hasError: false,
      minumLength: 0,
      validate: isValidNumber,
      value: '',
    },
  })

  const handleOnChange = (id, value) => {
    const { minumLength, validate } = formElements[id];

    setFormElements({
      ...formElements,
      [id]: {
        ...formElements[id],
        value,
      }
    });

    if (value.length > minumLength) {
      if (validate(value)) {
        setFormElements({
          ...formElements,
          [id]: {
            ...formElements[id],
            hasError: false,
            helperText: helperTexts[id].valid,
            value,
          }
        })
      } else {
        setFormElements({
          ...formElements,
          [id]: {
            ...formElements[id],
            hasError: true,
            helperText: helperTexts[id].invalid,
            value,
          }
        })
      }
    }
  }

  const isButtonDisabled = () => {
    const emailValue = formElements.email.value;
    const emailHasError = formElements.email.hasError;
    const emailMinumLength = formElements.email.minumLength;
    const amountValue = formElements.amount.value;
    const amountHasError = formElements.amount.hasError;
    const amountMinumLength = formElements.amount.minumLength;

    if (!emailHasError && !amountHasError) {
      if (emailValue.length > emailMinumLength && amountValue.length > amountMinumLength) {
        return false;
      }

      return true;
    }

    return true;
  }

  const sendFidels = (event) => {
    const emailValue = formElements.email.value;
    const amountValue = formElements.amount.value;
    console.log('emailValue', emailValue);
    console.log('amountValue', amountValue);
    event.preventDefault();
  }

  return (
    <div>
      <Typography component="h2" variant="h4" className={classes.header}>Envía Fidels</Typography>
      <Typography component="p" variant="body2" className={classes.subtitle}>Fideliza a tus clientes y gana S-Fidels que te ayudaran a ganar clientes y dinero en cada intercambio de Fidels en la plataforma.</Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          error={formElements.email.hasError}
          fullWidth
          id="email"
          label="Email"
          helperText={formElements.email.helperText}
          value={formElements.email.value}
          variant="outlined"
          className={classes.input}
          onChange={ ({ target }) => handleOnChange(target.id, target.value) } />
        <TextField
          error={formElements.amount.hasError}
          fullWidth
          id="amount"
          label="Cantidad"
          helperText={formElements.amount.helperText}
          value={formElements.amount.value}
          variant="outlined"
          className={classes.input}
          onChange={ ({ target }) => handleOnChange(target.id, target.value) } />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            disableElevation
            disabled={isButtonDisabled()}
            onClick={sendFidels}>
            Envía Fidels
          </Button>
      </form>
    </div>
  );
}

export default Transaction;