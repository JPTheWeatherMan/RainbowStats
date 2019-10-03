import React from 'react';
import BackgroundImage from '../img/rainbow.jpg';

const Background = () => {
  let styles = {
    backgroundStyle: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      zIndex: '-1',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  };

  return (
    <img
      style={styles.backgroundStyle}
      src={BackgroundImage}
      alt={'background'}
    ></img>
  );
};

export default Background;
