import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/styles/themes';
import { ColorType } from '@/styles/themes/colors';

import type { ButtonColorType, ButtonProps, ButtonVariant } from './type';

const setVariant = (variant: ButtonVariant, color: ButtonColorType) => {
  const numberedColor = `${color}500` as ColorType;
  switch (variant) {
    case 'outlined':
      return css`
        color: ${colors[numberedColor]};
        background: none;
        border: 1px solid ${colors[numberedColor]};
      `;
    case 'text':
      return css`
        color: ${colors[numberedColor]};
        background: none;
        border: none;
      `;
    case 'filled':
    default:
      return css`
        color: white;
        background: ${colors[numberedColor]};
        border: none;
      `;
  }
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 1rem;
  font-weight: bold;

  outline: none;
  border-radius: 4px;
  border: none;
  padding: 0 1rem;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ variant, color }) => setVariant(variant, color)};

  &:hover {
    opacity: 0.8;
  }
`;
