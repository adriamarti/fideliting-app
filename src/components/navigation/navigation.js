// External Dependencies
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';

// Internal Dependencies
import logo from '../../assets/images/logo.png'
import styles from './styles';

const Navigation = ({ location }) => {
  const classes = styles();
  const [navigationItems, setNavigationItems] = useState([]);
  const [navigationItemLabels, setNavigationItemLabels] = useState([]);

  const navigationListItems = {
    company: [
      {
        icon: <DashboardOutlinedIcon />,
        href: '/company'
      },
      {
        icon: <SettingsOutlinedIcon />,
        href: '/company/settings'
      },
      {
        icon: <AccountTreeOutlinedIcon />,
        href: '/community'
      }
    ],
    client: [
      {
        icon: <DashboardOutlinedIcon />,
        href: '/client'
      },
      {
        icon: <SettingsOutlinedIcon />,
        href: '/client/settings'
      },
      {
        icon: <AccountTreeOutlinedIcon />,
        href: '/community'
      }
    ],
  };

  const navigationLabels = {
    company: [
      'Inicio',
      'Configuración',
      'Comunidad,'
    ],
    client: [
      'Inicio',
      'Configuración',
      'Comunidad,'
    ]
  };

  const getNavigationItems = ({ pathname }) => {
    if (pathname.includes('company')) {
      return navigationListItems.company;
    }

    return navigationListItems.client;
  };

  const getNavigationLabels = ({ pathname }) => {
    if (pathname.includes('client')) {
      return navigationLabels.company;
    }

    return navigationLabels.client;
  }

  useEffect(() => {
    setNavigationItems(getNavigationItems(location));
    setNavigationItemLabels(getNavigationLabels(location))
  }, [location]);


  return (
    <Box className={classes.root} boxShadow={3}>
      <div>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Fideliting" className={classes.logoImage} />
        </div>
        <List component="nav" aria-label={navigationItemLabels.join(' ')}>
          {navigationItems.map((navigationItem, index) =>
            <Link key={navigationItemLabels[index]} to={navigationItem.href}>
              <ListItem button>
                <ListItemIcon>
                  {navigationItem.icon}
                </ListItemIcon>
              </ListItem>
            </Link>
          )}
        </List>
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

export default withRouter(Navigation);