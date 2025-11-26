import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'filled',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'default',
    color: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    color: 'primary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'subtle',
    color: 'primary',
  },
};
