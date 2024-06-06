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
        borderColor: 'gray.600',
        _disabled: {
          color: 'gray.400',
          opacity: 1,
        },
        _hover: {
          borderColor: 'gray.600',
        },
      },
    },
  },
} as ComponentStyleConfig;
