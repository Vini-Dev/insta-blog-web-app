import { lighten } from 'polished';

import { colors, primary } from './_defaultTheme';

export default {
  shadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
  background: '#ffffff',
  link: {
    normal: { foreground: colors.gray3, background: 'transparent' },
    hover: { foreground: primary, background: 'transparent' },
    active: { foreground: primary, background: lighten(0.45, primary) },
  },
  user: {
    icon: {
      foreground: colors.gray1,
      background: '#f5f5f5',
    },
  },
};
