import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import R6State from './r6Context/R6State';

function App() {
  return (
    <Router>
      <R6State>
        <Switch>
          <Route exact path='/'>
            <Search />
            <Users />
          </Route>
          <Route exact path='/user/:playerid' component={UserDetails}></Route>
          <Route path='/'>404</Route>
        </Switch>
      </R6State>
    </Router>
  );
}

export default App;
