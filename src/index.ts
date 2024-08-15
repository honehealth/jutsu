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
  useSystemColorMode: false,
} as ThemeConfig);
