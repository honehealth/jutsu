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
    outline: ({ colorMode, colorScheme }) => ({
      borderColor: `${colorScheme}.default`,
      color: colorMode === 'dark' ? `${colorScheme}.default` : 'grayDark.default',
    }),
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.default`,
      _hover: {
        bg: 'black',
        color: 'white',
      },
    }),
  },
} as ComponentStyleConfig;
