import React, { useContext, useEffect } from 'react';
import R6Context from '../r6Context/R6Context';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import Loader from '../components/Loader';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '20px'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: '20px'
    }
  },
  card: {
    [theme.breakpoints.down('md')]: {
      width: '70%',
      textAlign: 'center',
      margin: '20px auto'
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
      textAlign: 'center'
    }
  }
});

const UserDetails = props => {
  const r6context = useContext(R6Context);
  const { user, getUser, loading } = r6context;
  const { playerid, classes } = props;

  useEffect(() => {
    async function fetchData() {
      await getUser(playerid);
    }
    fetchData(); // eslint-disable-next-line
  }, []); // I'm having a lot of trouble with dependency array

  if (loading || !user.seasonal) {
    return <Loader />;
  } else {
    return (
      <div className={classes.layout}>
        <Card className={classes.card}>
          <CardHeader title={user.p_name + "'s General Stats"}></CardHeader>
          <CardContent>
            <Typography>Level: {user.p_level}</Typography>
            <Typography>Win/Loss Ratio: {user.kd / 100}</Typography>
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
        <Card className={classes.card}>
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
        <Card className={classes.card}>
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

export default withStyles(styles)(UserDetails);
