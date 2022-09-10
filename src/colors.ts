import { DEFAULT_THEME, type MantineThemeColors } from '@mantine/core'; 

export const black = '#161919';

const yellow = [
  '#fff8e3',
  '#fff1c8',
  '#ffeaad',
  '#ffe291',
  '#ffdb76',
  '#ffd45a',
  '#ffc215',
  '#cf9900',
  '#8a6600',
  '#453300',
];

export default {
  ...DEFAULT_THEME.colors,
  yellow,
  red: [
    '#fde6e3',
    '#fbcdc7',
    '#f9b4ab',
    '#f79b8e',
    '#f58272',
    '#f36956',
    '#ef3219',
    '#b8220d',
    '#7b1709',
    '#3d0b04',
  ],
  green: [
    '#e2faf6',
    '#c4f6ed',
    '#a7f1e4',
    '#89ecda',
    '#6ce8d1',
    '#4ee3c8',
    '#21d3b3',
    '#199e86',
    '#116959',
    '#08352d',
  ],
} as MantineThemeColors;
