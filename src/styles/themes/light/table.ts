import { lighten } from 'polished';

import { primary } from './_defaultTheme';

export default {
  viewButton: {
    normal: { foreground: '#ffffff', background: primary },
    hover: { foreground: '#ffffff', background: lighten(0.1, primary) },
  },
};
