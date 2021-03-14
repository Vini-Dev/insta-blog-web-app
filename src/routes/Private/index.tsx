import { FC } from 'react';

import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import PrivateLayout from 'src/layouts/Private';
import { RootState } from 'src/store/ducks/index';

import ExtendedRouteProps from '../interfaces/ExtendedRouteProps';

const Private: FC<ExtendedRouteProps> = ({
  component: Component,
  title,
  ...rest
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        isAuthenticated ? (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <PrivateLayout>
              <Component {...props} />
            </PrivateLayout>
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default Private;
