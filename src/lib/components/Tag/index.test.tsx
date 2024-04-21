import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Tag } from '.';

test('Tag의 children이 렌더링된다.', async () => {
  const tag = render(
    <Tag color="gray" textColor="white">
      태그
    </Tag>,
  );
  expect(tag.getByText('태그')).toBeInTheDocument();
});
