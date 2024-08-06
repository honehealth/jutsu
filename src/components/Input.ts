import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    background: 'whitePure',
  },
  parts: ['field'],
  variants: {
    filled: {
      field: {
        borderRadius: 0,
      },
    },
    outline: {
      field: {
        borderColor: 'grayDark.default',
        borderRadius: 0,
        _disabled: {
          color: 'grayMid.default',
          opacity: 1,
        },
        _hover: {
          borderColor: 'grayDark.default',
        },
      },
    },
  },
} as ComponentStyleConfig;
