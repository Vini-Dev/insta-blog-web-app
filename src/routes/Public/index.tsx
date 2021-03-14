import { FC } from 'react';

import Helmet from 'react-helmet';
import { Route, RouteComponentProps } from 'react-router-dom';
import PublicLayout from 'src/layouts/Public';

import ExtendedRouteProps from '../interfaces/ExtendedRouteProps';

const Public: FC<ExtendedRouteProps> = ({
  component: Component,
  title,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => (
        <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <PublicLayout>
            <Component {...props} />
          </PublicLayout>
        </>
      )}
    />
  );
};

export default Public;
