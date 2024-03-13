import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    textTransform: 'uppercase',
    borderRadius: 0,
    fontFamily: 'Montserrat Variable',
    letterSpacing: 'widest',
    fontWeight: 'normal',
    lineHeight: 1,
  },
  sizes: {
    md: {
      px: '6',
    },
    lg: {
      px: '12',
    },
  },
  variants: {
    solid: () => ({
      _hover: {
        bg: 'black',
        color: 'white',
      },
    }),
    outline: ({ colorMode, colorScheme }) => ({
      color: colorMode === 'dark' ? `${colorScheme}.500` : 'gray.600',
      borderColor: `${colorScheme}.500`,
    }),
  },
  defaultProps: {
    colorScheme: 'yellow',
  },
} as ComponentStyleConfig;
