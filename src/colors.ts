import { theme } from '@chakra-ui/react';

const yellow = {
  10: '#FEFED7',
  20: '#FCFCA6',
  30: '#FAFB79',
  40: '#F8F862',
  50: '#F8F93F',
  60: '#F6F709',
  70: '#C1C206',
  80: '#757000',
  90: '#555503',
};

const blue = {
  10: '#D0EFFF',
  20: '#7BCBFD',
  30: '#53BCFD',
  40: '#2AACFC',
  50: '#039CFB',
  60: '#027AC4',
  70: '#02578C',
  80: '#013555',
  90: '#00121D',
};

const green = {
  10: '#CCFFEE',
  20: '#CCFFEE',
  30: '#4EF4BC',
  40: '#28F2AE',
  50: '#0EE39B',
  60: '#0AAA74',
  70: '#077953',
  80: '#04442F',
  90: '#01100B',
};

const orange = {
  10: '#FFEDDD',
  20: '#FFDDC1',
  30: '#FFDDC1',
  40: '#FFB070',
  50: '#FF9A47',
  60: '#FF7B0F',
  70: '#E66900',
  80: '#9E4700',
  90: '#662E00',
};

const red = {
  10: '#FFE0E1',
  20: '#FEC3C5',
  30: '#FDA3A6',
  40: '#FD7B7F',
  50: '#FC5358',
  60: '#DF383D',
  70: '#D3040A',
  80: '#A40308',
  90: '#6D0205',
};

const purple = {
  10: '#F5EEFF',
  20: '#DEC6FF',
  30: '#C79DFE',
  40: '#B075FE',
  50: '#994CFE',
  60: '#7914FE',
  70: '#5E01D9',
  80: '#4601A1',
  90: '#2E0169',
};

const gray = {
  10: '#F8F8F8',
  20: '#EBEBEB',
  30: '#C4C4C4',
  40: '#ADADAD',
  50: '#888888',
  60: '#6D6D6D',
  70: '#525252',
  80: '#444444',
  90: '#363636',
  100: '#202020',
};

const white = {
  10: '#FFFFFF1A',
  30: '#FFFFFF4D',
  50: '#FFFFFF80',
  70: '#FFFFFFB2',
  100: '#FFFFFF',
};

const blackTransparent = {
  10: '#0000001A',
  30: '#0000004D',
  50: '#00000080',
  70: '#000000B2',
  100: '#000000',
};

export default {
  ...theme.colors,

  // Legacy
  black: {
    default: gray[100],
    hover: '#3e3b4c',
    depressed: '#6d6b77',
    light: '#ccccce',
    lighter: '#e4e4e4',
    lightest: '#f0f0ef',
  },
  whitePure: '#FFFFFF',
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
    default: gray[60],
    hover: '#7f7b74',
    depressed: '#9e9b95',
    light: '#dddcd8',
    lighter: '#ecece9',
    lightest: '#f4f4f2',
  },

  // New
  brand: {
    yellow: yellow[50],
    black: gray[100],
    gray: '#F4F4F4',
    white: white[100],
  },
  yellow,
  blue,
  green,
  orange,
  red,
  purple,
  white,
  blackTransparent,
};
