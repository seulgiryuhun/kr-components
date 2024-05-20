import { colors } from '@/styles/themes';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background-color: ${colors.white};
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${colors.gray800};
  padding: 10px 24px;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

export const SidebarNavItem = styled.li<{ isSelected: boolean }>`
  a {
    padding: 10px 32px;
    display: inline-block;
    width: 100%;
    font-size: 16px;
    line-height: 24px;

    ${({ isSelected }) => {
      return isSelected
        ? css`
            color: #474747;
            font-weight: 600;
            background-color: #f3f3f3;
          `
        : css`
            color: #6a6b6e;
            font-weight: 400;
            background-color: ${colors.white};
          `;
    }};
  }
`;
