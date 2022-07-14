import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  parts: ['container', 'icon'],
  baseStyle: ({ colorScheme }) => ({
    container: {
      borderWidth: '1px',
      borderColor: `${colorScheme}.500`,
    },
  }),
  variants: {
    subtle: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.50`,
      },
    }),
    solid: ({ colorScheme }) => ({
      container: {
        color: 'black',
        bgColor: `${colorScheme}.50`,
      },
      icon: {
        color: `${colorScheme}.500`,
      },
    }),
  },
} as ComponentStyleConfig;
