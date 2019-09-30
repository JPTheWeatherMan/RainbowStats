import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetailsPage from './pages/UserDetailsPage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import R6State from './r6Context/R6State';

function App() {
  return (
    <R6State>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/:playerid' component={UserDetailsPage} />
          <Route exact path='/About' component={About} />
          <Route path='/' component={NotFound} />
        </Switch>
      </Router>
    </R6State>
  );
}

export default App;
