import React, { useContext } from 'react';
import UserItem from './UserItem';
import R6Context from '../r6Context/R6Context';
import Loader from '../components/Loader';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      width: '60%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
});

const Users = props => {
  const r6Context = useContext(R6Context);

  const { loading, users } = r6Context;

  const { classes } = props;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className={classes.root}>
        {users.map(user => (
          <UserItem key={user.p_id} user={user} />
        ))}
      </div>
    );
  }
};

export default withStyles(styles)(Users);
