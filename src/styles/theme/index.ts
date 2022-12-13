import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { defaultThemeOverride } from './default-theme';

export const common = {
  breakpoints: {
    keys: ['mobile', 'tablet', 'laptop', 'desktop'],
    values: {
      mobile: 280,
      tablet: 768,
      laptop: 1025,
      desktop: 1201,
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontSize: '32px',
      '@media (min-width: 769px)': {
        fontSize: '64px',
      },
    },
    button: {
      textTransform: 'none',
    },
  },
};

export const defaultTemplate: ThemeOptions = deepmerge(
  defaultThemeOverride,
  common
);
