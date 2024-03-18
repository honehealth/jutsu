import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  parts: ['field'],
  variants: {
    outline: {
      field: {
        borderRadius: 0,
        borderColor: 'gray.600',
        _disabled: {
          opacity: 1,
          color: 'gray.400',
        },
        _hover: {
          borderColor: 'gray.600',
        }
      },
    },
    filled: {
      field: {
        borderRadius: 0,
      },
    },
  },
} as ComponentStyleConfig;
