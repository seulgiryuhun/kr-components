import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/main';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['blue', 'gray', 'peach'],
      control: { type: 'radio' },
    },
    icon: {
      options: [undefined, 'vite'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <span>text</span>,
    variant: 'filled',
    size: 'sm',
    theme: 'blue',
    icon: 'vite',
    iconSize: 16,
  },
};
