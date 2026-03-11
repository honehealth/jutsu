import { defineRecipe } from '@chakra-ui/react';

export const headingRecipe = defineRecipe({
  className: 'chakra-heading',
  base: {
    fontWeight: 'semibold',
    lineHeight: 'short',
  },
  variants: {
    numbers: {
      true: {
        fontFamily: 'mono',
      },
      false: {
        fontFamily: 'heading',
      },
    },
    size: {
      '2xs': {
        fontSize: 'xs',
      },
      xs: {
        fontSize: 'sm',
      },
      sm: {
        fontSize: 'md',
        lineHeight: 'moderate',
      },
      default: {
        fontSize: 'lg',
      },
      md: {
        fontSize: '2xl',
      },
      lg: {
        fontSize: '3xl',
      },
      xl: {
        fontSize: '4xl',
      },
      '2xl': {
        fontSize: '5xl',
      },
      '3xl': {
        fontSize: '6xl',
      },
      '4xl': {
        fontSize: '7xl',
      },
      '5xl': {
        fontSize: '8xl',
      },
      '6xl': {
        fontSize: '9xl',
      },
      '7xl': {
        fontSize: '9xl',
      },
    },
  },
  compoundVariants: [
    {
      numbers: true,
      size: '2xs',
      css: {
        lineHeight: 'moderate',
      },
    },
    {
      numbers: true,
      size: 'xs',
      css: {
        lineHeight: 'moderate',
      },
    },
  ],
  defaultVariants: {
    numbers: false,
    size: 'default',
  },
});
