import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    background: 'whitePure',
    color: 'black.depressed',
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
        borderColor: 'black.light',
        borderRadius: 2,
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
