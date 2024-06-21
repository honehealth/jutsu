import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    borderRadius: 0,
    fontFamily: 'DM Sans Variable',
    fontWeight: 'normal',
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
    outline: {
      border: 'black.default',
      color: 'black.default',
      background: 'white',
      _hover: {
        background: 'black.lighter',
      },
      _active: {
        color: 'white',
        background: 'black.default',
      },
    },
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.default`,
      color: 'black.default',
      _active: {
        bg: `${colorScheme}.depressed`,
      },
      _hover: {
        bg: `${colorScheme}.hover`,
        _disabled: {
          background: `${colorScheme}.default`,
        }
      },
      _disabled: {
        background: `${colorScheme}.default`,
      }
    }),
  },
} as ComponentStyleConfig;
