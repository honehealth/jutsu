import { theme } from '@chakra-ui/react';

const yellow = {
  default: '#F8F93F',
  hover: '#edee3a',
  pressed: '#e1e25e',
};

export default {
  ...theme.colors,
  brand: yellow,
  white: '#fcfcfa',
  whitePure: '#ffffff',
  red: {
    default: '#f52c5e',
  },
  orange: {
    default: '#f6752d',
  },
  yellow,
  green: {
    default: '#4ff8a2',
  },
  grayLight: '#f1f0ef',
  grayMid: {
    default: '#d2cec4',
    hover: '#dad7cf',
    depressed: '#e3e0da',
    light: '#f4f3ef',
    lighter: '#f8f7f5',
    lightest: '#fafaf7',
  },
  grayDark: {
    default: '#605b52',
    hover: '#7f7b74',
    depressed: '#9e9b95',
    light: '#dddcd8',
    lighter: '#ecece9',
    lightest: '#f4f4f2',
  },
  black: {
    default: '#0e0b20',
    hover: '#3e3b4c',
    depressed: '#6d6b77',
    light: '#ccccce',
    lighter: '#e4e4e4',
    lightest: '#f0f0ef',
  },
};
