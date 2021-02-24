import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from 'components/Navigation';

import Home from 'routes/Home';
import Auth from 'routes/Auth';
import Profile from 'routes/Profile';

const RootRouter =  ({ isLoggedIn }) => {
  return (
    <Router>
      { isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          </>
        ) : (
          <Route exact path='/'>
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  )
}

export default RootRouter;