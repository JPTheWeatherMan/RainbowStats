import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { Card, Typography, CardContent } from '@material-ui/core';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <Background />
      <Card>
        <CardHeader-title>
          <Typography variant='h3' align='center' color='textPrimary'>
            About R6 Stats
          </Typography>
        </CardHeader-title>
        <CardContent>
          <Typography variant='h5' align='center' color='textPrimary'>
            This application was built by Jarrett Hale
          </Typography>
          <Typography variant='h5' align='center' color='textPrimary'>
            Links:
          </Typography>
          <FaGithub size='40' color='#3f51b5' />
          <FaLinkedin size='40' color='#3f51b5' />
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default About;
