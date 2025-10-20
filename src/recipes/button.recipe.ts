import { defineRecipe } from '@chakra-ui/react';

export default defineRecipe({
  base: {
    borderRadius: '2px',
    fontFamily: 'DM Sans',
    fontWeight: 'normal',
    lineHeight: 1,
    textTransform: 'capitalize',
  },
  defaultVariants: {
    colorPalette: 'yellow',
  },
  variants: {
    size: {
      lg: {
        px: '12',
      },
      md: {
        px: '6',
      },
    },
    variant: {
      outline: {
        background: 'transparent',
        border: '1px solid',
        borderColor: 'black.default',
        _active: {
          background: 'black.default',
          color: 'white',
        },
        color: 'black.default',
        _hover: {
          background: 'black.lighter',
        },
      },
      solid: {
        bg: `colorPalette.default`,
        border: '1px solid',
        borderColor: 'colorPalette.default',
        color: 'black.default',
        _active: {
          bg: `colorPalette.depressed`,
        },
        _hover: {
          bg: `colorPalette.hover`,
          borderColor: 'colorPalette.hover',
          _disabled: {
            background: `colorPalette.default`,
            border: 'none',
          },
        },
        _disabled: {
          background: `colorPalette.default`,
          border: 'none',
        },
      },
    },
  },
});
