import styled, { css } from 'styled-components';

import { ThemeType } from 'src/styles/themes/light';

interface ContainerProps extends ThemeType {
  size: number;
}

export const Container = styled.div`
  ${({ size, theme }: ContainerProps) => css`
    height: ${size}px;
    width: ${size}px;
    border-radius: 50%;
    background-color: ${theme.avatar.background};
  `}
`;
