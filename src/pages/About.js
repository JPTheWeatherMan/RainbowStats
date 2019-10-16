import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { Card, Typography, CardContent, withStyles } from '@material-ui/core';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

const About = props => {
  const { classes } = props;
  return (
    <Fragment>
      <Navbar />
      <Background />
      <Card className={classes.card}>
        <CardHeader-title>
          <Typography variant='h3' align='center' color='textPrimary'>
            About R6 Stats
          </Typography>
        </CardHeader-title>
        <CardContent>
          <Typography variant='h5' align='center' color='textPrimary'>
            This application was built by Jarrett Hale and is in version 1.0
          </Typography>
          <Typography variant='h5' align='center' color='textPrimary'>
            Links:
          </Typography>
          <a
            href='https://github.com/JPTheWeatherMan'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size='40' color='#3f51b5' />
          </a>
          <a
            href='https://www.linkedin.com/in/jarrett-hale-a82253189/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size='40' color='#3f51b5' />
          </a>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(About);
