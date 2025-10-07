import { defineSlotRecipe } from '@chakra-ui/react';

export default defineSlotRecipe({
  slots: ['root', 'control', 'label'],
  base: {
    root: {
      alignItems: 'flex-start',
    },
    control: {
      mt: 1,
      _checked: {
        bg: 'transparent',
        _before: {
          bg: 'colorPalette.default',
          h: '80%',
          w: '80%',
        },
      },
    },
    label: {
      width: 'full',
    },
  },
});
