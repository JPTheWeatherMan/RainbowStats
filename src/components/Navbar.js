import React from 'react';
import { AppBar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    height: '5em',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  navlinks: {
    [theme.breakpoints.down('md')]: {
      width: '15em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.up('md')]: {
      width: '20em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  }
});

const Navbar = props => {
  const { classes } = props;

  return (
    <AppBar className={classes.root} position='sticky'>
      <h1>R6</h1>
      <ul className={classes.navlinks}>
        <Button variant='contained' size='medium' href='/'>
          Home
        </Button>
        <Button variant='contained' size='medium' href='/About'>
          About
        </Button>
      </ul>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
