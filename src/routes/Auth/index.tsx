import { FC } from 'react';

import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import AuthLayout from 'src/layouts/Auth';
import { RootState } from 'src/store/ducks/index';

import ExtendedRouteProps from '../interfaces/ExtendedRouteProps';

const Auth: FC<ExtendedRouteProps> = ({
  component: Component,
  title,
  ...rest
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        !isAuthenticated ? (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <AuthLayout>
              <Component {...props} />
            </AuthLayout>
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default Auth;
