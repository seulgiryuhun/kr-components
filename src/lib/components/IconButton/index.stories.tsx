import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@/lib/components/IconButton';
import { ICON_TYPE } from '@/lib/components/Icon/type';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/IconButton',
  component: IconButton,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      options: ICON_TYPE,
      control: { type: 'radio' },
    },
    size: {
      options: [8, 16, 24, 32],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'vite',
    size: 16,
    onClick: () => console.log('clicked'),
  },
};
