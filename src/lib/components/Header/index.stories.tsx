/* eslint-disable react-hooks/rules-of-hooks */
import { Header } from '@/lib/components/Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'example/Header',
  component: Header,

  tags: ['autodocs'],
  decorators: [
    Story => (
      <main style={{ height: '40vh', width: '100vw' }}>
        <Story />
      </main>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    leftBtn: {
      src: 'header/header_left.jpg',
      alt: 'left button',
    },
  },
  render: args => {
    return <Header {...args} />;
  },
};
