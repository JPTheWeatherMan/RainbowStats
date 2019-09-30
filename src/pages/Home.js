import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Users from '../components/Users';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
