import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/styles/global';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  Story => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];

export default preview;
