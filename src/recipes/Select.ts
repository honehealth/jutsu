import { defineSlotRecipe } from '@chakra-ui/react';

export default defineSlotRecipe({
  slots: ['root', 'field'],
  base: {
    root: {
      border: '1px solid',
    },
  },
  variants: {
    variant: {
      filled: {
        field: {
          borderRadius: 2,
        },
      },
      outline: {
        field: {
          borderRadius: 2,
          borderColor: 'black.light',
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
  },
});
