import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Tags } from '@/lib/components/Tags';

test('tags prop으로 전달된 태그들이 올바르게 렌더링 된다.', () => {
  const tags = [
    { color: 'gray', textColor: 'white', children: '태그1' },
    { color: 'gray', textColor: 'white', children: '태그2' },
    { color: 'gray', textColor: 'white', children: '태그3' },
  ];

  render(<Tags tags={tags} />);

  tags.forEach(tag => {
    expect(screen.getByText(tag.children)).toBeInTheDocument();
  });
});

test('direction prop으로 전달된 방향대로 올바르게 렌더링 된다.', () => {
  const tags = [
    { color: 'gray', textColor: 'white', children: '태그1' },
    { color: 'gray', textColor: 'white', children: '태그2' },
    { color: 'gray', textColor: 'white', children: '태그3' },
  ];

  render(<Tags direction="column" tags={tags} />);

  tags.forEach(tag => {
    expect(screen.getByText(tag.children)).toBeInTheDocument();
  });
});
