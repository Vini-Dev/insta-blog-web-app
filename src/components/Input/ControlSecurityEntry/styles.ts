import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.span`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  right: 16px;

  height: 48px;
  width: 24px;

  cursor: pointer;

  svg {
    color: ${({ theme }: ThemeType) => theme.gray1};
    font-size: 24px;

    transition: color 200ms linear;

    &:hover {
      color: ${({ theme }: ThemeType) => theme.gray2};
    }
  }
`;

export const Content = styled.span`
  border: none;
  background: none;
`;
