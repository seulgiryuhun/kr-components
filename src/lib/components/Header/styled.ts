import { zIndex } from '@/styles/themes';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 48px;
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  z-index: ${zIndex.focus[0]};
`;
