import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Card } from './index';

const props = {
  imageSrc: 'https://source.unsplash.com/random/?seoul',
  title: '하이빌리지 : 위치기반 가까운 관광지 보여주는 서비스 두 줄 이상 넘어 갈 때 말 줄임표 테스트',
  description:
    '하이스트하이빌리지 : 위치기반 가까운 관광지 보여주는 서비스 두 줄 이상 넘어 갈 때 말 줄임표 테스트하이빌리지 : 위치기반 가까운 관광지 보여주는 서비스 두 줄 이상 넘어 갈 때 말 줄임표 테스트',
  category: 'side-project',
  date: '2024.05.16',
  link: 'www.naver.com',
};

test('정확한 링크를 렌더한다.', () => {
  render(<Card {...props} />);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', props.link);
});

test('정확한 이미지를 렌더한다.', () => {
  render(<Card {...props} />);
  const imageElement = screen.getByAltText(`${props.title}_image`);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', props.imageSrc);
});

test('정확한 제목을 렌더한다.', () => {
  render(<Card {...props} />);
  const titleElement = screen.getByText(props.title);
  expect(titleElement).toBeInTheDocument();
});

test('정확한 설명을 렌더한다.', () => {
  render(<Card {...props} />);
  const descriptionElement = screen.getByText(props.description);
  expect(descriptionElement).toBeInTheDocument();
});

test('정확한 카테고리와 날짜를 렌더한다.', () => {
  render(<Card {...props} />);
  const cardFooterElement = screen.getByText(`${props.category} | ${props.date}`);
  expect(cardFooterElement).toBeInTheDocument();
});
