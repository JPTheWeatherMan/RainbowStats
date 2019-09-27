import React, { Fragment, useContext } from 'react';
import {
  Card,
  CardContent,
  Typography
} from '../../node_modules/@material-ui/core';
import UserItem from './UserItem';
import R6Context from '../r6Context/R6Context';

const Users = () => {
  const r6Context = useContext(R6Context);

  const { loading, users } = r6Context;

  if (loading) {
    return (
      // placeholder
      <Card>
        <CardContent>
          <Typography>loading</Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Fragment>
        {users.map(user => (
          <UserItem key={user.p_id} user={user} />
        ))}
      </Fragment>
    );
  }
};

export default Users;
