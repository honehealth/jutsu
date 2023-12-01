import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    fontFamily: 'Montserrat Variable',
  },
  sizes: {
    xs: {
      fontWeight: 'light',
      fontSize: '1rem',
      lineHeight: '1',
    },
    sm: {
      fontWeight: 'normal',
      fontSize: '1.25rem',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
    md: {
      fontWeight: 'normal',
      fontSize: '1.5rem',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
    lg: {
      fontWeight: 'light',
      fontSize: '1.5rem',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
    xl: {
      fontWeight: 'light',
      fontSize: '2rem',
      letterSpacing: '0.05rem',
      lineHeight: '1.2',
    },
  },
  variants: {
    title: ({ size }) => ({
      fontSize: size === 'sm' ? '0.75rem' : size === 'lg' ? '1.25rem' : '1rem',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      letterSpacing: '0.20rem',
    }),
  },
} as ComponentStyleConfig;
