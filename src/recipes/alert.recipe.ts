import { defineSlotRecipe } from '@chakra-ui/react';

export default defineSlotRecipe({
  base: {
    root: {
      borderWidth: '1px',
      borderColor: `colorPalette.default`,
    },
  },
  slots: ['root', 'indicator'],
  variants: {
    variant: {
      solid: {
        root: {
          bgColor: `colorPalette.light`,
          color: 'black',
        },
        indicator: {
          color: `colorPalette.light`,
          bgColor: `colorPalette.default`,
          borderRadius: '10px',
          p: '1px',
          h: '20px',
        },
      },
      subtle: {
        root: {
          bgColor: `colorPalette.default`,
        },
      },
    },
  },
});
