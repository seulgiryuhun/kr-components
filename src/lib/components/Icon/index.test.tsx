import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './index';

test('정확한 아이콘을 렌더한다.', () => {
  const iconType = 'vite';
  const iconSize = 16;
  const { getByTestId } = render(<Icon type="vite" size={16} />);
  const iconElement = getByTestId('icon');

  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveAttribute('type', iconType);
  expect(iconElement).toHaveAttribute('size', String(iconSize));
});
