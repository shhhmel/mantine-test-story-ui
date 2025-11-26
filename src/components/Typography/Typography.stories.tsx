import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Text: Story = {
  args: {
    type: 'text',
    children: 'This is a text',
  },
};

export const Title: Story = {
  args: {
    type: 'title',
    children: 'This is a title',
  },
};
