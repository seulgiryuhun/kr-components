import styled from '@emotion/styled';
import { IconProps } from './type';

export const StyledIcon = styled.i<IconProps>`
  display: inline-flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: url(${({ type }) => new URL(`./${type}.svg`, import.meta.url).href});
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
