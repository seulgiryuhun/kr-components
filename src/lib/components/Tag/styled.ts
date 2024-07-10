import styled from '@emotion/styled';
import { TagProps } from './type';

export const StyledTag = styled.button<TagProps & { isActive: boolean }>`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-width: 56px;
  height: 32px;
  border-radius: 24px;
  padding: 6px 14px;
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};

  :disabled {
    cursor: default;
  }
  ${({ isActive, color, textColor }) =>
    isActive ? `background-color: ${textColor}; color: ${color};` : `background-color: ${color}; color: ${textColor};`}
`;
