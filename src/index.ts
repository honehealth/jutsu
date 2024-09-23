import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react';
import colors from './colors';
import components from './components';

export default extendTheme({
  colors,
  components,
  fonts: {
    body: 'DM Sans Variable',
    heading: 'DM Sans Variable',
  },
  initialColorMode: 'light',
  letterSpacings: {
    wide: '0.05rem',
    wider: '0.10rem',
    widest: '0.20rem',
  },
  sizes: {
    ...baseTheme.space,
    screen: {
      height: '100vh',
      width: '100vw',
    },
  },
  shadows: {
    xs: '0px 2px 4px 0px rgba(234, 234, 234, 0.1)',
    sm: '0px 2px 8px 0px rgba(234, 234, 234, 0.2)',
    base: '0px 4px 16px 0px rgba(234, 234, 234, 0.25)',
    md: '0px 4px 16px 0px rgba(234, 234, 234, 0.25)',
    lg: '0px 4px 16px 0px rgba(234, 234, 234, 0.25)',
    xl: '0px 4px 16px 0px rgba(234, 234, 234, 0.25)',
    '2xl': '0px 4px 16px 0px rgba(234, 234, 234, 0.25)',
  },
  useSystemColorMode: false,
} as ThemeConfig);
