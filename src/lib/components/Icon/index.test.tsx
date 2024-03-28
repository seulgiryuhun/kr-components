import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './index';

test('Icon 컴포넌트가 주어진 props에 따라 올바르게 렌더링되는지 확인한다.', async () => {
  const { getByTestId } = render(<Icon type="react" size={16} />);
  const iconElement = getByTestId('icon-button');

  expect(iconElement.style.backgroundImage).toContain('url(/react.svg)');
  expect(iconElement.style.width).toBe('16px');
  expect(iconElement.style.height).toBe('16px');
});
