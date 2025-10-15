import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import recipes from './recipes/index';
import { colors, semanticColors } from './colors';
import { textStyles } from './text';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: `'DM Sans', sans` },
        heading: { value: `'DM Sans', sans` },
        display: { value: `'STIX Two Text', sans-serif` },
      },
      letterSpacings: {
        tighter: { value: '-0.10rem' },
        tight: { value: '-0.05rem' },
        wide: { value: '0.05rem' },
        wider: { value: '0.10rem' },
        widest: { value: '0.20rem' },
      },
      colors,
    },
    semanticTokens: {
      colors: semanticColors,
      shadows: {
        xs: { value: '0px 2px 4px 0px rgba(234, 234, 234, 0.1)' },
        sm: { value: '0px 2px 8px 0px rgba(234, 234, 234, 0.2)' },
        base: { value: '0px 4px 16px 0px rgba(234, 234, 234, 0.25)' },
        md: { value: '0px 4px 16px 0px rgba(234, 234, 234, 0.25)' },
        lg: { value: '0px 8px 18px 0px rgba(234, 234, 234, 0.25)' },
        xl: { value: '0px 6px 20px 0px rgba(234, 234, 234, 0.35)' },
        '2xl': { value: '0px 6px 24px 0px rgba(234, 234, 234, 0.35)' },
      },
    },
    textStyles,
    recipes,
  },
});

export default createSystem(defaultConfig, config);
