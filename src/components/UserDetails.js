import React, { useContext, useEffect, Fragment } from 'react';
import R6Context from '../r6Context/R6Context';
import { Typography, Card, CardContent } from '@material-ui/core';

const UserDetails = ({ match }) => {
  const r6context = useContext(R6Context);
  const { user, getUser, loading } = r6context;

  useEffect(() => {
    async function fetchData() {
      await getUser(match.params.playerid);
    }
    fetchData(); // eslint-disable-next-line
  }, [match.params.playerid]); // I'm having a lot of trouble with dependency array

  if (loading) {
    return <div>loading</div>;
  } else {
    console.log(user);
    return (
      <Fragment>
        <Card>
          <CardHeader-title>
            <Typography>{user.p_name}</Typography>
          </CardHeader-title>
          <CardContent>
            <Typography>Level: {user.p_level}</Typography>
            <Typography>Kill/Death: {user.kd}</Typography>
            <Typography>Platform: {user.p_platform}</Typography>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
};

export default UserDetails;
