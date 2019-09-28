import React, { useContext, useEffect } from 'react';
import R6Context from '../r6Context/R6Context';
import { Typography } from '@material-ui/core';

const UserDetails = ({ match }) => {
  const r6context = useContext(R6Context);
  const { user, getUser } = r6context;

  useEffect(async () => {
    await getUser(match.params.playerid); // eslint-disable-next-line
  }, [match.params.playerid]); // I'm having a lot of trouble with dependency array

  console.log(user);
  return (
    <div>
      <h1> Page</h1>
    </div>
  );
};

export default UserDetails;
