import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import R6State from './r6Context/R6State';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/Home';
import UserDetailsPage from './pages/UserDetailsPage';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <R6State>
      <CssBaseline>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user/:playerid' component={UserDetailsPage} />
            <Route exact path='/About' component={About} />
            <Route path='/' component={NotFound} />
          </Switch>
        </Router>
      </CssBaseline>
    </R6State>
  );
}

export default App;
