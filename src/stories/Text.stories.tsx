import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, Stack } from '@chakra-ui/react';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ text, ...args }) => (
  <Stack>
    <Text fontSize="3xl" {...args}>
      {text}
    </Text>
    <Text fontSize="2xl" {...args}>
      {text}
    </Text>
    <Text fontSize="xl" {...args}>
      {text}
    </Text>
    <Text fontSize="lg" {...args}>
      {text}
    </Text>
    <Text fontSize="md" {...args}>
      {text}
    </Text>
    <Text fontSize="sm" {...args}>
      {text}
    </Text>
    <Text fontSize="xs" {...args}>
      {text}
    </Text>
  </Stack>
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'The quick brown fox jumped over the brown dog.',
};
