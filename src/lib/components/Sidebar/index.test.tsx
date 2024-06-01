import { Sidebar } from '@/lib/components/Sidebar';
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

test('sidebar X버튼 작동확인', () => {
  const onXBtnClick = vi.spyOn(console, 'log').mockImplementation(() => {});

  render(<Sidebar isOpen links={[]} onXBtnClick={() => console.log('x')} />);
  const xBtn = screen.getByRole('button');
  xBtn.click();
  expect(onXBtnClick).toHaveBeenCalled();
  expect(onXBtnClick).toHaveBeenCalledWith('x');
});
