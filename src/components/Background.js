import React from 'react';
import BackgroundImage from '../img/rainbow.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      margin: 'auto',
      padding: 0,
      height: 'auto',
      width: 'auto',
      zIndex: -1,
      backgroundSize: 'center',
      backgroundPosition: 'cover',
      overflow: 'hidden'
    },
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      margin: 'auto',
      padding: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundSize: 'center center',
      backgroundPosition: 'center',
      overflow: 'hidden'
    }
  }
});

const Background = props => {
  const { classes } = props;

  return (
    <img
      className={classes.root}
      src={BackgroundImage}
      alt={'background'}
    ></img>
  );
};

export default withStyles(styles)(Background);
