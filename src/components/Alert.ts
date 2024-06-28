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
        bgColor: `${colorScheme}.default `,
        color: 'black',
      },
      icon: {
        color: `black`,
      },
    }),
    subtle: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.default`,
      },
    }),
  },
} as ComponentStyleConfig;
