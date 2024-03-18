import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  parts: ['field'],
  variants: {
    outline: {
      field: {
        borderRadius: 0,
        borderColor: 'gray.600',
      },
    },
    filled: {
      field: {
        borderRadius: 0,
      },
    },
  },
} as ComponentStyleConfig;
