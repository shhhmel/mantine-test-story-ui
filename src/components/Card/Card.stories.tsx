import { Meta, StoryObj } from '@storybook/react';
import { Text } from '@mantine/core';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <Text>Card Content</Text>,
    shadow: 'sm',
    padding: 'lg',
  },
};
