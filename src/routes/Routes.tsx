import { FC } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoute from './Auth';
import routes from './index';
import PrivateRoute from './Private';
import PublicRoute from './Public';

const { REACT_APP_TITLE_PREFIX } = process.env;

const Routes: FC = () => {
  const mountTitle = (title?: string, label?: string): string => {
    const pageTitleSuffix = title || label || '';
    const pageTitle = `${REACT_APP_TITLE_PREFIX} - ${pageTitleSuffix}`;

    return pageTitle;
  };

  const createRoute = (route) => {
    // const key = route.type + route.path;

    const pageTitle = mountTitle(route.title, route.label);

    switch (true) {
      case route.type === 'private':
        return <PrivateRoute title={pageTitle} {...route} />;
      case route.type === 'public':
        return <PublicRoute title={pageTitle} {...route} />;

      default:
        return <AuthRoute title={pageTitle} {...route} />;
    }
  };

  return (
    <BrowserRouter>
      <Switch>{routes.map((route) => createRoute(route))}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
