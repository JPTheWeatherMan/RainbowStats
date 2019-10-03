import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography
} from '../../node_modules/@material-ui/core';
import UserItem from './UserItem';
import R6Context from '../r6Context/R6Context';
import Loader from '../components/Loader';

const Users = () => {
  const styles = {
    layoutStyle: {
      width: '60%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  };

  const r6Context = useContext(R6Context);

  const { loading, users } = r6Context;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div style={styles.layoutStyle}>
        {users.map(user => (
          <UserItem key={user.p_id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
