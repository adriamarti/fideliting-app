// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";

// Internal Dependencies
import styles from './styles';

const Component = ({ location }) => {
  const classes = styles();
  let textStrings = {
    header: '',
    subtitle: '',
  }
  
  if (location.pathname.includes['settings']) {
    textStrings = {
      title: 'Estado de la cuenta',
      subtitle: false,
    };
  } else if (location.pathname.includes['community']) {
    textStrings = {
      title: 'Estado de la cuenta',
      subtitle: false,
    };
  } else {
    textStrings = {
      title: 'Estado de la cuenta',
      subtitle: false,
    };
  }

  return (
    <div>
      <Typography component="h2" variant="h4" className={classes.header}>{textStrings.title}</Typography>
      {textStrings.subtitle && <Typography component="p" variant="body2" className={classes.subtitle}>{textStrings.subtitle}</Typography>}
    </div>
  );
}

export default withRouter(Component);