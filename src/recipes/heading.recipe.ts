import { defineRecipe } from '@chakra-ui/react';

export default defineRecipe({
  base: {
    fontFamily: 'heading',
  },
  variants: {
    variant: {
      display: {
        fontFamily: 'display',
        fontWeight: 400,
      },
    },
  },
});
