import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@/lib/components/Sidebar';
import { Link, MemoryRouter } from 'react-router-dom';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [],
  },
  render: () => (
    <MemoryRouter>
      border는 storybook에서 확인하기 위해 추가함
      <div style={{ border: '1px gray solid', width: 'fit-content', height: '1000px', background: 'gray' }}>
        <Sidebar
          onXBtnClick={() => console.log('X')}
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
      </div>
    </MemoryRouter>
  ),
};
