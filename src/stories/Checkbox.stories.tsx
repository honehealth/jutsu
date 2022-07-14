import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '@chakra-ui/react';
import { basicArgTypes } from './utils';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    colorScheme: basicArgTypes.colorScheme,
    size: basicArgTypes.size,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ label, ...args }) => (
  <Checkbox {...args}>{label}</Checkbox>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Checkbox',
  colorScheme: 'gray',
  size: 'md',
};
