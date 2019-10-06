import React from 'react';
import BackgroundImage from '../img/rainbow.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      margin: 'auto',
      padding: 0,
      height: '100%',
      width: 'auto',
      zIndex: -1,
      backgroundSize: 'center center',
      backgroundPosition: 'center',
      opacity: 1,
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
      opacity: 1,
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

// backgroundStyle: {
//   position: 'fixed',
//   height: 'auto',
//   width: 'auto',
//   zIndex: -1,
//   'background-Size': 'center center',
//   'background-Position': 'center',
//   opacity: 1,
//   overflow: 'hidden'
// }
