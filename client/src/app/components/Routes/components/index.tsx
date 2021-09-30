import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

function RouteItem({ ...config }: Props) {
  return <Route {...config} />;
}

export default RouteItem;