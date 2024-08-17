import styled from '@emotion/styled';
import { IconProps } from './type';

export const StyledIcon = styled.i<IconProps>`
  display: inline-flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: url(${({ type }) => `../../../${type}.svg`});
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
