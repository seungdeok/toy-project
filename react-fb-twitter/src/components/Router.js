import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from 'components/Navigation';

import Home from 'routes/Home';
import Auth from 'routes/Auth';
import Profile from 'routes/Profile';

const RootRouter =  ({ refreshUser, isLoggedIn, userInfo }) => {
  return (
    <Router>
      { isLoggedIn && <Navigation userInfo={userInfo} />}
      <Switch>
        {isLoggedIn ? (
          <>
          <Route exact path='/'>
            <Home userInfo={userInfo} />
          </Route>
          <Route exact path='/profile'>
            <Profile refreshUser={refreshUser} userInfo={userInfo} />
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