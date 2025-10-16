import { defineSemanticTokens, defineTokens } from '@chakra-ui/react';

export const colors = defineTokens.colors({
  white: { value: '#fcfcfa' },
  whitePure: { value: '#ffffff' },
  yellow: {
    10: { value: '#FEFED7' },
    20: { value: '#FCFCA6' },
    30: { value: '#FAFB79' },
    40: { value: '#F8F862' },
    50: { value: '#F8F93F' },
    60: { value: '#F6F709' },
    70: { value: '#C1C206' },
    80: { value: '#757000' },
    90: { value: '#555503' },
  },
  blue: {
    10: { value: '#D0EFFF' },
    20: { value: '#7BCBFD' },
    30: { value: '#53BCFD' },
    40: { value: '#2AACFC' },
    50: { value: '#039CFB' },
    60: { value: '#027AC4' },
    70: { value: '#02578C' },
    80: { value: '#013555' },
    90: { value: '#00121D' },
  },
  green: {
    10: { value: '#9BF9D9' },
    20: { value: '#75F6CB' },
    30: { value: '#4EF4BC' },
    40: { value: '#28F2AE' },
    50: { value: '#0EE39B' },
    60: { value: '#0BAE77' },
    70: { value: '#077953' },
    80: { value: '#04442F' },
    90: { value: '#01100B' },
  },
  orange: {
    10: { value: '#FFEDDD' },
    20: { value: '#FFDDC1' },
    30: { value: '#FFC799' },
    40: { value: '#FFB070' },
    50: { value: '#FF9A47' },
    60: { value: '#FF7B0F' },
    70: { value: '#E66900' },
    80: { value: '#9E4700' },
    90: { value: '#662E00' },
  },
  red: {
    10: { value: '#FFE0E1' },
    20: { value: '#FEC3C5' },
    30: { value: '#FDA3A6' },
    40: { value: '#FD7B7F' },
    50: { value: '#FC5358' },
    60: { value: '#FB1C22' },
    70: { value: '#D3040A' },
    80: { value: '#A40308' },
    90: { value: '#6D0205' },
  },
  purple: {
    10: { value: '#F5EEFF' },
    20: { value: '#DEC6FF' },
    30: { value: '#C79DFE' },
    40: { value: '#B075FE' },
    50: { value: '#994CFE' },
    60: { value: '#7914FE' },
    70: { value: '#5E01D9' },
    80: { value: '#4601A1' },
    90: { value: '#2E0169' },
  },
  gray: {
    10: { value: '#F8F8F8' },
    20: { value: '#EBEBEB' },
    30: { value: '#C4C4C4' },
    40: { value: '#ADADAD' },
    50: { value: '#888888' },
    60: { value: '#6D6D6D' },
    70: { value: '#525252' },
    80: { value: '#444444' },
    90: { value: '#363636' },
    100: { value: '#202020' },
  },
  black: {
    10: { value: '#0000001A' },
    30: { value: '#0000004D' },
    50: { value: '#00000080' },
    70: { value: '#000000B2' },
    100: { value: '#000000' },
  },
});

export const semanticColors = defineSemanticTokens.colors({
  brand: {
    yellow: { value: '{colors.yellow.50}' },
    black: { value: '{colors.black.100}' },
    gray: { value: '{colors.gray.10}' },
    white: { value: '{colors.whitePure}' },
  },

  transparent: {
    10: { value: '#FFFFFF1A' },
    30: { value: '#FFFFFF4D' },
    50: { value: '#FFFFFF80' },
    70: { value: '#FFFFFFB2' },
    100: { value: '#FFFFFF' },
  },

  text: {
    main: { value: 'colors.gray.100' },
    sub: { value: 'colors.gray.60' },
    optimal: { value: 'colors.green.70' },
    borderline: { value: 'colors.orange.80' },
    concern: { value: 'colors.red.80' },
    alert: { value: 'colors.red.80' },
    success: { value: 'colors.green.80' },
  },

  fg: {
    DEFAULT: { value: 'colors.gray.100' },
    sub: { value: 'colors.gray.60' },
    optimal: { value: 'colors.green.70' },
    borderline: { value: 'colors.orange.80' },
    concern: { value: 'colors.red.80' },
    alert: { value: 'colors.red.80' },
    success: { value: 'colors.green.80' },
  },

  bg: {
    DEFAULT: { value: 'colors.whitePure' },
    optimal: { value: 'colors.green.10' },
    borderline: { value: 'colors.orange.10' },
    concern: { value: 'colors.red.10' },
    alert: { value: 'colors.red.10' },
    success: { value: 'colors.green.10' },
  },

  success: { value: 'colors.green.50' },
  alert: { value: 'colors.red.50' },

  range: {
    optimal: { value: 'colors.green.50' },
    borderline: { value: 'colors.orange.50' },
    concern: { value: 'colors.red.50' },
  },

  gradient: {
    range: {
      full: {
        value:
          'linear-gradient(90deg, #FC5358 0%, #FF6B49 14.29%, #FF833A 28.57%, #FF9A47 42.86%, #E7B513 57.14%, #C3CB2E 71.43%, #76DA62 85.71%, #0EE39B 100%)',
      },
      conernBorderline: {
        value:
          'linear-gradient(90deg, #FC5358 0%, #FF5F51 14.29%, #FF6B49 28.57%, #FF7742 42.86%, #FF833A 57.14%, #FF8F32 71.43%, #FF9B2A 85.71%, #FF9A47 100%)',
      },
      borderlineConcern: {
        value:
          'linear-gradient(90deg, #FF9A47 0%, #E7B513 14.29%, #CDC419 28.57%, #B2CB2E 42.86%, #95D447 57.14%, #76DA62 71.43%, #51DF87 85.71%, #0EE39B 100%)',
      },
    },
  },

  // Legacy colors
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
});
