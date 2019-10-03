import React from 'react';
import { AppBar, Button } from '@material-ui/core';

const Navbar = () => {
  const styles = {
    mainStyle: {
      width: '100%',
      height: '10vh',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center'
    },
    navLinkStyle: {
      width: '15%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  };

  return (
    <AppBar style={styles.mainStyle} position='sticky'>
      <h1>JP</h1>
      <ul style={styles.navLinkStyle}>
        <Button variant='contained' size='medium' href='/'>
          Home
        </Button>
        <Button variant='contained' size='medium' href='/About'>
          About
        </Button>
      </ul>
    </AppBar>
  );
};

export default Navbar;
