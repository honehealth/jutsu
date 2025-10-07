import { defineSlotRecipe } from '@chakra-ui/react';

export default defineSlotRecipe({
  slots: ['label'],
  base: {
    label: {
      color: 'grayDark.default',
      fontWeight: 'light',
      marginLeft: '12px',
    },
  },
});
