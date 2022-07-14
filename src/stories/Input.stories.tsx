import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '@chakra-ui/react';
import { basicArgTypes } from './utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    colorScheme: basicArgTypes.colorScheme,
    variant: {
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'outline',
  colorScheme: 'gray',
};
