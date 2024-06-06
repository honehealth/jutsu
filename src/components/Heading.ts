import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    fontFamily: 'DM Sans Variable',
  },
  sizes: {
    xs: {
      fontSize: '1rem',
      fontWeight: 'light',
      lineHeight: '1',
    },
    sm: {
      fontSize: '1.25rem',
      fontWeight: 'normal',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
    md: {
      fontSize: '1.5rem',
      fontWeight: 'normal',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
    lg: {
      fontSize: '1.5rem',
      fontWeight: 'light',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
    xl: {
      fontSize: '2rem',
      fontWeight: 'light',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
  },
  variants: {
    title: ({ size }) => {
      let fontSize = '1rem';

      if (size === 'sm') {
        fontSize = '0.75rem';
      } else if (size === 'lg') {
        fontSize = '1.25rem';
      }

      return {
        fontSize,
        fontWeight: 'normal',
        letterSpacing: '0.20rem',
        textTransform: 'uppercase',
      };
    },
  },
} as ComponentStyleConfig;
