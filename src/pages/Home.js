import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Users from '../components/Users';
import Background from '../components/Background';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Background />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
