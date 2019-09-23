import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {InputBase, Theme} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import {muiTheme} from '../theme';
import {makeStyles} from '@material-ui/styles';
import createStyles from '@material-ui/styles/createStyles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: 800,
      margin: 0
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

export const ToolbarComponent = (props) => {
  const classes = useStyles(muiTheme);
  const {onMenuButtonClick: handleDrawerToggle} = props;
  return (
    <Toolbar>
      <Paper className={classes.root}>
        <IconButton
          onClick={handleDrawerToggle}
          className={classes.iconButton} aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{'aria-label': 'search google maps'}}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon/>
        </IconButton>
        <Divider className={classes.divider} orientation="vertical"/>
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <DirectionsIcon/>
        </IconButton>
      </Paper>
    </Toolbar>
  )
};
