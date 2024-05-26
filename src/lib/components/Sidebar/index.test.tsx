import { Sidebar } from '@/lib/components/Sidebar';
import { render, screen } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';

test('sidebar에 links가 링크가 아닌 다른 태그를 사용했을 때 에러를 던진다.', () => {
  const links = [<div>test</div>];

  expect(() => render(<Sidebar isOpen links={links} onXBtnClick={() => console.log('x')} />)).toThrow(
    'a태그가 아닌 다른 태그를 사용하셨습니다.',
  );
});

describe('a태그와 react-router-dom의 Link태그를 사용했을 때 에러를 던지지 않는다.', () => {
  test('a태그와 Link태그를 사용했을 때 에러를 던지지 않는다.', () => {
    const links = [<a href="/">test</a>, <Link to="/">test</Link>];
    expect(() =>
      render(
        <MemoryRouter>
          <Sidebar isOpen links={links} onXBtnClick={() => console.log('x')} />
        </MemoryRouter>,
      ),
    ).not.toThrow();
  });

  test('sidebar 아이템들은 링크이다.', () => {
    const links = [
      <a href="https://www.naver.com/" target="_blank">
        naver
      </a>,
      <Link to="/internal">internal</Link>,
    ];
    render(
      <MemoryRouter>
        <Sidebar isOpen links={links} onXBtnClick={() => console.log('x')} />
      </MemoryRouter>,
    );

    const externalLink = screen.getByRole('link', { name: 'naver' });
    expect(externalLink).toHaveAttribute('href', 'https://www.naver.com/');
    const internalLink = screen.getByRole('link', { name: 'internal' });
    expect(internalLink).toHaveAttribute('href', '/internal');
  });
});

test('sidebar X버튼 작동확인', () => {
  const onXBtnClick = vi.spyOn(console, 'log').mockImplementation(() => {});

  render(<Sidebar isOpen links={[]} onXBtnClick={() => console.log('x')} />);
  const xBtn = screen.getByRole('button');
  xBtn.click();
  expect(onXBtnClick).toHaveBeenCalled();
  expect(onXBtnClick).toHaveBeenCalledWith('x');
});
