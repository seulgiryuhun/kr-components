/* eslint-disable react-hooks/rules-of-hooks */
import { Dimmed } from '@/lib/components/Dimmed';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Dimmed> = {
  title: 'example/Dimmed',
  component: Dimmed,

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
type Story = StoryObj<typeof Dimmed>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Dimmed 켜기</button>
        <img
          src="https://avatars.githubusercontent.com/u/154111846?s=96&v=4"
          alt="슬기류훈ㅋ"
          width={300}
          height={300}
        />
        <Dimmed isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ background: 'white', height: '300px' }}>hihi</div>
        </Dimmed>
      </>
    );
  },
};
