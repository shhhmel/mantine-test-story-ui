import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from './Tree';

const meta: Meta<typeof Tree> = {
  title: 'Components/Tree',
  component: Tree,
};

export default meta;
type Story = StoryObj<typeof Tree>;

const data = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];

export const Default: Story = {
  args: {
    data,
  },
};
