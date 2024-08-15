import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    border: '1px solid',
  },
  parts: ['field'],
  variants: {
    filled: {
      field: {
        borderRadius: 2,
      },
    },
    outline: {
      field: {
        borderRadius: 2,
        borderColor: 'black.light',
        _disabled: {
          color: 'black.light',
          opacity: 1,
        },
        _hover: {
          borderColor: 'black.light',
        },
      },
    },
  },
} as ComponentStyleConfig;
