import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography
} from '../../node_modules/@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      width: '70%',
      textAlign: 'center',
      margin: '20px'
    },
    [theme.breakpoints.up('md')]: {
      width: '15%',
      textAlign: 'center',
      margin: '20px'
    }
  }
});

const UserItem = props => {
  const { p_name, p_level, p_platform, p_id } = props.user;
  const { classes } = props;

  return (
    <Card className={classes.root}>
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

export default withStyles(styles)(UserItem);
