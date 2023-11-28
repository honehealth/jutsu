import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  useToast,
} from '@chakra-ui/react';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    status: {
      options: ['info', 'error', 'warning', 'success'],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ content, ...args }) => (
  <Alert {...args}>
    <AlertIcon />
    <AlertDescription>{content}</AlertDescription>
  </Alert>
);

const ToastTemplate: ComponentStory<typeof Alert> = (args) => {
  const toast = useToast();

  const handleOpen = () => {
    toast({
      description: 'This is a toast',
      duration: 60000,
    });
  };

  return <Button onClick={handleOpen}>Open toast</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  content: 'This is an alert',
  status: 'info',
};

export const AsToast = ToastTemplate.bind({});
