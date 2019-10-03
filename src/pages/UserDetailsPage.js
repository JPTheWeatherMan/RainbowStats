import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import UserDetails from '../components/UserDetails';
import Background from '../components/Background';

const UserDetailsPage = ({ match }) => {
  return (
    <Fragment>
      <Navbar />
      <Background />
      <UserDetails playerid={match.params.playerid} />
    </Fragment>
  );
};

export default UserDetailsPage;
