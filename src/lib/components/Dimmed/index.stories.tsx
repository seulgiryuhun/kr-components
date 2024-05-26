/* eslint-disable react-hooks/rules-of-hooks */
import { Dimmed } from '@/lib/components/Dimmed';
import { Sidebar } from '@/lib/components/Sidebar';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Link, MemoryRouter } from 'react-router-dom';

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

export const SidebarDimmed: StoryObj<typeof Sidebar> = {
  args: {
    headerHeight: 0,
    right: true,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <MemoryRouter>
        <button onClick={() => setIsOpen(true)}>sidebar</button>
        <Dimmed isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Sidebar
            isOpen={isOpen}
            headerHeight={args.headerHeight}
            onXBtnClick={() => setIsOpen(false)}
            right={args.right}
            links={[
              <Link to="all">all</Link>,
              <Link to={`/side-project`}>side-project</Link>,
              <Link to={`/about`}>about</Link>,
              <Link to={`/component`}>component</Link>,
              <Link to={`/react`}>react</Link>,
              <Link to={`/next`}>next</Link>,
              <Link to={`/browser`}>browser</Link>,
              <Link to={`/2023`}>2023</Link>,
              <a href="https://www.spacecloud.kr" target="_blank">
                외부링크 스클?? ㅋㅋ
              </a>,
            ]}
          />
        </Dimmed>
      </MemoryRouter>
    );
  },
};
