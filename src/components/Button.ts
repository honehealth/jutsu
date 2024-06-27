import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    borderRadius: '2px',
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
      background: 'transparent',
      border: '1px solid',
      borderColor: 'black.default',
      _active: {
        background: 'black.default',
        color: 'white',
      },
      color: 'black.default',
      _hover: {
        background: 'black.lighter',
      },
    },
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.default`,
      border: '1px solid',
      borderColor: colorScheme === 'yellow' ? '#0e0b2033' : 'black.default',
      color: 'black.default',
      _active: {
        bg: `${colorScheme}.depressed`,
      },
      _hover: {
        bg: `${colorScheme}.hover`,
        _disabled: {
          background: `${colorScheme}.default`,
          border: 'none',
        }
      },
      _disabled: {
        background: `${colorScheme}.default`,
        border: 'none',
      }
    }),
  },
} as ComponentStyleConfig;
