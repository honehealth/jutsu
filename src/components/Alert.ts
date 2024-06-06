import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: ({ colorScheme }) => ({
    container: {
      borderWidth: '1px',
      borderColor: `${colorScheme}.500`,
    },
  }),
  parts: ['container', 'icon'],
  variants: {
    subtle: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.50`,
      },
    }),
    solid: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.50`,
        color: 'black',
      },
      icon: {
        color: `${colorScheme}.500`,
      },
    }),
  },
} as ComponentStyleConfig;
