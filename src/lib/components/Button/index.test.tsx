import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './index';

test('정확한 버튼 label을 렌더한다.', async () => {
  const buttonText = 'test button text';
  const button = render(<Button variant="filled" label={buttonText} />);

  expect(button.getByRole('button')).toBeDefined();
});

test('filled variant에 따른 버튼을 렌더한다.', async () => {
  const filledButton = render(<Button variant="filled" label="filled Button" />);

  expect(filledButton.getByRole('button').className).toContain('filled');
});

test('outlined variant에 따른 버튼을 렌더한다.', async () => {
  const outlinedButton = render(<Button variant="outlined" label="outlined Button" />);

  expect(outlinedButton.getByRole('button').className).toContain('outlined');
});

test('text variant에 따른 버튼을 렌더한다.', async () => {
  const textButton = render(<Button variant="text" label="text Button" />);

  expect(textButton.getByRole('button').className).toContain('text');
});

test('small size 버튼을 렌더한다.', async () => {
  const buttonText = 'filled button';
  const button = render(<Button label={buttonText} size="sm" />);

  expect(button.getByRole('button').className).toContain('sm');
});

test('medium size 버튼을 렌더한다.', async () => {
  const buttonText = 'filled button';
  const button = render(<Button label={buttonText} size="md" />);

  expect(button.getByRole('button').className).toContain('md');
});

test('large size 버튼을 렌더한다.', async () => {
  const buttonText = 'filled button';
  const button = render(<Button label={buttonText} size="lg" />);

  expect(button.getByRole('button').className).toContain('lg');
});

test('theme에 맞는 버튼을 렌더한다.', async () => {
  const buttonText = 'filled button';
  const button = render(<Button label={buttonText} theme="blue" />);

  expect(button.getByRole('button').className).toContain('blue');
});

test('icon을 포함한 버튼을 렌더한다.', async () => {
  const button = render(<Button variant="outlined" label="outlined Button" icon='vite' iconSize={8} />);

  expect(button.getByRole('button')).toBeDefined();
});
