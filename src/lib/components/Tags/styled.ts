import styled from '@emotion/styled';
import { TagsDirection } from './type';

export const TagWrapper = styled.ul<{ gap?: string; direction: TagsDirection }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  gap: 0.5rem;
`;
