import { defineSlotRecipe } from '@chakra-ui/react';

export default defineSlotRecipe({
  slots: ['control'],
  base: {
    control: {
      borderRadius: '0',
      borderWidth: '2px',
    },
  },
  variants: {
    size: {
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
  },
});
