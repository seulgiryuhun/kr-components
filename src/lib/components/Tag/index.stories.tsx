import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/main';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text', description: '켰을때 배경' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'text',
  },
  decorators: [
    Story => (
      <div style={{ padding: '15px', background: 'black' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
