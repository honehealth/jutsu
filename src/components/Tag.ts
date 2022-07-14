import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  parts: ['container'],
  baseStyle: {
    container: {
      letterSpacing: '0.1rem',
    },
  },
  variants: {
    solid: ({ colorScheme }) => ({
      container: {
        border: '1px',
        borderColor: `${colorScheme}.500`,
        backgroundColor: `${colorScheme}.50`,
        color: colorScheme === 'gray' ? 'gray.700' : 'black',
        fontWeight: 'normal',
      },
    }),
  },
  sizes: {
    sm: {
      container: {
        px: 2,
        borderRadius: 'xl',
      },
    },
    md: {
      container: {
        px: 3,
        borderRadius: 'xl',
      },
    },
    lg: {
      container: {
        px: 4,
        borderRadius: '2xl',
      },
    },
  },
} as ComponentStyleConfig;
