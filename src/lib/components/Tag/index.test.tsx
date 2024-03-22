import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { expect, test, vi } from 'vitest';
import { Tag } from '.';

test('Tag의 children이 렌더링된다.', async () => {
  const tag = render(<Tag>태그</Tag>);
  expect(tag.getByRole('button', { name: '태그' })).toBeInTheDocument();
});

// 피그마 : https://www.figma.com/file/tqLpIAZ40Zvz95H33cFDdQ/%EC%8A%AC%EA%B8%B0%EB%A5%98%ED%9B%88?type=design&node-id=120-13161&mode=design&t=PiZ5bm2BY6ilZxOr-0
test('클릭하여 켰다 끌 수 있고 피그마에 있는 색상이 기본으로 설정된다.', async () => {
  const user = userEvent.setup();
  render(<Tag>태그</Tag>);
  const tag = screen.getByRole('button', { name: '태그' });
  expect(tag).toBeInTheDocument();
  const tagStyle = window.getComputedStyle(tag);

  // 처음엔 기본 색상
  expect(tagStyle.backgroundColor).toBe('#E6E8EA');

  // 태그 클릭하면 켜짐
  await user.click(tag);
  expect(tagStyle.backgroundColor).toBe('#474747');
});

test('Tag에 onClick을 넣을 수 있다.', async () => {
  const user = userEvent.setup();
  render(<Tag onClick={() => console.log('tag click')}>태그</Tag>);
  const tag = screen.getByRole('button', { name: '태그' });
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
  await user.click(tag);
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('tag click');
});
