import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Typography
} from '../../node_modules/@material-ui/core';

const UserItem = ({ user: { p_name, p_level, p_platform, p_id } }) => {
  return (
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
        <Button variant='contained' color='primary'>
          <Link to={`/user/${p_id}`} p_id={p_id}>
            Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserItem;
