import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react';

import colors from './colors';
import components from './components';

const theme: Record<string, any> = extendTheme({
  colors,
  components,
  fonts: {
    heading: 'Montserrat Variable',
    body: 'Inter Variable',
  },
  letterSpacings: {
    wide: '0.05rem',
    wider: '0.10rem',
    widest: '0.20rem',
  },
  sizes: {
    ...baseTheme.space,
    screen: {
      width: '100vw',
      height: '100vh',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
} as ThemeConfig);

export default theme;
