import React, { useContext, useEffect } from 'react';
import R6Context from '../r6Context/R6Context';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import Loader from '../components/Loader';

const UserDetails = playerid => {
  const r6context = useContext(R6Context);
  const { user, getUser, loading } = r6context;

  const styles = {
    layoutStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '20px'
    },
    cardStyle: {
      width: '25%',
      textAlign: 'center'
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getUser(playerid);
    }
    fetchData(); // eslint-disable-next-line
  }, []); // I'm having a lot of trouble with dependency array

  if (loading || !user.seasonal) {
    return <Loader />;
  } else {
    console.log(user.seasonal);
    return (
      <div style={styles.layoutStyle}>
        <Card style={styles.cardStyle}>
          <CardHeader title={user.p_name + "'s General Stats"}></CardHeader>
          <CardContent>
            <Typography>Level: {user.p_level}</Typography>
            <Typography>Kill/Death: {user.kd / 100}</Typography>
            <Typography>Platform: {user.p_platform}</Typography>
            <Typography>
              Favorite Game Mode: {user.seasonal.favorite_mode}
            </Typography>
            <Typography>Bomb Wins: {user.seasonal.bomb_wins}</Typography>
            <Typography>Bomb Losses: {user.seasonal.bomb_losses}</Typography>
            <Typography>
              Secure Area Wins: {user.seasonal.secure_wins}
            </Typography>
            <Typography>
              Secure Area Losses: {user.seasonal.secure_losses}
            </Typography>
          </CardContent>
        </Card>
        <Card style={styles.cardStyle}>
          <CardHeader title={user.p_name + "'s Ranked Stats"}></CardHeader>
          <CardContent>
            <Typography>Current MMR: {user.seasonal.current_NA_mmr}</Typography>
            <Typography>
              Last Season MMR: {user.seasonal.last_NA_mmr}
            </Typography>
            <Typography>Kills: {user.seasonal.total_rankedkills}</Typography>
            <Typography>Deaths: {user.seasonal.total_rankeddeaths}</Typography>
            <Typography>
              Total Games: {user.seasonal.total_rankedtotal}
            </Typography>
            <Typography>Wins: {user.seasonal.total_rankedwins}</Typography>
            <Typography>Losses: {user.seasonal.total_rankedlosses}</Typography>
          </CardContent>
        </Card>
        <Card style={styles.cardStyle}>
          <CardHeader title={user.p_name + "'s Casual Stats"}></CardHeader>
          <CardContent>
            <Typography>Kills: {user.seasonal.total_casualkills}</Typography>
            <Typography>Deaths: {user.seasonal.total_casualdeaths}</Typography>
            <Typography>
              Total Games: {user.seasonal.total_casualtotal}
            </Typography>
            <Typography>Wins: {user.seasonal.total_casualwins}</Typography>
            <Typography>Losses: {user.seasonal.total_casuallosses}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default UserDetails;
