import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  parts: ['field'],
  variants: {
    filled: {
      field: {
        borderRadius: 0,
      },
    },
    outline: {
      field: {
        borderColor: 'gray.600',
        borderRadius: 0,
        _disabled: {
          color: 'gray.400',
          opacity: 1,
        },
        _hover: {
          borderColor: 'gray.600',
        }
      },
    },
  },
} as ComponentStyleConfig;
