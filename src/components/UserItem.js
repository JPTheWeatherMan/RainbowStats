import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography
} from '../../node_modules/@material-ui/core';

const UserItem = ({ user: { p_name, p_level, p_platform, p_id } }) => {
  const styles = {
    cardStyle: {
      width: '15%',
      textAlign: 'center',
      margin: '20px'
    }
  };

  return (
    <Card style={styles.cardStyle}>
      <CardHeader-title>
        <Typography>{p_name}</Typography>
      </CardHeader-title>
      <CardContent>
        <Typography>
          Level:
          {p_level}
        </Typography>
        <Typography>Platform: {p_platform}</Typography>
        <Button
          variant='contained'
          color='primary'
          href={`/user/${p_id}`}
          p_id={p_id}
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserItem;
