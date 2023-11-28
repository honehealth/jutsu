import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default {
  parts: ['container', 'control', 'label'],
  baseStyle: (props) => ({
    container: {
      alignItems: 'flex-start',
    },
    label: {
      width: 'full',
    },
    control: {
      mt: 1,
      _checked: {
        bg: 'transparent',
        _before: {
          w: '80%',
          h: '80%',
          bg: mode(
            `${props.colorScheme}.500`,
            `${props.colorScheme}.200`
          )(props),
        },
      },
    },
  }),
} as ComponentStyleConfig;
