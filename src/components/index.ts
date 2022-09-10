import type { CSSObject, MantineTheme } from '@mantine/core';

import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

export interface ThemeComponent {
  defaultProps?: Record<string, any>;
  classNames?: Record<string, string>;
  styles?: Record<string, CSSObject> | ((theme: MantineTheme, params: any) => Record<string, CSSObject>);
}

export default {
  Button,
  Checkbox,
  Input,
  Select,
  Textarea,
} as Record<string, ThemeComponent>;
