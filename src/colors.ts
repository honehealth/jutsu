import { defineTokens } from '@chakra-ui/react';

export const colors = defineTokens.colors({
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
});
