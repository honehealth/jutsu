import { defineSemanticTokens } from '@chakra-ui/react';

/**
 * Shadow semantic tokens for the Jutsu design system.
 *
 * These tokens provide four elevation levels following the design system specifications.
 * They include both light and dark mode values for proper contrast and visual hierarchy.

 *
 * @example
 * ```tsx
 * // In your components
 * import { Box } from '@chakra-ui/react'
 *
 * // Using the shadows token reference
 * <Box boxShadow="shadows.1" /> // Subtle shadow
 * <Box boxShadow="shadows.2" /> // Card default shadow
 * <Box boxShadow="shadows.3" /> // Medium elevation
 * <Box boxShadow="shadows.4" /> // Strong elevation
 * ```
 *
 * @example
 * // Or using shorthand in Chakra props
 * ``` tsx
 * <Box shadow="1" />
 * ```
 *
 */
export const shadows = defineSemanticTokens.shadows({
  '1': {
    value: {
      _light: '0px 2px 4px 0px rgba(0, 0, 0, 0.04)',
      _dark: '0px 1px 1px {black/64}, 0px 0px 1px inset {colors.gray.300/20}',
    },
  },
  '2': {
    value: {
      _light: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
      _dark: '0px 2px 4px {black/64}, 0px 0px 1px inset {colors.gray.300/30}',
    },
  },
  '3': {
    value: {
      _light: '0px 4px 16px 0px rgba(0, 0, 0, 0.12)',
      _dark: '0px 4px 8px {black/64}, 0px 0px 1px inset {colors.gray.300/30}',
    },
  },
  '4': {
    value: {
      _light: '2px 4px 16px 0px rgba(0, 0, 0, 0.24)',
      _dark: '0px 8px 16px {black/64}, 0px 0px 1px inset {colors.gray.300/30}',
    },
  },
  inset: {
    value: {
      _light: 'inset 0 0 0 1px {black/5}',
      _dark: 'inset 0 0 0 1px {colors.gray.300/5}',
    },
  },
});
