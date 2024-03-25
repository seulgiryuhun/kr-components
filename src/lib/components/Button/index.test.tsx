import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './index';

test('정확한 버튼 children을 렌더한다.', async () => {
  const button = render(<Button variant="filled" theme="gray">text</Button>);

  expect(button.getByRole('button', { name: 'text' })).toBeDefined();
});

test('filled variant에 따른 버튼을 렌더한다.', async () => {
  const filledButton = render(<Button variant="filled" theme="gray" />);

  expect(filledButton.getByRole('button').className).toContain('filled');
});

test('outlined variant에 따른 버튼을 렌더한다.', async () => {
  const outlinedButton = render(<Button variant="outlined" theme="gray" />);

  expect(outlinedButton.getByRole('button').className).toContain('outlined');
});

test('text variant에 따른 버튼을 렌더한다.', async () => {
  const textButton = render(<Button variant="text" theme="gray" />);

  expect(textButton.getByRole('button').className).toContain('text');
});

test('small size 버튼을 렌더한다.', async () => {
  const button = render(<Button theme="gray" size="sm" />);

  expect(button.getByRole('button').className).toContain('sm');
});

test('medium size 버튼을 렌더한다.', async () => {
  const button = render(<Button theme="gray" size="md" />);

  expect(button.getByRole('button').className).toContain('md');
});

test('large size 버튼을 렌더한다.', async () => {
  const button = render(<Button theme="gray" size="lg" />);

  expect(button.getByRole('button').className).toContain('lg');
});

test('theme에 맞는 버튼을 렌더한다.', async () => {
  const button = render(<Button theme="gray" />);

  expect(button.getByRole('button').className).toContain('gray');
});
