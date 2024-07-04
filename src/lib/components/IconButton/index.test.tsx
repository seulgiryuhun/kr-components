import { IconButton } from '@/lib/components/IconButton';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

test('icon button 클릭시 onClick 함수가 실행된다.', async () => {
  const onClickMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  render(<IconButton onClick={() => console.log('click')} type="vite" size={16} />);
  const iconButton = screen.getByRole('button');
  fireEvent.click(iconButton);
  expect(onClickMock).toHaveBeenCalled();
  expect(onClickMock).toHaveBeenCalledWith('click');
});
