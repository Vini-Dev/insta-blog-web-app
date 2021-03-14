import { FC } from 'react';

import { RouteProps, RouteComponentProps } from 'react-router-dom';

export default interface ExtendedRouteProps extends RouteProps {
  component: FC<RouteComponentProps>;
  title: string;
}
