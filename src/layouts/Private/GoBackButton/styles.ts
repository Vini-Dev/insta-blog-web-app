import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.button`
  position: absolute;
  top: 8px;
  left: 24px;

  height: 32px;
  width: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  svg {
    font-size: 20px;
    pointer-events: none;

    color: ${({ theme }: ThemeType) => theme.gray3};

    transition: color 200ms linear;
  }

  &:hover svg {
    color: ${({ theme }: ThemeType) => theme.gray6};
  }

  &:disabled svg {
    color: ${({ theme }: ThemeType) => theme.gray1};
  }
`;
