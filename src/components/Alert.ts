import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: ({ colorScheme }) => ({
    container: {
      borderWidth: '1px',
      borderColor: `${colorScheme}.default`,
    },
  }),
  parts: ['container', 'icon'],
  variants: {
    solid: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.50`,
        color: 'black',
      },
      icon: {
        color: `${colorScheme}.500`,
      },
    }),
    subtle: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.default`,
      },
    }),
  },
} as ComponentStyleConfig;
