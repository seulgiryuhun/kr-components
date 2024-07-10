import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from '@/lib/components/Tags';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tags',
  component: Tags,
  argTypes: {
    direction: { control: 'radio', options: ['row', 'column'] },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Tags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: [
      {
        children: 'text',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text2',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text3',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text4',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text5',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text6',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text7',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text8',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text9',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text2',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text3',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text4',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text5',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text6',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text7',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'text8',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'read only 끝',
        color: 'gray',
        isReadOnly: true,
        textColor: 'white',
      },
      {
        children: 'not readOnly',
        color: 'gray',
        isReadOnly: false,
        textColor: 'white',
      },
      {
        children: 'not readOnly',
        color: 'gray',
        isReadOnly: false,
        textColor: 'white',
      },
    ],
  },
};
