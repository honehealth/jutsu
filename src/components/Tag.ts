import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    container: {
      letterSpacing: '0.1rem',
    },
  },
  parts: ['container'],
  sizes: {
    sm: {
      container: {
        borderRadius: 'xl',
        px: 2,
      },
    },
    md: {
      container: {
        borderRadius: 'xl',
        px: 3,
      },
    },
    lg: {
      container: {
        borderRadius: '2xl',
        px: 4,
      },
    },
  },
  variants: {
    solid: ({ colorScheme }) => ({
      container: {
        backgroundColor: 'white',
        border: '1px',
        borderColor: `${colorScheme}.default`,
        color: colorScheme === 'gray' ? 'grayDark.default' : 'black.default',
        fontWeight: 'normal',
      },
    }),
  },
} as ComponentStyleConfig;
