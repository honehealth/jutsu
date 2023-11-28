import { theme as baseTheme } from '@chakra-ui/react';

const yellow = {
  50: '#fff8e3',
  100: '#fff1c8',
  200: '#ffeaad',
  300: '#ffe291',
  400: '#ffdb76',
  500: '#ffd45a',
  600: '#ffc215',
  700: '#cf9900',
  800: '#8a6600',
  900: '#453300',
};

export default {
  ...baseTheme.colors,
  black: '#161919',
  brand: yellow,
  yellow,
  red: {
    50: '#fde6e3',
    100: '#fbcdc7',
    200: '#f9b4ab',
    300: '#f79b8e',
    400: '#f58272',
    500: '#f36956',
    600: '#ef3219',
    700: '#b8220d',
    800: '#7b1709',
    900: '#3d0b04',
  },
  green: {
    50: '#e2faf6',
    100: '#c4f6ed',
    200: '#a7f1e4',
    300: '#89ecda',
    400: '#6ce8d1',
    500: '#4ee3c8',
    600: '#21d3b3',
    700: '#199e86',
    800: '#116959',
    900: '#08352d',
  },
};
