import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: `'DM Sans', sans` },
        heading: { value: `'DM Sans', sans` },
      },
      letterSpacings: {
        tighter: { value: '-0.10rem' },
        tight: { value: '-0.05rem' },
        wide: { value: '0.05rem' },
        wider: { value: '0.10rem' },
        widest: { value: '0.20rem' },
      },
      colors: {
        white: { value: '#fcfcfa' },
        whitePure: { value: '#ffffff' },
        red: {
          default: { value: '#f52c5e' },
          light: { value: '#ffeaef' },
        },
        orange: {
          default: { value: '#f6752d' },
        },
        yellow: {
          default: { value: '#F8F93F' },
          hover: { value: '#edee3a' },
          pressed: { value: '#e1e25e' },
        },
        green: {
          default: { value: '#1e9c5b' },
          light: { value: '#cbf2df' },
        },
        grayLight: { value: '#f1f0ef' },
        grayMid: {
          default: { value: '#d2cec4' },
          hover: { value: '#dad7cf' },
          depressed: { value: '#e3e0da' },
          light: { value: '#f4f3ef' },
          lighter: { value: '#f8f7f5' },
          lightest: { value: '#fafaf7' },
        },
        grayDark: {
          default: { value: '#6D6D6D' },
          hover: { value: '#7f7b74' },
          depressed: { value: '#9e9b95' },
          light: { value: '#dddcd8' },
          lighter: { value: '#ecece9' },
          lightest: { value: '#f4f4f2' },
        },
        black: {
          default: { value: '#202020' },
          hover: { value: '#3e3b4c' },
          depressed: { value: '#6d6b77' },
          light: { value: '#ccccce' },
          lighter: { value: '#e4e4e4' },
          lightest: { value: '#f0f0ef' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: { value: '{colors.yellow}' },
      },
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
  },
});
