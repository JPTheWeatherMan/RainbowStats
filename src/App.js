import React from 'react';
import Search from './components/Search';
import Users from './components/Users';
import R6State from './r6Context/R6State';

function App() {
  return (
    <R6State>
      <Search />
      <Users />
    </R6State>
  );
}

export default App;
