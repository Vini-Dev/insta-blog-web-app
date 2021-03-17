import { FC } from 'react';

import AuthPages from '../pages/Auth';
import PrivatePages from '../pages/Private';
import PublicPages from '../pages/Public';

export interface RouteInterface {
  exact?: boolean;
  component: FC;
  label: string;
  path: string;
  title?: string;
  type: 'auth' | 'private' | 'public';
}

export const authRoutes: RouteInterface[] = [
  {
    exact: true,
    component: AuthPages.Login,
    label: 'Login',
    path: '/login',
    type: 'auth',
  },
  {
    exact: true,
    component: AuthPages.CreateAccount,
    label: 'Create Account',
    path: '/create-account',
    type: 'auth',
  },
];

export const privateRoutes: RouteInterface[] = [
  {
    exact: true,
    component: PrivatePages.Home,
    label: 'Home',
    path: '/',
    type: 'private',
  },
  {
    exact: true,
    component: PrivatePages.Likes,
    label: 'Likes',
    path: '/likes',
    type: 'private',
  },
  {
    exact: true,
    component: PrivatePages.Profile,
    label: 'Profile',
    path: '/profile',
    type: 'private',
  },
];

export const publicRoutes: RouteInterface[] = [
  {
    component: PublicPages.NotFound,
    label: '404',
    path: '*',
    type: 'public',
  },
];

export default [...authRoutes, ...privateRoutes, ...publicRoutes];
