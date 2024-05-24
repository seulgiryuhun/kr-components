import { colors } from '@/styles/themes';
import styled from '@emotion/styled';

export const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img<{ src: string }>`
  border-radius: 16px;
  aspect-ratio: 16 / 9;
`;

export const Title = styled.strong`
  margin: 16px 0;
  font-size: 24px;
  color: ${colors.gray800};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 72px;
`;

export const Description = styled.p`
  color: ${colors.gray700};
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  min-height: 72px;
`;

export const CardFooter = styled.div`
  font-size: 12px;
  color: ${colors.gray400};
`;
