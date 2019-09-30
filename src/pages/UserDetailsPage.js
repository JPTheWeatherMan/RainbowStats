import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import UserDetails from '../components/UserDetails';

const UserDetailsPage = ({ match }) => {
  return (
    <Fragment>
      <Navbar />
      <UserDetails playerid={match.params.playerid} />
    </Fragment>
  );
};

export default UserDetailsPage;
