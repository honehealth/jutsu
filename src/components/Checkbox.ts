import { ComponentStyleConfig } from '@chakra-ui/react';

export default {
  parts: ['control'],
  baseStyle: {
    control: {
      borderRadius: '0',
      borderWidth: '2px',
    },
  },
  sizes: {
    sm: {
      control: {
        height: '4',
        width: '4',
      },
    },
    md: {
      control: {
        height: '6',
        width: '6',
      },
    },
    lg: {
      control: {
        height: '6',
        width: '6',
      },
    },
  },
} as ComponentStyleConfig;
