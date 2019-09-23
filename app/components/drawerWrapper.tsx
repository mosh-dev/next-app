import React from 'react';
import clsx from 'clsx';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {muiTheme} from '../theme';
import Link from 'next/link';
import {Icon} from '@material-ui/core';
import {NextPageContext} from 'next';
import {ToolbarComponent} from './toolbarComponent';

const drawerWidth = 240;

const withDrawer = ComposedComponent => {
  const HOC = props => {
    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          display: 'flex',
        },
        appBar: {
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          // marginLeft: drawerWidth,
          // width: `calc(100% - ${drawerWidth}px)`,
          // transition: theme.transitions.create(['width', 'margin'], {
          //   easing: theme.transitions.easing.sharp,
          //   duration: theme.transitions.duration.enteringScreen,
          // }),
        },
        menuButton: {
          marginRight: 36,
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        },
        drawerOpen: {
          width: drawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerClose: {
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: 'hidden',
          width: theme.spacing(7) + 1,
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
          },
        },
        toolbar: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
        },
      }),
    );

    const classes = useStyles(muiTheme);
    const [open, setOpen] = React.useState(true);

    return (
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
          <ToolbarComponent/>
        </AppBar>
        <Drawer
          open={open}
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}>
          <div className={classes.toolbar}/>
          <Divider/>
          <List>
            <Link href='/'>
              <ListItem button>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary={'Home'}/>
              </ListItem>
            </Link>
            <Link href='/test'>
              <ListItem button>
                <ListItemIcon>
                  <Icon>vertical_split</Icon>
                </ListItemIcon>
                <ListItemText primary={'Test Page'}/>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Toolbar/>
          <ComposedComponent {...props}/>
        </main>
      </div>
    );
  };

  HOC.getInitialProps = async (ctx: NextPageContext) => {
    if (ComposedComponent.getInitialProps) {
      return await ComposedComponent.getInitialProps(ctx);
    }
    return {};
  };

  return HOC;
};

export default withDrawer;
