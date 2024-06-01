import { zIndex } from '@/styles/themes';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DimmedWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  z-index: ${zIndex['background']['0']};
  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          transition: opacity 0.5s;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: all 0.5s;
        `}
`;
