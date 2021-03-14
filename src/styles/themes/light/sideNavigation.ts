import { lighten } from 'polished';

import { colors, primary } from './_defaultTheme';

export default {
  background: '#fafafa',
  shadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;',
  link: {
    normal: { foreground: colors.gray3, background: 'transparent' },
    hover: { foreground: primary, background: 'transparent' },
    active: { foreground: primary, background: lighten(0.38, colors.gray1) },
  },
};
