import React from 'react';
import { Switch } from 'react-router-dom';
import RouteItem from './components';
import ROUTES from './constants';

function Routes() {
  return (
    <Switch>
      {
        ROUTES.map(({ path, ...config }) => (
          <RouteItem
            key={path}
            path={path}
            {...config}
          />
        ))
      }
    </Switch>
  );
}

export default Routes;
