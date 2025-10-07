import { defineRecipe } from '@chakra-ui/react';

export default defineRecipe({
  base: {
    letterSpacing: 'wide',
  },
  variants: {
    size: {
      sm: {
        borderRadius: 'xl',
        px: 2,
      },
      md: {
        borderRadius: 'xl',
        px: 3,
      },
      lg: {
        borderRadius: '2xl',
        px: 4,
      },
    },
    variant: {
      solid: {
        backgroundColor: 'white',
        border: '1px',
        color: 'colorPalette.default',
        fontWeight: 'normal',
      },
    },
  },
});
