import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    borderRadius: 0,
    fontFamily: 'DM Sans Variable',
    fontWeight: 'normal',
    letterSpacing: 'widest',
    lineHeight: 1,
    textTransform: 'uppercase',
  },
  defaultProps: {
    colorScheme: 'yellow',
  },
  sizes: {
    lg: {
      px: '12',
    },
    md: {
      px: '6',
    },
  },
  variants: {
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.default`,
      _hover: {
        bg: 'black',
        color: 'white',
      },
    }),
    outline: ({ colorMode, colorScheme }) => ({
      color: colorMode === 'dark' ? `${colorScheme}.default` : 'grayDark.default',
      borderColor: `${colorScheme}.default`,
    }),
  },
} as ComponentStyleConfig;
