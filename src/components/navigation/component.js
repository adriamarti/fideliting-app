// External Dependencies
import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';

// Internal Dependencies
import logo from '../../assets/images/logo.png'
import styles from './styles';
import NavigationItems from './navigation-items'

const Component = ({ type, selected }) => {
  const classes = styles();

  return (
    <Box className={classes.root} boxShadow={3}>
      <div>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Fideliting" className={classes.logoImage} />
        </div>
        <NavigationItems type={type} selected={selected} />
      </div>
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
        </ListItem>
      </Link>
    </Box>
  );
}

Component.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Component;