import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '@chakra-ui/react';
import { basicArgTypes } from './utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: basicArgTypes,
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = ({ label, ...args }) => (
  <Tag {...args}>{label}</Tag>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Tag',
  colorScheme: 'gray',
  size: 'md',
  variant: 'outline',
};
