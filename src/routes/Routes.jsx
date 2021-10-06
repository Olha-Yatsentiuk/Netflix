import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp, Favourites } from '../pages';
import * as ROUTES from './PageRoutes';
import { IsUserRedirect, ProtectedRoute } from './helpers';
import { useAuthListener } from '../hooks';

export function Routes() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>


        <ProtectedRoute user={user} path={ROUTES.FAVOURITES}>
          <Favourites />
        </ProtectedRoute>
        {/* <IsUserRedirect user={user} loggedInPath={ROUTES.FAVOURITES} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect> */}


      </Switch>
    </Router>
  );
}