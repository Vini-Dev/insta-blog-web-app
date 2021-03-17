import defaultTheme from './_defaultTheme';
import avatar from './avatar';
import button from './button';
import checkbox from './checkbox';
import input from './input';
import modal from './modal';
import sideNavigation from './sideNavigation';
import table from './table';
import text from './text';
import topNavigation from './topNavigation';

export const theme = {
  ...defaultTheme,
  avatar,
  border: '#eeeeee',
  button,
  checkbox,
  input,
  modal,
  sideNavigation,
  table,
  text,
  topNavigation,
};

type ThemeType = {
  theme: typeof theme;
};

export type { ThemeType };
