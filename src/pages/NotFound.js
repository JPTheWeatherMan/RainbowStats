import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { Card, Typography, CardContent, withStyles } from '@material-ui/core';

const styles = theme => ({
  card: {
    [theme.breakpoints.down('md')]: {
      margin: '20px auto',
      textAlign: 'center',
      width: '80%'
    },
    [theme.breakpoints.up('md')]: {
      margin: '20px auto',
      textAlign: 'center',
      width: '60%'
    }
  }
});

const NotFound = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Navbar />
      <Background />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5' align='center' color='textPrimary'>
            404
          </Typography>
          <Typography variant='h5' align='center' color='textPrimary'>
            Not Found
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(NotFound);
