import React, { Fragment } from 'react';
import {
  Card,
  CardContent,
  Typography
} from '../../node_modules/@material-ui/core';

const UserItem = ({ user: { p_name, p_level, p_platform, p_user } }) => {
  return (
    <Fragment>
      <Card>
        <CardHeader-title>
          <Typography>{p_name}</Typography>
        </CardHeader-title>
        <CardContent>
          <Typography>
            Level:
            {p_level}
          </Typography>
          <Typography>Platform: {p_platform}</Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default UserItem;
