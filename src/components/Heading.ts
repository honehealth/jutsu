import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    fontFamily: 'DM Sans',
  },
  sizes: {
    '2xs': {
      fontSize: '11px',
      fontWeight: 'bold',
      letterSpacing: '-2%',
      lineHeight: '100%',
    },
    xs: {
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: '-2%',
      lineHeight: '100%',
    },
    sm: {
      fontSize: '16px',
      fontWeight: 'regular',
      letterSpacing: '-2%',
      lineHeight: '100%',
    },
    md: {
      fontSize: '18px',
      fontWeight: 'medium',
      letterSpacing: '-2%',
      lineHeight: '100%',
    },
    lg: {
      fontSize: '22px',
      fontWeight: 'medium',
      lineHeight: '1.2',
      letterSpacing: '0.05rem',
    },
    xl: {
      fontSize: '28px',
      fontWeight: 'regular',
      letterSpacing: '-2%',
      lineHeight: '100%',
    },
    '2xl': {
      fontSize: '32px',
      fontWeight: 'regular',
      letterSpacing: '-2%',
      lineHeight: '100%',
      marginBottom: '32px',
    },
  },
  variants: {
    heading: {},
    display: {
      fontFamily: 'STIX Two Text, Times',
      fontWeight: 400,
    },
  },
} as ComponentStyleConfig;
