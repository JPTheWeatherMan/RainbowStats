import React from 'react';
import { CircleLoader } from 'react-spinners';
import { Card } from '@material-ui/core';

const Loader = () => {
  const styles = {
    loaderStyle: {
      margin: '20px auto',
      width: '6rem',
      height: '6rem'
    },
    circleStyle: {
      margin: '1.5rem auto'
    }
  };
  return (
    <Card style={styles.loaderStyle}>
      <CircleLoader css={styles.circleStyle} color='#3f51b5' />
    </Card>
  );
};

export default Loader;
