import styled from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;

  border-radius: 4px;

  color: ${({ theme }: ThemeType) => theme.table.viewButton.normal.foreground};
  background-color: ${({ theme }: ThemeType) =>
    theme.table.viewButton.normal.background};

  &:after {
    content: 'Editar';
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);

    border-radius: 4px;

    padding: 4px 8px;
    background-color: ${({ theme }: ThemeType) => theme.gray6};

    opacity: 0;

    transition: opacity 200ms linear;
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }: ThemeType) => theme.table.viewButton.hover.foreground};
    background-color: ${({ theme }: ThemeType) =>
      theme.table.viewButton.hover.background};

    &:after {
      opacity: 1;
    }
  }
`;
