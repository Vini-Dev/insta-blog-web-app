import { lighten } from 'polished';

import { colors } from './_defaultTheme';

export default {
  normal: {
    foreground: '#1c1c1e',
    border: '#eeeeee',
    background: '#fafafa',
    icon: 'transparent',
    focus: {
      border: '#e0e0e0',
    },
  },
  checked: {
    foreground: '#1c1c1e',
    border: colors.primary,
    background: colors.primary,
    icon: '#ffffff',
    focus: {
      border: lighten(0.1, colors.primary),
      background: lighten(0.1, colors.primary),
    },
  },
};
