import { lighten } from 'polished';

import { colors } from './_defaultTheme';

export default {
  disabled: {
    foreground: '#ffffff',
    border: '#8E8E93',
    background: '#8E8E93',
  },
  line: {
    default: {
      foreground: colors.gray6,
      hover: {
        foreground: colors.gray2,
      },
    },
    error: {
      foreground: colors.error,
      hover: {
        foreground: lighten(0.1, colors.error),
      },
    },
    info: {
      foreground: colors.info,
      hover: {
        foreground: lighten(0.1, colors.info),
      },
    },
    primary: {
      foreground: colors.primary,
      hover: {
        foreground: lighten(0.1, colors.primary),
      },
    },
    secondary: {
      foreground: colors.secondary,
      hover: {
        foreground: lighten(0.1, colors.secondary),
      },
    },
    success: {
      foreground: colors.success,
      hover: {
        foreground: lighten(0.1, colors.success),
      },
    },
    warning: {
      foreground: colors.warning,
      hover: {
        foreground: lighten(0.1, colors.warning),
      },
    },
  },
  normal: {
    default: {
      foreground: colors.gray6,
      border: 'transparent',
      background: 'transparent',
      hover: {
        foreground: colors.gray3,
        border: 'transparent',
        background: 'transparent',
      },
    },
    error: {
      foreground: '#ffffff',
      border: colors.error,
      background: colors.error,
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.error),
        background: lighten(0.1, colors.error),
      },
    },
    info: {
      foreground: '#ffffff',
      border: colors.info,
      background: colors.info,
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.info),
        background: lighten(0.1, colors.info),
      },
    },
    primary: {
      foreground: '#ffffff',
      border: colors.primary,
      background: colors.primary,
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.primary),
        background: lighten(0.1, colors.primary),
      },
    },
    secondary: {
      foreground: '#ffffff',
      border: colors.secondary,
      background: colors.secondary,
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.secondary),
        background: lighten(0.1, colors.secondary),
      },
    },
    success: {
      foreground: '#ffffff',
      border: colors.success,
      background: colors.success,
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.success),
        background: lighten(0.1, colors.success),
      },
    },
    warning: {
      foreground: '#ffffff',
      border: colors.warning,
      background: colors.warning,
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.warning),
        background: lighten(0.1, colors.warning),
      },
    },
  },
  outline: {
    error: {
      foreground: colors.error,
      border: colors.error,
      background: 'transparent',
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.error),
        background: lighten(0.1, colors.error),
      },
    },
    info: {
      foreground: colors.info,
      border: colors.info,
      background: 'transparent',
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.info),
        background: lighten(0.1, colors.info),
      },
    },
    primary: {
      foreground: colors.primary,
      border: colors.primary,
      background: 'transparent',
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.primary),
        background: lighten(0.1, colors.primary),
      },
    },
    secondary: {
      foreground: colors.secondary,
      border: colors.secondary,
      background: 'transparent',
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.secondary),
        background: lighten(0.1, colors.secondary),
      },
    },
    success: {
      foreground: colors.success,
      border: colors.success,
      background: 'transparent',
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.success),
        background: lighten(0.1, colors.success),
      },
    },
    warning: {
      foreground: colors.warning,
      border: colors.warning,
      background: 'transparent',
      hover: {
        foreground: '#ffffff',
        border: lighten(0.1, colors.warning),
        background: lighten(0.1, colors.warning),
      },
    },
  },
};
