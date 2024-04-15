import { expect, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { DefaultButton as Button } from './index';

test('정확한 버튼 텍스트를 렌더한다.', () => {
  const { getByText } = render(
    <Button variant="filled" color="gray">
      Click me
    </Button>,
  );
  const buttonElement = getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('아이콘과 함께 버튼을 렌더한다.', () => {
  const { getByTestId } = render(<Button icon="vite" variant="filled" color="gray" data-testid="icon-add" />);
  const iconElement = getByTestId('icon-add');
  expect(iconElement).toBeInTheDocument();
});

test('filled variant에 따른 버튼을 렌더한다.', async () => {
  const filledButton = render(<Button variant="filled" color="gray" />);

  expect(filledButton.getByRole('button')).toBeDefined();
});

test('outlined variant에 따른 버튼을 렌더한다.', async () => {
  const outlinedButton = render(<Button variant="outlined" color="gray" />);

  expect(outlinedButton.getByRole('button')).toBeDefined();
});

test('text variant에 따른 버튼을 렌더한다.', async () => {
  const textButton = render(<Button variant="text" color="gray" />);

  expect(textButton.getByRole('button')).toBeDefined();
});

test('onClick 이벤트가 발생한다.', async () => {
  const onClickMock = vi.fn();
  const { getByText } = render(
    <Button variant="text" color="gray" onClick={onClickMock}>
      Click me
    </Button>,
  );
  const buttonElement = getByText('Click me');

  fireEvent.click(buttonElement);

  expect(onClickMock).toHaveBeenCalled();
});
