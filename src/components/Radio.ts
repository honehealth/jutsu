import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default {
  baseStyle: (props) => ({
    container: {
      alignItems: 'flex-start',
    },
    control: {
      mt: 1,
      _checked: {
        bg: 'transparent',
        _before: {
          bg: mode(
            `${props.colorScheme}.500`,
            `${props.colorScheme}.200`
          )(props),
          h: '80%',
          w: '80%',
        },
      },
    },
    label: {
      width: 'full',
    },
  }),
  parts: ['container', 'control', 'label'],
} as ComponentStyleConfig;
