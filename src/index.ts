import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from '@chakra-ui/react';
import { animationStyles } from './animation-styles.js';
import { breakpoints } from './breakpoints.js';
import { globalCss } from './global-css.js';
import { keyframes } from './keyframes.js';
import { layerStyles } from './layer-styles.js';
import { recipes } from './recipes/index.js';
import { semanticTokens } from './semantic-tokens/index.js';
import { slotRecipes } from './slot-recipes/index.js';
import { textStyles } from './text-styles.js';
import { tokens } from './tokens/index.js';

const themeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: 'chakra',
  cssVarsRoot: ':where(:root, :host)',
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
    animationStyles,
  },
});

export const system = createSystem(defaultBaseConfig, themeConfig);
