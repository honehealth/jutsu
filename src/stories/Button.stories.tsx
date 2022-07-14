import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@chakra-ui/react';
import { basicArgTypes } from './utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: basicArgTypes,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ label, ...args }) => (
  <Button {...args}>{label}</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  variant: 'outline',
  colorScheme: 'gray',
  size: 'md',
};
