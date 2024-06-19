import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    borderRadius: 0,
    fontFamily: 'DM Sans Variable',
    fontWeight: 'normal',
    letterSpacing: 'widest',
    lineHeight: 1,
    textTrasform: 'capitalize',
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
      color: 'black.default',
      _active: {
        bg: `${colorScheme}.depressed`,
      },
      _hover: {
        bg: `${colorScheme}.hover`,
      },
    }),
  },
} as ComponentStyleConfig;
