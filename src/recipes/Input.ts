import { defineRecipe } from '@chakra-ui/react';

export default defineRecipe({
  base: {
    background: 'whitePure',
    color: 'black.depressed',
  },
  variants: {
    variant: {
      filled: {
        borderRadius: 2,
      },
      outline: {
        borderColor: 'black.light',
        borderRadius: 2,
        _disabled: {
          color: 'black.light',
          opacity: 1,
        },
        _hover: {
          borderColor: 'black.light',
        },
      },
    },
  },
});
