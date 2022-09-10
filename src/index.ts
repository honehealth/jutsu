import { DEFAULT_THEME, type MantineTheme } from '@mantine/core';

import colors, { black } from './colors';
import components from './components';

const theme: MantineTheme = {
  ...DEFAULT_THEME,

  // Colors
  black,
  colors,
  primaryColor: 'yellow',
  
  // Fonts
  fontFamily: 'InterVariable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  
  headings: {
    fontFamily: 'MontserratVariable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: 'normal',
    sizes: {
      h1: { fontSize: '2rem', lineHeight: '1.2', fontWeight: 300 },
      h2: { fontSize: '1.75rem', lineHeight: '1.2', fontWeight: 300 },
      h3: { fontSize: '1.5rem', lineHeight: '1.2', fontWeight: 300 },
      h4: { fontSize: '1.25rem', lineHeight: '1.2', fontWeight: 400 },
      h5: { fontSize: '1.25rem', lineHeight: '1.2', fontWeight: 400 },
      h6: { fontSize: '1rem', lineHeight: '1', fontWeight: 300 },
    },
  },
  
  // Components
  components,
};

export default theme;
