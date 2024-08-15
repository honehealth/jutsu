import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  baseStyle: {
    control: {
      borderRadius: '0',
      borderWidth: '2px',
    },
  },
  parts: ['control'],
  sizes: {
    lg: {
      control: {
        height: '6',
        width: '6',
      },
    },
    md: {
      control: {
        height: '6',
        width: '6',
      },
    },
    sm: {
      control: {
        height: '4',
        width: '4',
      },
    },
  },
} as ComponentStyleConfig;
