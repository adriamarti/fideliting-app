// External Dependencies
import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

// Internal Dependencies
import styles from '../styles';
import config from './config'

const Component = ({ type, selected }) => {
  const classes = styles();
  const navigationIcons = {
    dashboard: <DashboardOutlinedIcon />,
    settings: <SettingsOutlinedIcon />,
    community: <AccountTreeOutlinedIcon />,
  }
  const { items, labels} = config[type];

  return (
    <List component="nav" aria-label={labels.join(' ')}>
      {items.map(({ id, href }) =>
        <Link key={id} to={href}>
          <ListItem button
            selected={selected === id}>
            <ListItemIcon
              className={selected === id ? classes.selectedIcon : ''}>
              {navigationIcons[id]}
            </ListItemIcon>
          </ListItem>
        </Link>
      )}
    </List>
  );
}

Component.propTypes = {
  type: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

Component.defaultProps = {
  type: 'company',
  selected: 'dashboard',
};

export default Component;