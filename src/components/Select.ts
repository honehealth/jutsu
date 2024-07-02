import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    border: '1px solid',
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
        borderRadius: 0,
        borderColor: '#cfced2',
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
