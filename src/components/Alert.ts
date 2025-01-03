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
        bgColor: `${colorScheme}.light`,
        color: 'black',
      },
      icon: {
        color: `${colorScheme}.light`,
        bgColor:`${colorScheme}.default`,
        borderRadius: '10px',
        p:'1px',
        h: "20px"
      },
    }),
    subtle: ({ colorScheme }) => ({
      container: {
        bgColor: `${colorScheme}.default`,
      },
    }),
  },
} as ComponentStyleConfig;
