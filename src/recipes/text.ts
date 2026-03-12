import { defineRecipe } from '@chakra-ui/react';

export const textRecipe = defineRecipe({
  className: 'chakra-text',
  base: {
    fontWeight: 'normal',
    lineHeight: 'moderate',
  },
  variants: {
    numbers: {
      true: {
        fontFamily: 'mono',
      },
      false: {
        fontFamily: 'body',
      },
    },
    size: {
      xs: {
        fontSize: 'xs',
        lineHeight: 'short',
      },
      sm: {
        fontSize: 'sm',
        lineHeight: 'short',
      },
      default: {
        fontSize: 'ew',
      },
      md: {
        fontSize: 'md',
      },
      lg: {
        fontSize: 'lg',
      },
      xl: {
        fontSize: 'xl',
      },
      '2xl': {
        fontSize: '2xl',
      },
      '3xl': {
        fontSize: '3xl',
      },
      '4xl': {
        fontSize: '4xl',
      },
      '5xl': {
        fontSize: '5xl',
      },
      '6xl': {
        fontSize: '6xl',
      },
    },
  },
  defaultVariants: {
    numbers: false,
    size: 'md',
  },
});
