import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading, Stack } from '@chakra-ui/react';

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = ({ text, ...args }) => (
  <Stack>
    <Heading size="xl" {...args}>
      {text}
    </Heading>
    <Heading size="lg" {...args}>
      {text}
    </Heading>
    <Heading size="md" {...args}>
      {text}
    </Heading>
    <Heading size="sm" {...args}>
      {text}
    </Heading>
    <Heading size="xs" {...args}>
      {text}
    </Heading>
  </Stack>
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'The quick brown fox jumped over the brown dog.',
};
