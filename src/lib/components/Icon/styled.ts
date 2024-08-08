import styled from '@emotion/styled';
import { IconProps } from './type';

const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL || '';

export const StyledIcon = styled.i<IconProps>`
  display: inline-flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: url(${({ type }) => `${imageBaseUrl}/${type}.svg`});
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
