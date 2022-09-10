import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { basicArgTypes } from './utils';
import { Badge } from '@mantine/core';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: basicArgTypes,
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = ({ label, ...args }) => (
  <Badge {...args}>{label}</Badge>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Badge',
  colorScheme: 'gray',
  size: 'md',
  variant: 'outline',
};
