import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/main';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: 'https://source.unsplash.com/random/?seoul',
    title: '하이빌리지 : 위치기반 가까운 관광지 보여주는 서비스 두 줄 이상 넘어 갈 때 말 줄임표 테스트',
    description:
      '하이스트하이빌리지 : 위치기반 가까운 관광지 보여주는 서비스 두 줄 이상 넘어 갈 때 말 줄임표 테스트하이빌리지 : 위치기반 가까운 관광지 보여주는 서비스 두 줄 이상 넘어 갈 때 말 줄임표 테스트',
    category: 'side-project',
    date: '2024.05.16',
    link: 'www.naver.com',
  },
  render: args => (
    <div style={{ width: '400px' }}>
      <Card {...args} />
    </div>
  ),
};
